const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const EnsaladasMedianSchema = new Schema({
    name: { type: String, default: 'Tu Ensalada' },
    price: { type: Number, default: 11 },
    base: { type: Schema.Types.ObjectId, ref: "Bases" },
    protein: { type: Schema.Types.ObjectId, ref: "Proteins" },
    complement: { type: Schema.Types.ObjectId, ref: "Complements" },
    suace: { type: Schema.Types.ObjectId, ref: "Suaces" },
    topping: { type: Schema.Types.ObjectId, ref: "Toppings" },
})

module.exports = mongoose.model("EnsaladasMedians", EnsaladasMedianSchema)