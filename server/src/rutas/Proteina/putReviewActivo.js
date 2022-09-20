
const Proteina = require("../../modelos/Proteina");




const putActivoProtein = async (req, res) => {
    const { _id } = req.params;
    try {
        const proteina = await Proteina.findOne({ _id:_id })
        if (proteina.activo === true) await Proteina.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(proteina)) 
        if (proteina.activo === false) await Proteina.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(proteina))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoProtein };