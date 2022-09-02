const {Router} = require("express")
const Menu = require('../../modelos/Menu')
const Pedidos = require("../../modelos/Pedidos");
const Usuarios = require("../../modelos/Usuarios");

const postPedidoMenu = Router();

postPedidoMenu.post("/", async (req,res,next)=>{
    
    const {menu, usuario} = req.body;
    try {
        const usuarios = await Usuarios.find({email:usuario})
        const buscar = await Menu.find({name:menu})
        console.log(buscar[0])
        if(usuarios[0].orders[0]){
            const pedido = await Pedidos.find({_id:usuarios[0].orders})
            if(pedido[0]){
                const anexar = await Pedidos.findOneAndUpdate({ _id: pedido[0]._id }, {
                    $push: {
                        saladsMenu: buscar[0]._id
                    }
                })
                res.send(`La Ensalada ${menu}, se agrego corectamente con el numero ${anexar._id}`)
            }else{
                const crearPedido = await Pedidos.create({
                    user: usuarios[0]._id,
                    saladsMenu: buscar[0]._id,
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



module.exports = postPedidoMenu



/* menus.map( e => {
            return {
                _id: e._id,
                name: e.name,
                price: price,
                image: e.image,
                base: e.base,
                protein: e.protein,
                complement: e.complement,
                sauce: e.sauce,
                topping: e.topping
            }
        }) */