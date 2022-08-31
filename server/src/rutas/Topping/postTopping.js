const Topping = require("../../modelos/Topping");

const postToppings= async (req, res) => {
    const { name, image } = req.body;
    try {
        const buscar = await Topping.find({ name });
        if (buscar[0]) res.status(404).send("Ya contamos con ese Topping");
        else {
            const crear = await Topping.create({ name, image });
            res.send("Topping creado correctamente");
        }
    } catch (error) {
        console.log(error);
    }

}
module.exports = { postToppings};