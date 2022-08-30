const Beverages = require("../../modelos/Bebidas")
const api = require('../../../../client/users.json')
var findOrCreate = require('mongoose-findorcreate')

const bebidas = async (req,res)=>{
    const json = await api.bebidas;
    try {
        const crear = await json.map(e => Beverages.findOrCreate({name:e.Nombre,image:e.img}))
         res.send("Se cargo correctamente")
    } catch (error) {
        console.error(error)
    }
}
module.exports={bebidas};