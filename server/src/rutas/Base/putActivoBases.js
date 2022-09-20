
const Bases = require("../../modelos/Base");




const putActivoBase= async (req, res) => {
    const { _id } = req.params;
    try {
        const base = await Bases.findOne({ _id:_id })
        if (base.activo === true) await Bases.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(base)) 
        if (base.activo === false) await Bases.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(base))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoBase };