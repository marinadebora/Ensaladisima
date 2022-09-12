const Usuario = require("../../modelos/Usuarios");
const bcrypt = require('bcrypt')

const editarPassword = async (req, res,next) => {
    const { password,password1} = req.body;
    const {_id}= req.params;
    let contraseña = bcrypt.hashSync(password,10)
    console.log(contraseña)
    try {
        const buscar = await Usuario.findOne({_id});
        if (!buscar) res.status(404).send("No se encontro el Usuario");
        else {
            if (password !== password1) res.status(404).send("Las passwords tienen que ser iguales!!");
            else {
                const editar = await Usuario.updateOne({_id},{ password:contraseña});
                res.send("Password editada correctamente")
                next()
            }
        }
    } catch (error) {
        console.error(error)

    }
}

module.exports = { editarPassword };