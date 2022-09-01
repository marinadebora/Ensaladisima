const  Base  = require("../../modelos/Base")

const getBase= async (req,res)=>{
    try {
        const buscar = await Base.find();
        res.send(buscar)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={getBase}