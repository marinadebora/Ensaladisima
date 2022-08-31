const {Router} = require("express")
const Bebidas = require('../../modelos/Bebidas');
const Pedidos = require("../../modelos/Pedidos");
const Beverages = require('../../modelos/Bebidas')

const putPedidoBebida = Router();

putPedidoBebida.put("/:id", async (req,res,next)=>{
    const {id} = req.params;
    const {bebidas} = req.body;
    try {
        const buscar = await Bebidas.find({name:bebidas})
        if(buscar[0]){
            const anexar = await Pedidos.findOneAndUpdate({_id:id},{
                $push:{
                    beverages: buscar[0]._id
                }
            })
            const reducir = await Beverages.findOneAndUpdate({name:bebidas},{
                stock: buscar[0].stock - 1
            })
            res.send(`La bebida ${bebidas}, se agrego corectamente con el numero ${anexar._id}`)
        }else{
            res.status(`La bebida no se encuentra en nuestro inventario`)
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = putPedidoBebida