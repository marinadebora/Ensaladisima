const {Router} = require('express')
const Usuarios = require('../../modelos/Usuarios')

const autenticar = Router()

autenticar.post("/",(req,res)=>{
    const {email, password} = req.body;
    Usuarios.findOne({email},(error,Usuarios)=>{
        if (error){
            res.status(500).send("ERROR AL AUTENTICAR USUARIO");
        }else if(!Usuarios){
            res.status(500).send("EL USUARIO NO EXISTE")
        }else{
            user.isCorrectPassword(password,(error,resultado)=>{
                if(error){
                    res.status(500).send("ERROR AL AUTENTICAR");
                }else if(resultado){
                    res.status(200).send("USUARIO AUTENTICADO CORRECTAMENTE");
                }else{
                    res.status(500).send("usuario y/o contraseña incorrecta")
                }
            })

        }
    })
})

module.exports = autenticar