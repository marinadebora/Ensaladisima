const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const PedidosSchema = new Schema({
    salads: [{type: Schema.Types.ObjectId, ref: "Menu", ref: "EnsaladasMedians", ref: "EnsaladasBigs"}],
    totalPayable: { type: Number },
    delievery: { type: Boolean },
    adress: { type: String },
})

module.exports = mongoose.model("Pedidos", PedidosSchema)