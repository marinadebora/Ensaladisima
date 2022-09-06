const  MenuBig = require("../../modelos/MenuBig")

const getMenuBig= async (req,res)=>{
    try {
        const buscar = await MenuBig.find();
        res.send(buscar)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={getMenuBig}