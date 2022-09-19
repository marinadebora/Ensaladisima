const {Schema} = require("mongoose");
const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')

const BaseSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array},
    activo: { type: Boolean, default: true }
})
BaseSchema.plugin(findOrCreate)
module.exports= mongoose.model("Base",BaseSchema)