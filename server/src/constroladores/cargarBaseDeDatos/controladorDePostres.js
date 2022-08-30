const Dessert = require("../../modelos/Postres")
const api = require('../../../../client/users.json')
var findOrCreate = require('mongoose-findorcreate')

const postres = async (req,res)=>{
    const json = await api.postres;
    try {
        const crear = await json.map(e => Dessert.findOrCreate({name:e.Nombre,image:e.img}))
         res.send("Se cargo correctamente")
    } catch (error) {
        console.error(error)
    }
}
module.exports={postres};