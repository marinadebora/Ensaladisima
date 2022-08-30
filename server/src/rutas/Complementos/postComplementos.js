const Complementos = require("../../modelos/Complementos");

const postComplementos = async (req, res) => {
    const { name, image } = req.body;
    try {
        const buscar = await Complementos.find({ name });
        if (buscar[0]) res.status(404).send("Ya contamos con ese Complemento");
        else {
            const crear = await Complementos.create({ name, image });
            res.send("Complemento creado correctamente");
        }
    } catch (error) {
        console.log(error);
    }

}
module.exports = { postComplementos };