const Topping = require("../../modelos/Topping");

const putToppings = async (req, res) => {
    const { name, image } = req.body;
    const { _id } = req.params;
    try {
        const buscar = await Topping.findById(_id);
        if (!buscar) res.status(404).send("No se encontro el id");
        else {
            const editar = await Topping.updateOne({ _id }, { name, image });
            res.send("Topping editado correctamente");
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { putToppings};