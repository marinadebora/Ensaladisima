const {Schema} = require("mongoose");
const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')

const ToppingSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array}
})
ToppingSchema.plugin(findOrCreate)
module.exports= mongoose.model("Toppings",ToppingSchema)