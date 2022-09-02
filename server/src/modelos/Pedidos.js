const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const PedidosSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: "Usuarios"}],
    saladsMenu:[{type: Schema.Types.ObjectId, ref:"Menu"}],
    saladsMenuBig:[{type: Schema.Types.ObjectId, ref:"MenuBig"}],
    saladsMed:[{type: Schema.Types.ObjectId, ref:"EnsaladasMedians"}],
    saladsBig: [{type: Schema.Types.ObjectId, ref:"EnsaladasBigs"}],
    beverages: [{type: Schema.Types.ObjectId, ref:"beverages"}],
    desserts:[{type: Schema.Types.ObjectId, ref:"desserts"}],
    totalPayable: { type: Number, default: 0},
    delievery: { type: Boolean, default :true},
    adress: { type: String },
})

module.exports = mongoose.model("Pedidos", PedidosSchema)