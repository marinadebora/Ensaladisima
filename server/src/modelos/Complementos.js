const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const ComplementosSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array}
})
module.exports= mongoose.model("Complementos",ComplementosSchema)