const Menu = require("../../modelos/Menu");

const postMenu= async (req,res)=>{
const {name,price,image,base,protein,complement,sauce,topping} = req.body;
try {
    const buscar = await Menu.find({name});
    if(buscar[0]) res.status(404).send("Ya contamos con ese menu");
    else{
        const crear = await Menu.create({name,price,image,base,protein,complement,sauce,topping});
        res.send("Menu creado correctamente");
    }
} catch (error) {
    console.log(error);
}
}
module.exports = {postMenu};