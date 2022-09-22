const { transporter } = require("./postEmail");


const correoContacto = async (req,res )=>{
    const {email,message,name,telefono} = req.body;
    try {
        await transporter.sendMail({
            from: '"Hemos recibido tu mensaje!" <ensaladisima02@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Contacto ensaladísima", // Subject line
            text: "", // plain text body
            html: `"<b>De: ensaladisima02@gmail.com</b>"
            <img src=https://res.cloudinary.com/deqbqghhq/image/upload/v1663807102/headerMail_e3dfb6.png alt=foto/>
            <div>
            <h4>Hola ${name} recibimos tu mensaje! </h4>
            <p> En breve nos pondremos en contacto contigo</p>
            <p>Si quieres puedes seguir navegando en nuestra página</p>
            <a href=https://ensaladisima.vercel.app/>Cliquea Aquí</a>
           
            <br>
            <h5>Te recordamos el mensaje que nos enviaste: <h5><br/>
            <p>${message}</p>
            </div>
            `, // html body
        });
        let email1 = "ensaladisima02@gmail.com"
        await transporter.sendMail({
            from: `"Recibiste un mensaje de ${name}" <ensaladisima02@gmail.com`, // sender address
            to: email1, // list of receivers
            subject: "Contacto ensaladísima", // Subject line
            text: "", // plain text body
            html: `"<b>De: ensaladisima02@gmail.com</b>"
            <div>
            <h4>Hola recibimos un mensaje! </h4>
            <ul>
            <li>Nombre:${name}</li>
            <li>Correo: ${email}</li>
            <li>Telefono: ${telefono?telefono: "No"}</li>
            </ul>
            <label>Mensaje:</label><br/>
            <p>${message}</p><br/>
            <p>Ponte en contacto lo mas rapido posible</p>
            </div>
            `, // html body
        })
        res.send("Correo Enviado")
    } catch (error) {
        console.log(error)

    }
}
module.exports = {correoContacto}