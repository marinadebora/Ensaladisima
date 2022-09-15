const Usuario = require("../../modelos/Usuarios");



const putAdmin = async (req, res) => {
    const { _id } = req.params;
    try {
        const user = await Usuario.findOne({ _id });
        if(!user) res.status(404).send("No se encontro el usuario");
        if(user.admin === true){
            const editar = await Usuario.findOneAndUpdate({ _id:_id }, { admin:false}); 
            res.send(editar);
        }
        if(user.admin === false){
            const editar = await Usuario.findOneAndUpdate({_id:_id }, { admin:true});
            res.send(editar);
        }
    } catch (error) {
        console.error(error);
    };

};

module.exports = { putAdmin };