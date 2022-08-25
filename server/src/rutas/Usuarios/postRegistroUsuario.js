const {Router} = require('express')
const Usuarios = require('../../modelos/Usuarios')

const registro = Router()

registro.post('/', async (req,res,next)=>{
    const {firstName, lastName, email, password, adress, phone} = req.body;
    try {
        const user = new Usuarios({firstName, lastName, email, password, adress, phone})
        
        user.save(error=>{
            if (error){
                res.status(500).send("ERROR AL REGISTRAR AL USUARIO");
            }else{
                res.status(200).send("USUARIO REGISTRADO")
                next();
            }
        })
    } catch (error) {
        console.log(error)
    }
})



module.exports = registro