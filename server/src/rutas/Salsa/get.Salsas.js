const { Router } = require('express');
const Suaces = require('../../modelos/Salsas')

const getSalsas = Router()

getSalsas.get('/', async (req,res,next) =>{
    const salsas = await Suaces.find()
    res.send(salsas)
})

module.exports = getSalsas