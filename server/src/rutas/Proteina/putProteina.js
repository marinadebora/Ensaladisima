const Proteina = require("../../modelos/Proteina");

const putProteins = async (req, res) => {
    const { name, image } = req.body;
    const { _id } = req.params;
    try {
        const buscar = await Proteina.findById(_id);
        if (!buscar) res.status(404).send("No se encontro el id");
        else {
            const editar = await Proteina.updateOne({ _id }, { name, image });
            res.send("Proteina editada correctamente");
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { putProteins };