const {Schema} = require("mongoose");
const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate');

const BebidaSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array}
});

BebidaSchema.plugin(findOrCreate);
module.exports= mongoose.model("beverages",BebidaSchema);