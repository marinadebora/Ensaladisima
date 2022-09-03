const Usuarios = require("../../modelos/Usuarios");
const jwt = require("jsonwebtoken")

const auth = async (req, res) => {
    const { email, password } = req.body;
    console.log("HOLA SOY UN CONSOLE.LOG"+ email)
    const user = await Usuarios.findOne({ email })
    let firstName = ''
    let lastName = ''
    let adress=''
    let id = ''
    let admin = false
    let orders=[]
    if (user) {
        firstName = user.firstName
        id = user._id
        admin = user.admin
        lastName = user.lastName
        adress = user.adress
        orders = user.orders
    }

    const authUser = await Usuarios.findOne({ email })
    if (authUser.activo !== true) {
        res.send('Disculpa pero te encuentras bloqueado')
    } else {
    Usuarios.findOne({ email }, (err, Usuarios) => {
        if (err) {
            res.status(404).send("Error al autenticar el correo")
        } else if (!Usuarios) {
            res.status(404).send("Hay campos erroneos")
        } else {
            Usuarios.isCorrectPassword(password, (err, result) => {
                if (err) {
                    res.status(500).send("Error al autenticar")
                } else if (result) {
                    /* console.log(req.headers) */
                    let token = jwt.sign({ Usuarios }, "torombolo", {
                        expiresIn: "10h"
                    })
                    /* res.cookie("token", token, { expiresIn: "10h" }); */
                    res.send({ email, token, firstName, lastName, id, admin,adress, orders })
                    /* console.log(req.headers) */
                } else {
                    res.status(500).send("Correo y/o contraseña incorrecta")
                }
            })
        }

    });
    }
    /* console.log(nombre) */
    

};



module.exports = auth
