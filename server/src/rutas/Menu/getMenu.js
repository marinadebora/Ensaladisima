const  Menu = require("../../modelos/Menu")

const getMenu= async (req,res)=>{
    try {
        const buscar = await Menu.find();
        res.send(buscar)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={getMenu}