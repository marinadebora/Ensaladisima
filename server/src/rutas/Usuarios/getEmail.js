const Usuario= require("../../modelos/Usuarios");

const getEmail = async(req,res,next)=>{
const {email}= req.body;
try {
    const buscar = await Usuario.find({email});
    if(!buscar[0]) res.status(404).send("Usuario no encontrado");
    else{
        res.send("Se ha enviado un mensaje a tu correo");
        next()
    }
} catch (error) {
    console.error(error)
}
}
module.exports= {getEmail}