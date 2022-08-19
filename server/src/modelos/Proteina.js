const {Schema} = require("mongoose");
const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')

const ProteinaSchema = new Schema({
    name:{type:String , required:true,lowercase:true},
    image:{type:Array}
})
ProteinaSchema.plugin(findOrCreate)
module.exports= mongoose.model("Proteins",ProteinaSchema)