const { Router } = require('express');
const Toppings = require('../../modelos/Topping')

const getToppings = Router()

getToppings.get('/', async (req,res,next) =>{
    const toppings = await Toppings.find()
    res.send(toppings)
})

module.exports = getToppings