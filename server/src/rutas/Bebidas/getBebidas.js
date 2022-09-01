const Bebidas  = require("../../modelos/Bebidas");

const getBebidas= async (req,res)=>{
    try {
        const buscar = await Bebidas.find();
        res.send(buscar);
        
    } catch (error) {
        console.log(error);
    }
}
module.exports={getBebidas};