const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const EnsaladasBigSchema = new Schema({
    name: { type: String, default: 'Tu Ensalada' },
    price: { type: Number, default: 14 },
    base: { type: Schema.Types.ObjectId, ref: "Base" },
    protein: { type: Schema.Types.ObjectId, ref: "Proteins" },
    complement: { type: Schema.Types.ObjectId, ref: "Complements" },
    suace: { type: Schema.Types.ObjectId, ref: "Suaces" },
    topping: { type: Schema.Types.ObjectId, ref: "Toppings" },
})

module.exports = mongoose.model("EnsaladasBigs", EnsaladasBigSchema)