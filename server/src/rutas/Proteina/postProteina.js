const Proteina = require("../../modelos/Proteina");

const postProteins= async (req, res) => {
    const { name, image } = req.body;
    try {
        const buscar = await Proteina.find({ name });
        if (buscar[0]) res.status(404).send("Ya contamos con esa Proteina");
        else {
            const crear = await Proteina.create({ name, image });
            res.send("Proteina creada correctamente");
        }
    } catch (error) {
        console.log(error);
    }

}
module.exports = { postProteins };