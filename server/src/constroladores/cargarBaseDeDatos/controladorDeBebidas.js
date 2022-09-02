const Beverages = require("../../modelos/Bebidas")
const api = require('../../../../server/users.json')
var findOrCreate = require('mongoose-findorcreate')

const bebidas = async (req,res)=>{
    const json = api.bebidas;
    try {
        const crear =  json.map( async (e) => await Beverages.findOrCreate({name:e.Nombre,image:e.img,price:e.price,stock:e.stock}))
        res.send("Se cargo correctamente")
    } catch (error) {
        console.error(error)
    }
}
module.exports={bebidas};