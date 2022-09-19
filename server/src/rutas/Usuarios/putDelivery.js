const Usuario = require("../../modelos/Usuarios");
const Pedido = require("../../modelos/Pedidos")
const {Router} = require('express')

const putPedidosDelivery = Router()

putPedidosDelivery.put("/", async (req,res)=>{
    const {adress,delivery,_id,comentario} = req.body
    try{
    const pedidoAModificar1 = await Pedido.findById({_id:_id})
        const pedidoAModificar2 =await Pedido.findByIdAndUpdate({_id:_id},
                                        {adress:adress?adress:pedidoAModificar1.adress,
                                        comentarios:comentario?comentario:pedidoAModificar1.comentarios,delievery:delivery})

  console.log(pedidoAModificar1)
    const idAModificar = pedidoAModificar1.user[0];
    const usuarioAModificar= await Usuario.findOneAndUpdate({_id:idAModificar},
         {$push:{adress:adress}})  
         
        res.status(200).json({usuarioAModificar,pedidoAModificar2})
    }catch(error){
        console.error(error)
    }

})

module.exports=putPedidosDelivery