
const Topping = require("../../modelos/Topping");




const putActivoTopping = async (req, res) => {
    const { _id } = req.params;
    try {
        const topping = await Topping.findOne({ _id:_id })
        if (topping.activo === true) await Topping.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(topping)) 
        if (topping.activo === false) await Topping.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(topping))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoTopping };