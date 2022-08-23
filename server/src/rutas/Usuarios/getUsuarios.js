const { Router } = require('express');
const Usuarios = require('../../modelos/Usuarios')

const getUsuarios = Router()

getUsuarios.get('/', async (req,res,next) =>{
    const usuarios = await Usuarios.find()
    res.send(usuarios)
})

module.exports = getUsuarios