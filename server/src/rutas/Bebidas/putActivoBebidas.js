
const Bebidas = require("../../modelos/Bebidas");




const putActivoBebidas = async (req, res) => {
    const { _id } = req.params;
    try {
        const bebida = await Bebidas.findOne({ _id:_id })
        if (bebida.activo === true) await Bebidas.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(bebida)) 
        if (bebida.activo === false) await Bebidas.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(bebida))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoBebidas };