const Base = require("../../modelos/Base");
const Usuario = require("../../modelos/Usuarios");
const Bebidas = require("../../modelos/Bebidas");
const Complementos = require("../../modelos/Complementos");
const Menu = require("../../modelos/MenuBig");
const MenuBig = require("../../modelos/MenuBig");
const Postres = require("../../modelos/Postres");
const Proteina = require("../../modelos/Proteina");
const Review = require("../../modelos/Review");
const Salsas = require("../../modelos/Salsas");
const Topping = require("../../modelos/Topping");




const putActivo = async (req, res) => {
    const { _id } = req.params;
    try {
        const base = await Base.findOne({ _id:_id })
        if (base.activo === true) await Base.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(base)) 
        if (base.activo === false) await Base.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(base))  
        const bebida =  await Bebidas.findOne({ _id:_id })
        if (bebida.activo === true) await Bebidas.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(bebida)) 
        if (bebida.activo === false) await Bebidas.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(bebida))  
        const complemento = await Complementos.findOne({ _id:_id })
        const menu = await Menu.findOne({ _id:_id })
        const menuB = await MenuBig.findOne({ _id:_id })
        const postre = await Postres.findOne({ _id:_id })
        const prote = await Proteina.findOne({ _id:_id })
        const review = await Review.findOne({ _id:_id })
        const salsa =await Salsas.findOne({ _id:_id })
        const topping =await Topping.findOne({ _id:_id })
        const user = await Usuario.findOne({ _id:_id })

    
    } catch (error) {
        console.error(error);
    };

};

module.exports = { putActivo };