const {Schema} = require("mongoose");
const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate');

const PostreSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array}
});

PostreSchema.plugin(findOrCreate);
module.exports= mongoose.model("dessert",PostreSchema);