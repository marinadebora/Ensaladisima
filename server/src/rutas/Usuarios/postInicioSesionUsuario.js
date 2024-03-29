const Usuarios = require("../../modelos/Usuarios");
const jwt = require("jsonwebtoken");
const Pedidos = require("../../modelos/Pedidos");

const auth = async (req, res, next) => {
    const { email, password, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts ,google} = req.body;
    /* console.log({email, password, saladsMenu, saladsMenuBig, saladsMed, saladsBig, beverages, desserts}) */
    /* console.log("HOLA SOY UN CONSOLE.LOG"+ email) */
    const user = await Usuarios.findOne({ email })
    let firstName = ''
    let lastName = ''
    let adress=''
    let id = ''
    let admin = false
    let orders=[]
    /* console.log(google) */
    if (google === true){
        
        const userGoogle = await Usuarios.findOne({email})
        /* console.log(userGoogle) */
        if (userGoogle) {
        
        firstName = userGoogle.firstName
        id = userGoogle._id
        admin = userGoogle.admin
        lastName = userGoogle.lastName
        adress = userGoogle.adress
        orders = userGoogle.orders

        let token = jwt.sign({ userGoogle }, "torombolo", {expiresIn: "10h"})
        
        res.send({ email, token, firstName, lastName, id, admin,adress, orders })
        next()
        }
        else {

            firstName = req.body.firstName?req.body.firstName:firstName
            lastName = req.body.lastName?req.body.lastName:lastName
            
            const creado = await Usuarios.create({
                email,password,firstName,lastName
            })
            console.log(creado)
            const pedidoagregado = await Pedidos.create({user: creado._id})
            orders = [pedidoagregado._id]
            const Persona = await Usuarios.findOneAndUpdate({_id:creado._id},{orders: pedidoagregado._id})
            console.log(Persona)
            let token = jwt.sign({ userGoogle }, "torombolo", {expiresIn: "10h"})
            id =creado._id
            res.send({ email, token, firstName, lastName, id, admin,adress, orders })
            next()
        }
    }else{
        const user = await Usuarios.findOne({ email })

    if (user) {
        firstName = user.firstName
        id = user._id
        admin = user.admin
        lastName = user.lastName
        adress = user.adress
        orders = user.orders
    }
    const authUser = await Usuarios.findOne({ email })

    if (authUser.activo !== true) { res.status(404).send('Disculpa pero te encuentras bloqueado')
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
                    res.send({ email, token, firstName, lastName, id, admin,adress, orders })
                    next()
                    /* console.log(req.headers) */
                } else {
                    res.status(500).send("Correo y/o contraseña incorrecta")
                }
            })
        }

    });
    }}
}





module.exports = auth
