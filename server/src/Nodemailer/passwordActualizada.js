const Usuarios = require("../modelos/Usuarios");
const { transporter } = require("./postEmail");


const passwordEditada = async (req,res )=>{
    const {password} = req.body;
    const {_id}=req.params;
    try {
         const correo= await Usuarios.find({_id})
        await transporter.sendMail({
            from: '"Password Actualizada" <ensaladisima02@gmail.com', // sender address
            to: correo[0].email, // list of receivers
            subject: "Cambio de passowrd", // Subject line
            text: "", // plain text body
            html: `"<b>De: ensaladisima02@gmail.com</b>"
            <img src=https://res.cloudinary.com/deqbqghhq/image/upload/v1663807102/headerMail_e3dfb6.png alt=foto/>
            <div>
            <h2> Has cambiado tu password!! </h2>
            <img src='https://www.woratek.com/wp-content/uploads/2013/08/Alegria-de-hombre-gif-animado.gif' width="600" height="350"/>
            <h3>Tu nueva password es: ${password}</h3>
            <h2>Ingresa Nuevamente desde el siguiente link!</h2>
            <a href=https://ensaladisima.vercel.app/login>Cliquea Aquí</a>
            <br>
            </div>
            `, // html body
        });
        return("Correo Enviado")
    } catch (error) {
        console.log(error)

    }
}
module.exports = {passwordEditada};