const Usuarios = require('../../../modelos/Usuarios')
const Pedidos = require('../../../modelos/Pedidos')

const crearPedidoMidelwere = async (req,res,next)=>{
    const { email, password, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts ,google} = req.body;
    try {
        const buscar = await Usuarios.find({email})
        console.log(!buscar[0]?.orders[0])
        if(!buscar[0]?.orders[0]){
            const crear = await Pedidos.create({user:buscar[0]?._id})
            const actualizar = await Usuarios.findOneAndUpdate({email},{
            orders:crear?._id
            })
            next()
        }else{
            next()
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports= {crearPedidoMidelwere}