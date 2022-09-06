const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const saltRounds = 10;

const UsuariosSchema = new Schema({
    firstName: { type: String, default:"", lowercase:true },
    lastName: { type: String, default:"", lowercase:true },
    email: { type: String, required: true, lowercase:true },
    password: { type: String, require: true},
    adress: { type: String, default:"", lowercase:true, default:''},
    phone: { type: String, default: ''},
    admin: { type: Boolean, default: false },
    activo: { type: Boolean, default: true },
    orders: [{ type: Schema.Types.ObjectId, ref: "Pedidos" }],
    purchaseHistory: [{ type: Schema.Types.ObjectId, ref:"Historial"}],
})
UsuariosSchema.pre("save", function(next){
    if(this.isNew|| this.isModified("password")){
        const document = this;

        bcrypt.hash(document.password, saltRounds,(error, hashPassword)=>{
            if (error){
                next(error)
            }else{
                document.password=hashPassword;
                next();
            }

        });
    }else{
        next()
    }
});

UsuariosSchema.methods.isCorrectPassword = function(password,callback){
    bcrypt.compare(password, this.password, function(error,same){
        if(error){
            callback(error);
        }else{
            callback(error,same)
        }
    });
}


module.exports = mongoose.model("Usuarios", UsuariosSchema)

