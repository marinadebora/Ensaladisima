const {Router} = require('express');
const Usuarios = require('../../modelos/Usuarios');

const getIdUsuario = Router();

getIdUsuario.get('/:id', async (req,res,next) =>{
    const {id} = req.params;
    console.log(id)
    try {
        
        if(id.length > 24 || id.length < 24){
            res.status(404).send('El Id es incorrecto')
        }else{
            const user = await Usuarios.find({_id:id})
            !user.length ?
            res.status(404).send(`El numero ${id}, no existe en nuestra nase de datos`):
            res.send(user)
        }
    } catch (error) {
        console.error({message:error.message})
    }
})

module.exports = getIdUsuario