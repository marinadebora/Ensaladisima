const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const SalsasSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array}
})
module.exports= mongoose.model("Salsas",SalsasSchema)