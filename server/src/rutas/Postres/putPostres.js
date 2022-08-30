const Postres = require("../../modelos/Postres");

const putPostres = async (req, res) => {
    const { name, image } = req.body;
    const { _id } = req.params;
    try {
        const buscar = await Postres.findById(_id);
        if (!buscar) res.status(404).send("No se encontro el id");
        else {
            const editar = await Postres.updateOne({ _id }, { name, image });
            res.send("Postre editado correctamente");
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { putPostres };