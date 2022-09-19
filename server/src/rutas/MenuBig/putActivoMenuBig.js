
const MenuB = require("../../modelos/MenuBig");




const putActivoMenuB = async (req, res) => {
    const { _id } = req.params;
    try {
        const menuB = await MenuB.findOne({ _id:_id })
        if (menuB.activo === true) await MenuB.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(menuB)) 
        if (menuB.activo === false) await MenuB.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(menuB))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoMenuB };