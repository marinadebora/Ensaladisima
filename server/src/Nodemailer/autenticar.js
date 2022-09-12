const { transporter } = require("./postEmail");


const correo = async (req,res )=>{
    const {firstName, lastName, email, password, adress, phone} = req.body;
    try {
        await transporter.sendMail({
            from: '"Usuario Creado" <ensaladisima02@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Ensaladisima", // Subject line
            text: "", // plain text body
            html: `"<b>De: ensaladisima02@gmail.com</b>"
            <div>
            <h2>🎉 Tu solicitud de registro fue exitosa!! 🎉</h2>
            <img src='https://www.woratek.com/wp-content/uploads/2013/08/Alegria-de-hombre-gif-animado.gif' width="600" height="350"/>
            <h3>Te registraste con las credenciales:</h3>
            <h4>Nombre: ${firstName}</p> <p>Apellido: ${lastName}</h4> 
            <h4>Contraseña: ${password}</p> <p>Direccion: ${adress}</h4>
            <h4>Telefono: ${phone}</h4>
            <h2>Ingresa desde el siguiente link!</h2>
            <a href=https://ensaladisima.vercel.app/>Cliquea Aquí</a>
            </div>
            `, // html body
        });
        return("Correo Enviado")
    } catch (error) {
        /* res.status(404).send("Error al enviar el correo") */
        console.log(error)

    }
}
module.exports = {correo};