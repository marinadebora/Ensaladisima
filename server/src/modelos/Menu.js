const { Schema } = require('mongoose')
const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

const MenuSchema = new Schema({
    name: { type: String, required:true, lowercase:true },
    price: { type: Number, default: 13 },
    image: { type: Array },
    base : { type: Array },
    protein: { type: Array },
    complement: { type: Array },
    sauce: { type: Array },
    topping: { type: Array },
    activo: { type: Boolean, default: true }
    // La ensalada Grande Contiene 1/2 porcion mas de cada ingrediente
})

MenuSchema.plugin(findOrCreate)
module.exports = mongoose.model("Menu", MenuSchema)