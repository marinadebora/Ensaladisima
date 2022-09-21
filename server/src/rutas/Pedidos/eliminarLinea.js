const { Router } = require('express');
const Pedidos = require('../../modelos/Pedidos');
const Postres = require('../../modelos/Postres');
const Bebidas = require('../../modelos/Bebidas')

const eliminarLinea = Router()

eliminarLinea.put('/', async (req, res, next) => {
    /* const {id} = req.params;  */
    const { _id, id } = req.body;

    try {
        const pedido = await Pedidos.find({ _id: id })

        if (pedido[0]) {
            const postres = pedido[0]?.desserts?.filter(e => e == _id)
            const bebidas = pedido[0]?.beverages.filter(e => e == _id)
            const ensaledasGrande = pedido[0]?.saladsBig.filter(e => e == _id)
            const ensaladaMediana = pedido[0]?.saladsMed.filter(e => e == _id)
            const menuMediana = pedido[0]?.saladsMenu.filter(e => e == _id)
            const menuGrande = pedido[0]?.saladsMenuBig.filter(e => e == _id)
            console.log( postres?.length)
            if (postres[0]) {
                const buscarPostres = await Postres.find({ _id })
                const filtrar = pedido[0]?.desserts?.filter(e => e != _id)
                /* console.log(pedido[0]?.desserts?.filter(e => e !== _id)) */
                const borrarDesserts = await Pedidos.findOneAndUpdate({_id: id},{desserts: filtrar})
                /* console.log(borrarDesserts) */
                const stockDesserts = await Postres.findOneAndUpdate({ _id: _id }, {
                    stock: buscarPostres[0].stock + postres?.length
                })
                console.log(stockDesserts)
                res.send(borrarDesserts)
            } else if (bebidas[0]) {
                const buscarBebidas = await Bebidas.find({ _id: _id })
                const filtrarBebida = pedido[0]?.beverages?.filter(e => e != _id)
                const borrarBeverages = await Pedidos.findOneAndUpdate({ _id: id}, {beverages: filtrarBebida })
                /* console.log(borrarBeverages) */
                const stockBeverages = await Bebidas.findOneAndUpdate({ _id: _id }, {
                    stock: buscarBebidas[0].stock + bebidas?.length
                })
                res.send('La bebida se elimino del pedido correctamente')
            } else if (ensaledasGrande[0]) {
                const filtrarSaladsBig = pedido[0]?.saladsBig?.filter(e => e != _id)
                const borrarSaladsBig = await Pedidos.findOneAndUpdate({ _id: id}, {saladsBig:filtrarSaladsBig })
                res.send('La ensalda grande se elimino del pedido correctamente')
            } else if (ensaladaMediana[0]) {
                const filtrarSaladsMed = pedido[0]?.saladsMed?.filter(e => e != _id)
                const borrarSaladsMed = await Pedidos.findOneAndUpdate({ _id: id}, {saladsMed: filtrarSaladsMed })
                res.send('La ensalda mediana se elimino del pedido correctamente')
            } else if (menuMediana[0]) {
                const filtrarSaladsMenu = pedido[0]?.saladsMenu?.filter(e => e != _id)
                const borrarSaladaMenu = await Pedidos.findOneAndUpdate({ _id: id}, {saladsMenu: filtrarSaladsMenu })
                res.send('La ensalda que elegistes de nuestro menu se elimino del pedido correctamente')
            } else if (menuGrande[0]) {
                const filtrarSaladsMenuBig = pedido[0]?.saladsMenuBig?.filter(e => e != _id)
                const borrarSaladsMenuBig = await Pedidos.findOneAndUpdate({ _id: id}, {saladsMenuBig: filtrarSaladsMenuBig })
                res.send('La ensalda que elegistes de nuestro menu se elimino del pedido correctamente')
            } else {
                res.status(404).send("Lo sentimos, pero intentas eliminar algo que no se encuentra en el pedido")
            }
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = eliminarLinea 