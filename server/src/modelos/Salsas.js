const {Schema} = require("mongoose");
const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')

const SalsasSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array},
    activo: { type: Boolean, default: true }
})

SalsasSchema.plugin(findOrCreate)
module.exports= mongoose.model("Suaces",SalsasSchema)