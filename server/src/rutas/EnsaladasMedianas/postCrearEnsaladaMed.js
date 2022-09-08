const {Router} = require('express');
const Usuarios = require('../../modelos/Usuarios');
const Pedidos = require('../../modelos/Pedidos');
const EnsaladasMedians = require('../../modelos/EnsaladasMedian')
var findOrCreate = require('mongoose-findorcreate')

const crearEnsaladaMed = Router()

crearEnsaladaMed.post('/', async (req, res, next) =>{
    const { base, protein, complement, suace, topping} = req.body;
    const {email} = req.body;
    try {
        const use = await Usuarios.find({email:email})
        if(use){
            const crearEnsalada = await EnsaladasMedians.findOrCreate({
                base,
                protein,
                complement,
                suace,
                topping
            })
            const ensalada = await EnsaladasMedians.find({
                base,
                protein,
                complement,
                suace,
                topping
            })
            if(use[0].orders.length){
                const pedidoExite = await Pedidos.findOneAndUpdate({_id:use[0].orders},{
                    $push:{
                        saladsMed:ensalada[0]._id,
                    }
                })
                res.send(pedidoExite)
            }else{
                const pedido = await Pedidos.create({
                    user: use[0]._id,
                    saladsMed: ensalada[0]._id,
                    adress: use[0].adress
                })
                const pedidodeUsuario = await Usuarios.findOneAndUpdate({email:email},{
                    $push:{
                        orders: pedido._id
                    }
                })
                res.send(pedidodeUsuario)
            }
        }else{
            res.status(404).send('el id no existe')
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = crearEnsaladaMed