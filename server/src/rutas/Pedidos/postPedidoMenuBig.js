const {Router} = require("express")
const MenuBig = require('../../modelos/MenuBig')
const Pedidos = require("../../modelos/Pedidos");
const Usuarios = require("../../modelos/Usuarios");

const postPedidoMenuBig = Router();

postPedidoMenuBig.post("/", async (req,res,next)=>{
    
    const {menu, usuario} = req.body;
    try {
        const usuarios = await Usuarios.find({email:usuario})
        const buscar = await MenuBig.find({name:menu})
        
        if(usuarios[0].orders){
            const pedido = await Pedidos.find({_id:usuarios[0].orders})
            if(pedido[0]){
                const anexar = await Pedidos.findOneAndUpdate({ _id: pedido[0]._id }, {
                    $push: {
                        saladsMenuBig: buscar[0]._id
                    }
                })
                res.send(`La Ensalada ${menu}, se agrego corectamente con el numero ${anexar._id}`)
            }else{
                const crearPedido = await Pedidos.create({
                    user: usuarios[0]._id,
                    saladsMenuBig: buscar[0]._id,
                    adress: usuarios[0].adress
                })
                const BuscarPedido = await Pedidos.find({_id:crearPedido._id})
                
                const pedidodeUsuario = await Usuarios.findOneAndUpdate({_id:usuarios[0]._id},{
                    $push:{
                        orders: BuscarPedido[0]._id
                    }
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



module.exports = postPedidoMenuBig