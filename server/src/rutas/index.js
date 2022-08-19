const {Router} = require("express");
const { complements } = require("../constroladores/cargarBaseDeDatos/controladorDeComplementos");
const { menu } = require("../constroladores/cargarBaseDeDatos/controladorDelMenu");

const router = Router();

// rutas para el modelo de Usuarios.


// rutas para el modelo de Pedidos.


// rutas para el modelo de Menu.


// rutas para el modelo de Historial.


// rutas para el modelo de EnsaladasMedian.


// rutas para el modelo de EnsaladasBig.


// rutas para el modelo de Base.


// rutas para el modelo de Protein.


// rutas para el modelo de Complement.


// rutas para el modelo de Suace.


// rutas para el modelo de Topping


// rutas para cargar los modelos de la base de datos
router.get('/menu', menu)
router.get('/complement', complements)

module.exports = router