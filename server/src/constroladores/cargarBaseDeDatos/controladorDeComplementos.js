/* const  Complements = require('../../modelos/Complementos');
const api = require('../../../server/users.json')
var findOrCreate = require('mongoose-findorcreate');

const complements = async (req, res) =>{
    const inf = await api.Complementos
    try {
        const crear = inf.map(e => Complements.findOrCreate({
            name: e.Nombre,
            image: e.img
        }))
        res.send('Se cargo correctamente')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { complements } */