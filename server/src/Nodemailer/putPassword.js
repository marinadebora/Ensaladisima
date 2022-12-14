const Usuarios = require("../modelos/Usuarios");
const { transporter } = require("./postEmail");


const correoPassword = async (req,res )=>{
    const {email} = req.body;
    try {
        
        const correo= await Usuarios.find({email:email})
        await transporter.sendMail({
            from: '"CAMBIO DE PASSWORD" <ensaladisima02@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Cambio de passowrd", // Subject line
            text: "", // plain text body
            html: `"<b>De: ensaladisima02@gmail.com</b>"
            <img src=https://res.cloudinary.com/deqbqghhq/image/upload/v1663807102/headerMail_e3dfb6.png alt=foto/>
            <div>
            <h2> Recibimos un cambio de password!! </h2>
            <img src='https://www.woratek.com/wp-content/uploads/2013/08/Alegria-de-hombre-gif-animado.gif' width="600" height="350"/>
            <h3>Para cambiar la password ingresa aqui!!:</h3>
            <a href=https://ensaladisima.vercel.app/password/${correo[0]._id}>Cliquea Aquí</a>
            <br>
            <h1> Si no fuiste tu ignora este mensaje!<h1>
            </div>
            `, // html body
        });
        return("Correo Enviado")
    } catch (error) {
        console.log(error)

    }
}
module.exports = {correoPassword};