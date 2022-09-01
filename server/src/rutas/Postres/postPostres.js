const Postres = require("../../modelos/Postres");

const postPostres = async (req, res) => {
    const { name, image,price,stock} = req.body;
    try {
        const buscar = await Postres.find({ name });
        if (buscar[0]) res.status(404).send("Ya contamos con ese Postre");
        else {
            const crear = await Postres.create({ name, image,price,stock });
            res.send("Postre creado correctamente");
        }
    } catch (error) {
        console.log(error);
    }

}
module.exports = { postPostres };