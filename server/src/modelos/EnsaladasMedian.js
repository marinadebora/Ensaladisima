const { Schema } = require('mongoose');
const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

const EnsaladasMedianSchema = new Schema({
    name: { type: String, default: 'Tu Ensalada' },
    price: { type: Number, default: 11 },
    base: { type: Array },
    protein: { type: Array },
    complement: { type: Array },
    suace: { type: Array },
    topping: { type: Array },
    /* base: { type: Schema.Types.ObjectId, ref: "Base" },
    protein: { type: Schema.Types.ObjectId, ref: "Proteins" },
    complement: { type: Schema.Types.ObjectId, ref: "Complements" },
    suace: { type: Schema.Types.ObjectId, ref: "Suaces" },
    topping: { type: Schema.Types.ObjectId, ref: "Toppings" }, */
})

EnsaladasMedianSchema.plugin(findOrCreate)
module.exports = mongoose.model("EnsaladasMedians", EnsaladasMedianSchema)