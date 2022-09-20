
const Menu = require("../../modelos/Menu");




const putActivoMenu = async (req, res) => {
    const { _id } = req.params;
    try {
        const menu = await Menu.findOne({ _id:_id })
        if (menu.activo === true) await Menu.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(menu)) 
        if (menu.activo === false) await Menu.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(menu))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoMenu };