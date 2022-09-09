const {Router} = require('express')
const Pedidos = require('../../modelos/Pedidos')
const Usuarios = require('../../modelos/Usuarios')

const crearLocalStorage = Router()

crearLocalStorage.post('/', async (req,res)=>{
    const {user, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts, totalPayable, delievery, adress} =req.body
    console.log(user, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts, totalPayable, delievery, adress)
    try {
        const usuario = await Usuarios.findById({_id:user})
        console.log(!usuario?.orders[0])
        if(!usuario.orders[0]){
            const crear = await Pedidos.create({user, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts, totalPayable, delievery, adress})
            const actualizar = await Usuarios.findOneAndUpdate({_id:usuario._id},{
                    orders:crear._id
                
            })
            res.send(actualizar )
        }else{
            res.send(usuario)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = crearLocalStorage