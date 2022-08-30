const {Schema} = require("mongoose");
const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate');

const PostreSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array},
    price:{type:Number},
    stock:{type:Number}
});

PostreSchema.plugin(findOrCreate);
module.exports= mongoose.model("desserts",PostreSchema);