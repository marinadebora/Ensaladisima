const Usuario = require("../../modelos/Usuarios");



const putActivo = async (req, res) => {
    const { _id } = req.params;
    try {
        const user = await Usuario.findOne({ _id });
        if(!user) res.status(404).send("No se encontro el usuario"); 
        if(user.activo === true){
            const editar = await Usuario.findOneAndUpdate({ _id:_id }, { activo:false}); 
            res.send(editar);
        }
        if(user.activo === false){
            const editar = await Usuario.findOneAndUpdate({_id:_id }, { activo:true});
            res.send(editar);
        }
           
    } catch (error) {
        console.error(error);
    };

};

module.exports = { putActivo };