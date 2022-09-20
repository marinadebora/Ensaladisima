const Menu = require("../../modelos/Menu");
const MenuBig= require("../../modelos/MenuBig");

const postMenu= async (req,res)=>{
const {name,median,big,image,base,protein,complement,sauce,topping} = req.body;
try {
    const buscar = await Menu.find({name});
    if(buscar[0]) res.status(404).send("Ya contamos con ese menu");
    else{
        const crear = await Menu.create({name,median,big,image,base,protein,complement,sauce,topping});
        const crearBig = await MenuBig.create({name,median,big,image,base,protein,complement,sauce,topping});
        res.send("Menu creado correctamente");
    }
} catch (error) {
    console.log(error);
}
}
module.exports = {postMenu};