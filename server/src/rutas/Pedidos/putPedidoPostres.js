const {Router} = require("express")
const Postres = require('../../modelos/Postres');
const Pedidos = require("../../modelos/Pedidos");

const putPedidoPostre = Router();

putPedidoPostre.put("/:id", async (req,res,next)=>{
    const {id} = req.params;
    const {postres} = req.body;
    try {
        const buscar = await Postres.find({name:postres})
        if(buscar[0]){
            const anexar = await Pedidos.findOneAndUpdate({_id:id},{
                $push:{
                    desserts: buscar[0]._id
                }
            })
            const reducir = await Postres.findOneAndUpdate({name:postres},{
                stock: buscar[0].stock - 1
            })
            res.send(`El Postres ${postres}, se agrego corectamente con el numero ${anexar._id}`)
        }else{
            res.status(`El Postres no se encuentra en nuestro inventario`)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = putPedidoPostre