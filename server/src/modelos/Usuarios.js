const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const UsuariosSchema = new Schema({
    firstName: { type: String, required: true, lowercase:true },
    lastName: { type: String, required: true, lowercase:true },
    email: { type: String, required: true, lowercase:true },
    password: { type: String, require: true},
    adress: { type: String, lowercase:true, default:''},
    phone: { type: String, default: ''},
    admin: { type: Boolean, default: false },
    activo: { type: Boolean, default: true },
    orders: [{ type: Schema.Types.ObjectId, ref: "Pedidos" }],
    purchaseHistory: [{ type: Schema.Types.ObjectId, ref:"Historial"}],
})

module.exports = mongoose.model("Usuarios", UsuariosSchema)