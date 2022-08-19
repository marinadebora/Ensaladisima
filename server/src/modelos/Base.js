const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const BaseSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array}
})
module.exports= mongoose.model("Bases",BaseSchema)