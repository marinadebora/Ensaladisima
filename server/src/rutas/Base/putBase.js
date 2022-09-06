const Base = require("../../modelos/Base");

const putBase = async (req, res) => {
    const { name, image } = req.body;
    const { _id } = req.params;
    try {
        const buscar = await Base.findById({ _id });
        if (!buscar) res.status(404).send("No se encontro el ID");
        else {
            const editar = await Base.updateOne({ _id }, { name:name ?name:buscar.name, image:image?image :buscar.image });
            res.send("Se edito correctamente");

        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = { putBase };