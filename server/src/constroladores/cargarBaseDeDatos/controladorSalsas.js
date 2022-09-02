/* const Suaces = require("../../modelos/Salsas")
const api = require('../../../server/users.json')
var findOrCreate = require('mongoose-findorcreate')

const salsas = async (req,res)=>{
    const json = await api.Salsas;
    try {
        const crear = await json.map(e => Suaces.findOrCreate({name:e.Nombre,image:e.img}))
         res.send("Se cargo correctamente")
    } catch (error) {
        console.error(error)
    }
}
module.exports={salsas} */