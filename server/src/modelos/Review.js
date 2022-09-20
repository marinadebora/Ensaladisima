const {Schema} = require("mongoose");
const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')

const ReviewSchema = new Schema({
    firstName:{type:String, lowercase:true},
    lastName:{type:String,  lowercase:true},
    comentarios:{type:String,  require: true, lowercase:true},
    email:{type:String, lowercase:true},
    estrellas: {type:Number, require: true},
    activo: { type: Boolean, default: true }
})
ReviewSchema.plugin(findOrCreate)
module.exports= mongoose.model("Review",ReviewSchema)