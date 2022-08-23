const  Proteins = require("../../modelos/Proteina")

const getProteins= async (req,res)=>{
    try {
        const buscar = await Proteins.find();
        res.send(buscar)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={getProteins}