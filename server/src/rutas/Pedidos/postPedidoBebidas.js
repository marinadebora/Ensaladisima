const {Router} = require("express")
const Bebidas = require('../../modelos/Bebidas');
const Pedidos = require("../../modelos/Pedidos");
const Beverages = require('../../modelos/Bebidas');
const Usuarios = require("../../modelos/Usuarios");

const postPedidoBebida = Router();

postPedidoBebida.post("/", async (req,res,next)=>{
    
    const {bebidas, usuario} = req.body;
    try {
        const usuarios = await Usuarios.find({email:usuario})
        const buscar = await Bebidas.find({name:bebidas})
        if(usuarios[0].orders){
            const pedido = await Pedidos.find({_id:usuarios[0].orders})
            if(pedido[0]){
                const anexar = await Pedidos.findOneAndUpdate({ _id: pedido[0]._id }, {
                    $push: {
                        beverages: buscar[0]._id
                    }
                })
                const reducir = await Beverages.findOneAndUpdate({ name: bebidas }, {
                    stock: buscar[0].stock - 1
                })
                res.send(`La bebida ${bebidas}, se agrego corectamente con el numero ${anexar._id}`)
            }else{
                const crearPedido = await Pedidos.create({
                    user: usuarios[0]._id,
                    beverages: buscar[0]._id,
                    adress: usuarios[0].adress
                })
                const BuscarPedido = await Pedidos.find({_id:crearPedido._id})
                
                const pedidodeUsuario = await Usuarios.findOneAndUpdate({_id:usuarios[0]._id},{
                    $push:{
                        orders: BuscarPedido[0]._id
                    }
                })
                const reducirs = await Beverages.findOneAndUpdate({ name: bebidas }, {
                    stock: buscar[0].stock - 1
                })
                res.send("tu pedido se creo correctamente")
            }
            
        }else{
            res.status(`La bebida no se encuentra en nuestro inventario`)
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = postPedidoBebida