const {Router} = require('express')
const Historial = require('../../modelos/Historial')
const Usuarios = require('../../modelos/Usuarios')
const Pedidos = require('../../modelos/Pedidos')

const postHistorial = Router()

postHistorial.post('/', async (req,res,next) =>{
    const {_id, totalPayable} = req.body
    try {
        const usuario = await Usuarios.find({_id})
        console.log(usuario[0])
        if(usuario[0].orders[0]){
            const crearHistorial = await Historial.create({
                user: usuario[0]._id,
                orders: usuario[0].orders[0],
                totalPayable:totalPayable
            })
            const modificar = await Usuarios.findOneAndUpdate({_id},{
                orders:[],
                $push:{
                    purchaseHistory: crearHistorial._id
                }
            })
            console.log(modificar)
            const crearPedido = await Pedidos.create({user:_id})
            const buscar = await Usuarios.findOneAndUpdate({_id},{
                orders: crearPedido._id
            })
            res.send(`Tu orden de compra fue creada con exito ${buscar}`)
            next()
        }else{
            res.status(404).send('Primero debe agregar productos al pedido, para poder realizar su compra')
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = postHistorial