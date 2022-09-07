const Salsas = require("../../modelos/Salsas");

const putSalsas = async (req, res) => {
    const { name, image } = req.body;
    const { _id } = req.params;
    try {
        const buscar = await Salsas.findById(_id);
        if (!buscar) res.status(404).send("No se encontro el id");
        else {
            const editar = await Salsas.updateOne({ _id }, { name:name?name:buscar.name, image:image? image:buscar.image });
            res.send("Salsa editada correctamente");
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { putSalsas };