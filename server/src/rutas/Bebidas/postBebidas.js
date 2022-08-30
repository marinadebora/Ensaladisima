const Bebidas = require("../../modelos/Bebidas");

const postBebidas = async (req, res) => {
    const { name, image } = req.body;
    try {
        const buscar = await Bebidas.find({ name });
        if (buscar[0]) res.status(404).send("Ya contamos con esa bebida");
        else {
            const crear = await Bebidas.create({ name, image });
            res.send("Su bebida se creo correctamente");
        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = { postBebidas };