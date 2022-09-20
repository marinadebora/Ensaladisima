//  const MenuBig = require('../../modelos/MenuBig')
// const api = require('../../../users.json')
// var findOrCreate = require('mongoose-findorcreate')

// const menuBig = async (req, res) => {
//     const ensalada = api.Ensaladas
//     try {
//         const crear = await ensalada.map(e => MenuBig.findOrCreate({
//             name: e.Nombre,
//             image: e.img,
//             base: e.Base,
//             protein: e.Proteina,
//             complement: e.Complementos,
//             sauce: e.Salsas,
//             topping: e.Topping,
//         }))
//         res.send('Se verifico la base de datos y se crearon los menu que no existian')
//     } catch (error) {
//         res.status(404).send(error)
//     }
// }

// module.exports = { menuBig } 