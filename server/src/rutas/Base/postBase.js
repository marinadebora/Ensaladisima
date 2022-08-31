const Base = require("../../modelos/Base");

const postBase = async (req, res) => {
    const { name, image } = req.body;
    try {
        const buscar = await Base.find({ name });
        if (buscar[0]) res.status(404).send("Ya contamos con esa base");
        else {
            const crear = await Base.create({ name, image });
            res.send("Se creo correctamente");
        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = { postBase };