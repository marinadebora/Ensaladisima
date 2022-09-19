const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const HistorialSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: "Usuarios" }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Pedidos" }],
    pending: { type: Boolean, default: true },
    processing: { type: Boolean, default: false },
    received : { type: Boolean, default: false },
    canceled: { type: Boolean, default: false },
    facheyhora:{type:Date, default: Date()},
    totalPayable:{type:Number, default: 0}
})

module.exports = mongoose.model("Historials", HistorialSchema)