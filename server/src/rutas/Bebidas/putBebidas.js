const Bebidas = require("../../modelos/Bebidas");

const putBebidas = async (req, res) => {
    const { name, image } = req.body;
    const { _id } = req.params;
    try {
        const buscar = await Bebidas.findById({ _id });
        if (!buscar) res.status(404).send("No se encontro el ID");
        else {
            const editar = await Bebidas.updateOne({ _id }, { name, image });
            res.send("Su bebida se edito correctamente");

        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = {putBebidas};