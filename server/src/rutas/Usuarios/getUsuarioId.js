const { Router } = require('express');
const Usuarios = require('../../modelos/Usuarios');

const getIdUsuario = Router();

getIdUsuario.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {

        if (id.length > 24 || id.length < 24) {
            res.status(404).send('El Id es incorrecto')
        } else {
            const user = await Usuarios.find({ _id: id }).populate({
                path: "orders",
                populate: { path: "saladsMenu" },
            }).populate({
                path: "orders",
                populate: { path: "saladsMed" },
            }).populate({
                path: "orders",
                populate: { path: "saladsBig" }
            }).populate({
                path: "orders",
                populate: { path: "beverages" }
            }).populate({
                path: "orders",
                populate: { path: "desserts" }
            }).populate({
                path: "purchaseHistory",
                populate: {
                    path: "orders",
                    populate: { path: "saladsMenu" }
                }
            }).populate({
                path: "purchaseHistory",
                populate: {
                    path: "orders",
                    populate: { path: "saladsMenuBig" }
                }
            }).populate({
                path: "purchaseHistory",
                populate: {
                    path: "orders",
                    populate: { path: "saladsMed" }
                }
            }).populate({
                path: "purchaseHistory",
                populate: {
                    path: "orders",
                    populate: { path: "saladsBig" }
                }
            }).populate({
                path: "purchaseHistory",
                populate: {
                    path: "orders",
                    populate: { path: "beverages" }
                }
            }).populate({
                path: "purchaseHistory",
                populate: {
                    path: "orders",
                    populate: { path: "desserts" }
                }
            })



            let results = {
                _id: user[0]._id,
                firstName: user[0].firstName,
                lastName: user[0].lastName,
                email: user[0].email,
                password: user[0].password,
                adress: user[0].adress,
                phone: user[0].phone,
                admin: user[0].admin,
                activo: user[0].activo,
                orders: user[0].orders.map(d => {
                    return {
                        _id: d._id,
                        user: d.user,
                        salads: d.saladsMenu.concat(d.saladsMed).concat(d.saladsBig),
                        beverages: d.beverages.map(e => e) ? d.beverages.map(e => e) : [],
                        desserts: d.desserts.map(e => e) ? d.desserts.map(e => e) : [],
                        totalPayable: d.saladsMenu.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsMed.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsBig.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.beverages.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.desserts.map(a => a.price).reduce((sum, current) => sum + current, 0),
                        delievery: d.delievery,
                        adress: d.adress
                    }
                }) ?
                    user[0].orders.map(d => {
                        return {
                            _id: d._id,
                            user: d.user,
                            salads: d.saladsMenu.concat(d.saladsMed).concat(d.saladsBig),
                            beverages: d.beverages.map(e => e) ? d.beverages.map(e => e) : [],
                            desserts: d.desserts.map(e => e) ? d.desserts.map(e => e) : [],
                            totalPayable: d.saladsMenu.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsMed.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsBig.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.beverages.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.desserts.map(a => a.price).reduce((sum, current) => sum + current, 0),
                            delievery: d.delievery,
                            adress: d.adress
                        }
                    }) : [],
                purchaseHistory: user[0].purchaseHistory
            }
            !results._id ?
                res.status(404).send(`El numero ${id}, no existe en nuestra nase de datos`) :
                res.send(results)
        }
    } catch (error) {
        console.error({ message: error.message })
    }
})

module.exports = getIdUsuario