const Salsas = require("../../modelos/Salsas");

const postSalsas= async (req, res) => {
    const { name, image } = req.body;
    try {
        const buscar = await Salsas.find({ name });
        if (buscar[0]) res.status(404).send("Ya contamos con esa Salsa");
        else {
            const crear = await Salsas.create({ name, image });
            res.send("Salsa creada correctamente");
        }
    } catch (error) {
        console.log(error);
    }

}
module.exports = { postSalsas };