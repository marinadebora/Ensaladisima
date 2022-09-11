const Complementos = require("../../modelos/Complementos");

const putComplementos = async (req, res) => {
    const { name, image } = req.body;
    const { _id } = req.params;
    try {
        const buscar = await Complementos.findById(_id);
        if (!buscar) res.status(404).send("No se encontro el id");
        else {
            const editar = await Complementos.updateOne({ _id }, { name:name?name:buscar.name, image:image? image:buscar.image });
            res.send("Complemento editado correctamente");
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { putComplementos };