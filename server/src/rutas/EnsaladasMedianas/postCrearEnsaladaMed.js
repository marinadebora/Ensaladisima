const {Router} = require('express');
const Bases = require('../../modelos/Base');
const Proteins = require('../../modelos/Proteina');
const Complemets = require('../../modelos/Complementos');
const Suaces = require('../../modelos/Salsas');
const Toppings = require('../../modelos/Topping');
const Usuarios = require('../../modelos/Usuarios');
const Pedidos = require('../../modelos/Pedidos');
const EnsaladasMedians = require('../../modelos/EnsaladasMedian')
var findOrCreate = require('mongoose-findorcreate')

const crearEnsaladaMed = Router()

crearEnsaladaMed.post('/', async (req, res, next) =>{
    const { base, protein, complement, suace, topping} = req.body;
    const {id} = req.params;
    console.log(id)
    try {
        if(id){
            const use = await Usuarios.findById({_id:id})
            console.log(use)
        }
        /* const use = await Usuarios.findById(id) */
        const crearEnsalada = await EnsaladasMedians.findOrCreate({
            /* $push:{ */
            base,
            protein,
            complement,
            suace,
            topping
            /* } */
        })
        const Buscar = await EnsaladasMedians.find({
            base,
            protein,
            complement,
            suace,
            topping
        })
        /* const pedido = await Pedidos.create({
            $push:{
                user: use[0]._id,
                salads: Buscar[0]._id}
        }) */
        /* console.log(Buscar) */
        /* res.send(pedido) */
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = crearEnsaladaMed