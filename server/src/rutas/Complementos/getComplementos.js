const  Complements = require("../../modelos/Complementos")

const getComplements= async (req,res)=>{
    try {
        const buscar = await Complements.find();
        res.send(buscar)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={getComplements}