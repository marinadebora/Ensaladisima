const { Schema } = require('mongoose');
const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

const EnsaladasMedianSchema = new Schema({
    name: { type: String, default: 'Tu Ensalada Mediana' },
    price: { type: Number, default: 13 },
    image: {type: String, default:"https://img2.freepng.es/20190330/jzo/kisspng-greek-salad-caesar-salad-israeli-salad-clip-art-bowl-of-salad-transparent-amp-png-clipart-free-d-5c9f49ead201b5.3158063715539430188602.jpg"},
    base: { type: Array },
    protein: { type: Array },
    complement: { type: Array },
    suace: { type: Array },
    topping: { type: Array },
})

EnsaladasMedianSchema.plugin(findOrCreate)
module.exports = mongoose.model("EnsaladasMedians", EnsaladasMedianSchema)