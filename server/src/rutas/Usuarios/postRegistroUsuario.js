const {Router} = require('express')
const Usuarios = require('../../modelos/Usuarios')

const registro = Router()

registro.post('/', async (req,res,next)=>{
    const {firstName, lastName, email, password, adress, phone} = req.body;
    try {
        const user = await Usuarios.findOne({email})
        if(!user){
            const crearUser = await Usuarios.create({
                firstName, lastName, email, password, adress, phone
            })
            console.log(crearUser)
            res.send(`Te has registrado correctamente con el correo ${email}`)
        }else{
            res.status(404).end(`el email ${email}, ya existe en nuestra base de datos`)
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = registro