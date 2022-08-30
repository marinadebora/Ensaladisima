const { Schema } = require('mongoose');
const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

const EnsaladasBigsSchema = new Schema({
    name: { type: String, default: 'Tu Ensalada Grande' },
    price: { type: Number, default: 15 },
    image: {type: String, default:"https://img2.freepng.es/20190330/jzo/kisspng-greek-salad-caesar-salad-israeli-salad-clip-art-bowl-of-salad-transparent-amp-png-clipart-free-d-5c9f49ead201b5.3158063715539430188602.jpg"},
    base: { type: Array },
    protein: { type: Array },
    complement: { type: Array },
    suace: { type: Array },
    topping: { type: Array },
})

EnsaladasBigsSchema.plugin(findOrCreate)
module.exports = mongoose.model("EnsaladasBigs", EnsaladasBigsSchema)