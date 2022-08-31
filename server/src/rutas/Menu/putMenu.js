const Menu = require("../../modelos/Menu");

const putMenu= async (req,res)=>{
const {name,median,big,image,base,protein,complement,sauce,topping} = req.body;
const {_id} = req.params;
try {
    const buscar = await Menu.findById({_id});
    if(!buscar) res.status(404).send("No se encontro el ID");
    else{
        const editar = await Menu.updateOne({_id},{name,median,big,image,base,protein,complement,sauce,topping});
        res.send("Menu editado correctamente");
    }
} catch (error) {
    console.log(error);
}
}
module.exports = {putMenu};