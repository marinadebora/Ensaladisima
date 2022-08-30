const { Schema } = require('mongoose');
const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

const EnsaladasBigsSchema = new Schema({
    name: { type: String, default: 'Tu Ensalada Grande' },
    price: { type: Number, default: 15 },
    base: { type: Array },
    protein: { type: Array },
    complement: { type: Array },
    suace: { type: Array },
    topping: { type: Array },
})

EnsaladasBigsSchema.plugin(findOrCreate)
module.exports = mongoose.model("EnsaladasBigs", EnsaladasBigsSchema)