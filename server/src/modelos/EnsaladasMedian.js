const { Schema } = require('mongoose');
const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

const EnsaladasMedianSchema = new Schema({
    name: { type: String, default: 'Tu Ensalada Mediana' },
    price: { type: Number, default: 13 },
    image: {type: String, default:"https://res.cloudinary.com/deqbqghhq/image/upload/v1663241770/ensaladas/ensaladaCreada_ags3pn.png"},
    base: { type: Array },//https://res.cloudinary.com/deqbqghhq/image/upload/v1663241770/ensaladas/ensaladaCreada_ags3pn.png
    protein: { type: Array },
    complement: { type: Array },
    suace: { type: Array },
    topping: { type: Array },
})

EnsaladasMedianSchema.plugin(findOrCreate)
module.exports = mongoose.model("EnsaladasMedians", EnsaladasMedianSchema)