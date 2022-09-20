
const Postres = require("../../modelos/Postres");




const putActivoPostres = async (req, res) => {
    const { _id } = req.params;
    try {
        const postre = await Postres.findOne({ _id:_id })
        if (postre.activo === true) await Postres.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(postre)) 
        if (postre.activo === false) await Postres.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(postre))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoPostres };