const Dessert = require("../../modelos/Postres")
const api = require('../../../../server/users.json')
var findOrCreate = require('mongoose-findorcreate')

const postres = async (req,res)=>{
    const json = api.postres;
    try {
        const crear = json.map( async (e) => await Dessert.findOrCreate({name:e.Nombre,image:e.img,price:e.price,stock:e.stock}))
        res.send("Se cargo correctamente")
    } catch (error) {
        console.error(error)
    }
}
module.exports={postres};