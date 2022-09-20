
const Salsas = require("../../modelos/Salsas");




const putActivoSalsas = async (req, res) => {
    const { _id } = req.params;
    try {
        const salsa = await Salsas.findOne({ _id:_id })
        if (salsa.activo === true) await Salsas.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(salsa)) 
        if (salsa.activo === false) await Salsas.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(salsa))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoSalsas };