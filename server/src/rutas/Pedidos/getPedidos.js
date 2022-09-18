const {Router} = require('express')
const  Pedidos = require("../../modelos/Pedidos")

const getPedidos = Router()

getPedidos.get("/", async (req,res)=>{
    try {
        const buscar = await Pedidos.find({}).populate("user",{
            password:0,
            admin:0,
            activo:0,
            orders:0,
            purchaseHistory:0,
            __v:0
        })
        .populate("saladsMenu",{__v:0})
        .populate("saladsMenuBig",{__v:0})
        .populate("saladsMed",{__v:0})
        .populate("saladsBig",{__v:0})
        .populate("beverages",{__v:0,stock:0})
        .populate("desserts",{__v:0,stock:0});
        const pedido = buscar.map(d=>{
            return {
                _id: d._id,
                user: d.user[0],
                salads: d.saladsMenu.concat(d.saladsMenuBig).concat(d.saladsMed).concat(d.saladsBig),
                beverages: d.beverages.map(e => e)? d.beverages.map(e => e): [],
                desserts:d.desserts.map(e => e)? d.desserts.map(e => e):[],
                totalPayable: d.saladsMenu.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsMed.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsBig.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.beverages.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.desserts.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsMenuBig.map(a => a.price).reduce((sum, current) => sum + current, 0),
                delievery: d.delievery,
                adress: d.adress,
                facheyhora:d.facheyhora
            }
        })
        
        buscar.length?
        res.send(pedido):
        res.status(404).send('No hay ordenes de clientes aun')
    } catch (error) {
        console.log(error)
    }
})
module.exports= getPedidos