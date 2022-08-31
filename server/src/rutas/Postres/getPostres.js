const Postres  = require("../../modelos/Postres");

const getPostres= async (req,res)=>{
    try {
        const buscar = await Postres.find();
        res.send(buscar);
        
    } catch (error) {
        console.log(error);
    }
}
module.exports={getPostres};