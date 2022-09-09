const {Router} = require('express')
const Pedidos = require('../../modelos/Pedidos')
const Usuarios = require('../../modelos/Usuarios')

const cargarPedido = Router()

cargarPedido.put('/', async (req,res)=>{
    const {user, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts, totalPayable, delievery, adress} =req.body
    console.log(user, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts, totalPayable, delievery, adress)
    try {
        const usuario = await Usuarios.findById({_id:user})
        const crear = await Pedidos.findOneAndUpdate({_id:usuario?.orders[0]},{
            saladsMenu: saladsMenu? saladsMenu?.map(e => e):[],
            saladsMenuBig: saladsMenuBig? saladsMenuBig?.map(e => e):[],
            saladsMed: saladsMed? saladsMed?.map(e => e):[],
            saladsBig: saladsBig? saladsBig?.map(e => e):[],
            beverages: beverages? beverages?.map(e => e):[],
            desserts: desserts? desserts?.map(e => e):[],
            totalPayable,
            delievery,
            adress
        })
            res.send(crear)
    } catch (error) {
        console.log(error)
    }
})

module.exports = cargarPedido