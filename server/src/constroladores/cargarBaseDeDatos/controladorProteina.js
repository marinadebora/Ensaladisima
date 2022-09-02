/* const Proteins = require("../../modelos/Proteina")
const api = require('../../../server/users.json')
var findOrCreate = require('mongoose-findorcreate')

const proteina = async (req,res)=>{
    const json = await api.Proteina;
    try {
        const crear = await json.map(e => Proteins.findOrCreate({name:e.Nombre,image:e.img}))
         res.send("Se cargo correctamente")
    } catch (error) {
        console.error(error)
    }
}
module.exports={proteina} */