const Menu = require("../../modelos/MenuBig");

const putMenuBig= async (req,res)=>{
const {name,price,image,base,protein,complement,sauce,topping} = req.body;
const {_id} = req.params;
try {
    const buscar = await Menu.findById({_id});
    if(!buscar) res.status(404).send("No se encontro el ID");
    else{
        const editar = await Menu.updateOne({_id},{name:name?name:buscar.name,price:price?price:buscar.price,image:image?image:buscar.image,base:base?base:buscar.base,protein:protein?protein:buscar.protein,complement:complement?complement:buscar.complement,sauce:sauce?sauce:buscar.sauce,topping:topping?topping:buscar.topping});
        res.send("Menu editado correctamente");
    }
} catch (error) {
    console.log(error);
}
}
module.exports = {putMenuBig};