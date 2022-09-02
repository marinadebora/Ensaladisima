/* const Base = require("../../modelos/Base")
const api = require('../../../users.json')
var findOrCreate = require('mongoose-findorcreate')

const base = async (req,res)=>{
    const json = await api.Base;
    try {
        const crear = await json.map(e => Base.findOrCreate({name:e.Nombre,image:e.img}))
        res.send("Se cargo correctamente")
    } catch (error) {
        console.error(error)
    }
}
module.exports={base} */