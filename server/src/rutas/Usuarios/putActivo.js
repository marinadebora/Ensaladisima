const Usuario = require("../../modelos/Usuarios");





const putActivo = async (req, res) => {
    const { _id } = req.params;
    try {
        const buscar = await Usuario?.findOne({ _id:_id })
        console.log(buscar)
        if (buscar.activo === true){
            await Usuario.findOneAndUpdate({ _id:_id },{ activo:false})     
              res.send(buscar)
        } 
        else{
         await Usuario.findOneAndUpdate({ _id:_id },{ activo:true})
        res.send(buscar)
        } 

    
    } catch (error) {
        console.error(error);
    };

};

module.exports = { putActivo };