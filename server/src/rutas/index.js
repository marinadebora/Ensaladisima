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
const auth = require("./Usuarios/postInicioSesionUsuario")
const getIdUsuario = require("./Usuarios/getUsuarioId");
const getPedidos = require("./Pedidos/getPedidos");
const crearEnsaladasBigs = require("./EnsaladasBigs/postEnsaladasBigs");
const { correo } = require("../Nodemailer/autenticar");
const { bebidas } = require("../constroladores/cargarBaseDeDatos/controladorDeBebidas");
const { postres } = require("../constroladores/cargarBaseDeDatos/controladorDePostres");
const { getBebidas } = require("./Bebidas/getBebidas");
const { getPostres } = require("./Postres/getPostres");
const { postBase } = require("./Base/postBase");
const { putBase } = require("./Base/putBase");
const { postBebidas } = require("./Bebidas/postBebidas");
const { putBebidas } = require("./Bebidas/putBebidas");
const { postComplementos } = require("./Complementos/postComplementos");
const { putComplementos } = require("./Complementos/putComplementos");
const { postMenu } = require("./Menu/postMenu");
const { putMenu } = require("./Menu/putMenu");
const { postPostres } = require("./Postres/postPostres");
const { putPostres } = require("./Postres/putPostres");
const { putProteins } = require("./Proteina/putProteina");
const { postProteins } = require("./Proteina/postProteina");
const { postSalsas } = require("./Salsa/postSalsas");
const { putSalsas } = require("./Salsa/putSalsas");
const { postToppings } = require("./Topping/postTopping");
const { putToppings } = require("./Topping/putTopping");
const { editarPassword } = require("./Usuarios/putPassword");
const { correoPassword } = require("../Nodemailer/putPassword");
const { getEmail } = require("./Usuarios/getEmail");
const { passwordEditada } = require("../Nodemailer/passwordActualizada");

const router = Router();

// rutas para el modelo de Usuarios.
router.use('/usuarios', getUsuarios)
router.use('/usuario', getIdUsuario)
router.use('/registro', registro,correo)
router.use("/autenticar",auth)
router.put("/usuarios/:_id",editarPassword,passwordEditada);
router.get("/email",getEmail,correoPassword);

// rutas para el modelo de Pedidos.
router.use('/pedidos', getPedidos)


// rutas para el modelo de Menu.
router.get("/menus", getMenu)
router.post("/menus",postMenu);
router.put("/menus/:_id",putMenu);

// rutas para el modelo de Historial.


// rutas para el modelo de EnsaladasMedian.
router.use('/ensaladamed', crearEnsaladaMed)


// rutas para el modelo de EnsaladasBig.
router.use('/ensaladabig', crearEnsaladasBigs)


// rutas para el modelo de Base.
router.get("/bases", getBase)
router.post("/bases",postBase);
router.put("/bases/:_id",putBase);

// rutas para el modelo de Protein.
router.get("/proteins", getProteins)
router.post("/proteins", postProteins);
router.put("/proteins/:_id", putProteins);
// rutas para el modelo de Complement.
router.get("/complements", getComplements)
router.post("/complements",postComplementos);
router.put("/complements/:_id",putComplementos);

// rutas para el modelo de Suace.
router.use('/salsas', getSalsas)
router.post('/salsas', postSalsas);
router.put('/salsas/:_id', putSalsas);


// rutas para el modelo de Topping
router.use('/toppings', getToppings)
router.post('/toppings', postToppings);
router.put('/toppings/:_id', putToppings);

//rutas para el modelo de Beverages
router.get("/bebidas",getBebidas);
router.post("/bebidas",postBebidas);
router.put("/bebidas/:_id",putBebidas);

//rutas para el modelo de Desserts
router.get("/postres",getPostres);
router.post("/postres",postPostres);
router.put("/postres/:_id",putPostres);

// rutas para cargar los modelos de la base de datos
router.get('/menudb', menu);
router.get("/basedb", base);
router.get("/proteinadb", proteina);
router.get("/salsasdb", salsas);
router.get("/toppingdb", topping);
router.get('/complementdb', complements);
router.get("/bebida",bebidas);
router.get("/postre",postres);


module.exports = router