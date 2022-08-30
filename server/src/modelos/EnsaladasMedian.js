const { Schema } = require('mongoose');
const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

const EnsaladasMedianSchema = new Schema({
    name: { type: String, default: 'Tu Ensalada Mediana' },
    price: { type: Number, default: 13 },
    base: { type: Array },
    protein: { type: Array },
    complement: { type: Array },
    suace: { type: Array },
    topping: { type: Array },
})

EnsaladasMedianSchema.plugin(findOrCreate)
module.exports = mongoose.model("EnsaladasMedians", EnsaladasMedianSchema)