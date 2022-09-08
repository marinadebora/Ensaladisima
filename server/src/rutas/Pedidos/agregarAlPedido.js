const {Router} = require('express');
const Pedidos = require('../../modelos/Pedidos');
const Postres = require('../../modelos/Postres');
const Bebidas = require('../../modelos/Bebidas')

const agregarAlPedido = Router()

agregarAlPedido .put('/', async (req,res,next) =>{
    /* const {id} = req.params;  */
    const {_id,id} = req.body;
    try {
        const pedido = await Pedidos.find({_id:id})
        const postres = pedido[0].desserts.filter(e => e == _id)
        const bebidas = pedido[0].beverages.filter(e => e == _id)
        const ensaledasGrande = pedido[0].saladsBig.filter(e => e ==_id)
        const ensaladaMediana = pedido[0].saladsMed.filter(e => e == _id)
        const menuMediana = pedido[0].saladsMenu.filter(e => e == _id)
        const menuGrande = pedido[0].saladsMenuBig.filter(e => e == _id)
        console.log(ensaledasGrande)
        console.log(postres)
        console.log(bebidas)
        console.log(ensaladaMediana)
        console.log(menuMediana)

        if(postres[0]){
            const buscarPostres = await Postres.find({_id})
            const borrarDesserts = await Pedidos.findOneAndUpdate({_id:id,desserts:_id},{
                $push:{
                    desserts:_id
                }
            })
            const stockDesserts = await Postres.findOneAndUpdate({_id:_id},{
                stock: buscarPostres[0].stock - 1
            })
            res.send('El postre se elimino del pedido correctamente')
        }else if(bebidas[0]){
            const buscarBebidas = await Bebidas.find({_id:_id})
            const borrarBeverages = await Pedidos.findOneAndUpdate({_id:id,beverages:_id},{
                $push:{
                    beverages:_id
                }
            })
            const stockBeverages = await Bebidas.findOneAndUpdate({_id:_id},{
                stock: buscarBebidas[0].stock - 1
            })
            res.send('La bebida se elimino del pedido correctamente')
        }else if(ensaledasGrande[0]){
            const borrarSaladsBig = await Pedidos.findOneAndUpdate({_id:id,saladsBig:_id},{
                $push:{
                    saladsBig:_id
                }
            })
            res.send('La ensalda grande se elimino del pedido correctamente')
        }else if(ensaladaMediana[0]){
            const borrarSaladsMed = await Pedidos.findOneAndUpdate({_id:id,saladsMed:_id},{
                $push:{
                    saladsMed:_id
                }
            })
            res.send('La ensalda mediana se elimino del pedido correctamente')
        }else if(menuMediana[0]){
            const borrarSaladaMenu = await Pedidos.findOneAndUpdate({_id:id,saladsMenu:_id},{
                $push:{
                    saladsMenu:_id
                }
            })
            res.send('La ensalda que elegistes de nuestro menu se elimino del pedido correctamente')
        }else if(menuGrande[0]){
            const borrarSaladsMenuBig = await Pedidos.findOneAndUpdate({_id:id,saladsMenuBig:_id},{
                $unset:{
                    saladsMenuBig:_id
                }
            })
            res.send('La ensalda que elegistes de nuestro menu se elimino del pedido correctamente')
        }else{
            res.status(404).send("Lo sentimos, pero intentas eliminar algo que no se encuentra en el pedido")
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = agregarAlPedido 