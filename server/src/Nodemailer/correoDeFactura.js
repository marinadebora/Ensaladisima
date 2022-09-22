const { transporter } = require("./postEmail");
const Usuarios = require('../modelos/Usuarios')


const correoDeFactura = async (req,res )=>{
    const {_id, totalPayable, email} = req.body;
    const persona = await Usuarios.find({_id})
    console.log(persona[0]?.email)
    try {
        await transporter.sendMail({
            from: '"Gracias por tu compra" <ensaladisima02@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Ensaladisima", // Subject line
            text: "", // plain text body
            html: `<div >"<b>De: ensaladisima02@gmail.com</b>"
            <img src=https://res.cloudinary.com/deqbqghhq/image/upload/v1663807102/headerMail_e3dfb6.png alt=foto/>
            <div>

                <h2> Has realizado una compra con los siguientes parametros</h2>
                <div style={{border:'black'}}>
                    <h4>N° de la orden: ${persona[0]?.orders[0]}</h5>
                    <h4>Total que pago: 💲${totalPayable}</h4>
                </div>
                <hp>Para mas detalle</p>
                <p>Ingresa desde el siguiente link!</p>
                <a href=https://ensaladisima.vercel.app/historial>Cliquea Aquí</a>
            </div></div>
            `, // html body
            
        });
        return("Correo Enviado")
    } catch (error) {
        /* res.status(404).send("Error al enviar el correo") */
        console.log(error)

    }
}
module.exports = {correoDeFactura};