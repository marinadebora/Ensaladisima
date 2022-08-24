const { Router } = require('express');
const Usuarios = require('../../modelos/Usuarios')

const getUsuarios = Router()

getUsuarios.get('/', async (req,res,next) =>{

    try{    const {nombre} = req.query
    if(nombre) {
        const usuarios = await Usuarios.find()
        const usuariosBuscados = usuarios.filter(e=>e.firstName.includes(nombre.toLocaleLowerCase()))
        res.send(usuariosBuscados.length?usuariosBuscados:"Ese nombre no coincide D:")
    }else{
    res.send( await Usuarios.find())
}}
    catch(error){
        console.error({message:error.message})
    }
})

module.exports = getUsuarios