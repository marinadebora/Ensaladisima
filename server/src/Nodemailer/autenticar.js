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
            <p>🎉 Tu solicitud de registro fue exitosa!! 🎉</p>
            <p>Te registraste con las credenciales:</p>
            <br/>
            <p>Nombre: ${firstName}</p> <p>Apellido: ${lastName}</p> 
            <p>Contraseña: ${password}</p> <p>Direccion: ${adress}</p>
            <p>Telefono: ${phone}</p>
            `, // html body
        });
        return("Correo Enviado")
    } catch (error) {
        /* res.status(404).send("Error al enviar el correo") */
        console.log(error)

    }
}
module.exports = {correo};