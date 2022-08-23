const { Router } = require("express");
const { base } = require("../constroladores/cargarBaseDeDatos/controladorDeBase");
const { menu } = require("../constroladores/cargarBaseDeDatos/controladorDelMenu");
const { proteina } = require("../constroladores/cargarBaseDeDatos/controladorProteina");
const { salsas } = require("../constroladores/cargarBaseDeDatos/controladorSalsas");
const { topping } = require("../constroladores/cargarBaseDeDatos/controladorTopping");
const { complements } = require("../constroladores/cargarBaseDeDatos/controladorDeComplementos");
const { getBase } = require("./Base/getBase");
const { getComplements } = require("./Complementos/getComplementos");
const { getMenu } = require("./Menu/getMenu");
const { getProteins } = require("./Proteina/getProteina");
const getSalsas = require("./Salsa/get.Salsas");
const getToppings = require("./Topping/getTopping");
const getUsuarios = require("./Usuarios/getUsuarios");
const crearEnsaladaMed = require("./EnsaladasMedianas/postCrearEnsaladaMed");
const registro = require("./Usuarios/postRegistroUsuario");

const router = Router();

// rutas para el modelo de Usuarios.
router.use('/usuarios', getUsuarios)
router.use('/registro', registro)


// rutas para el modelo de Pedidos.


// rutas para el modelo de Menu.
router.get("/menus", getMenu)

// rutas para el modelo de Historial.


// rutas para el modelo de EnsaladasMedian.
router.use('/ensaladamed', crearEnsaladaMed)


// rutas para el modelo de EnsaladasBig.


// rutas para el modelo de Base.
router.get("/bases", getBase)

// rutas para el modelo de Protein.
router.get("/proteins", getProteins)

// rutas para el modelo de Complement.
router.get("/complements", getComplements)

// rutas para el modelo de Suace.
router.use('/salsas', getSalsas)


// rutas para el modelo de Topping
router.use('/toppings', getToppings)


// rutas para cargar los modelos de la base de datos
router.get('/menudb', menu);
router.get("/basedb", base);
router.get("/proteinadb", proteina);
router.get("/salsasdb", salsas);
router.get("/toppingdb", topping);
router.get('/complementdb', complements)


module.exports = router