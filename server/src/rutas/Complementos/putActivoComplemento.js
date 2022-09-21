
const Complemento = require("../../modelos/Complementos");




const putActivoComplemento = async (req, res) => {
    const { _id } = req.params;
    try {
        const comp = await Complemento.findOne({ _id:_id })
        if (comp.activo === true) await Complemento.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(comp)) 
        if (comp.activo === false) await Complemento.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(comp))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoComplemento };