const Menu = require('../../modelos/Menu')
const api = require('../../../../client/users.json')
var findOrCreate = require('mongoose-findorcreate')
const mongoose = require('mongoose')

const menu = async (req, res) => {
    const ensalada = api.Ensaladas
    try {
        mongoose.Promise = Promise
        const crear = await ensalada.map(e => Menu.findOrCreate({
            name: e.Nombre,
            median: e.EnsaladaMediana,
            big: e.EnsaladaGrande,
            image: e.img,
            base: e.Base,
            protein: e.Proteina,
            complement: e.Complementos,
            sauce: e.Salsas,
            topping: e.Topping,
        }))
        res.send('Se verifico la base de datos y se crearon los menu que no existian')
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { menu }