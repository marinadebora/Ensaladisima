const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const HistorialSchema = new Schema({
    orders: [{ type: Schema.Types.ObjectId, ref: "Pedidos" }],
    pending: { type: Boolean, default: true },
    processing: { type: Boolean, default: false },
    received : { type: Boolean, default: false },
    canceled: { type: Boolean, default: false },
})

module.exports = mongoose.model("Historials", HistorialSchema)