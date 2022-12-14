const {Router} = require('express');
const Pedidos = require('../../modelos/Pedidos');
const Usuarios = require('../../modelos/Usuarios')

const registro = Router()

registro.post('/', async (req,res,next)=>{
    const {firstName, lastName, email, password,adress, phone} = req.body;
    
    try {
        const errorUsuario =await Usuarios.findOne({email}) 
        
        if(errorUsuario) res.status(404).send("el usuario ya existe")
        else{const user = new Usuarios({firstName, lastName, email, password, adress, phone})
        
        user.save(error=>{
            if (error){

                res.status(500).send("ERROR AL REGISTRAR AL USUARIO");
            }else{
                res.send("Bienvenido a Ensaladisima!")
                next();
            }
        })}
        
    } catch (error) {
        console.log(error)
    }
})



module.exports = registro