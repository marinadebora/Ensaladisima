const {Router} = require('express');
const Usuarios = require('../../modelos/Usuarios');
const Pedidos = require('../../modelos/Pedidos');
const EnsaladasBigs = require('../../modelos/EnsaladasBig')
var findOrCreate = require('mongoose-findorcreate')

const crearEnsaladasBigs = Router()

crearEnsaladasBigs.post('/', async (req, res, next) =>{
    const { base, protein, complement, suace, topping} = req.body;
    const {id} = req.body;
    console.log(id)
    try {
        const use = await Usuarios.find({_id:id})
        if(use){
            const crearEnsalada = await EnsaladasBigs.findOrCreate({
                base,
                protein,
                complement,
                suace,
                topping
            })
            const ensalada = await EnsaladasBigs.find({
                base,
                protein,
                complement,
                suace,
                topping
            })
            if(use[0].orders.length){
                const pedidoExite = await Pedidos.findOneAndUpdate({_id:use[0].orders},{
                    $push:{
                        saladsBig:ensalada[0]._id,
                    }
                })
                res.send(pedidoExite)
            }else{
                const pedido = await Pedidos.create({
                    user: use[0]._id,
                    saladsBig: ensalada[0]._id,
                    adress: use[0].adress
                })
                const pedidodeUsuario = await Usuarios.findOneAndUpdate({_id:id},{
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

module.exports = crearEnsaladasBigs