const { Router } = require("express");
// const { base } = require("../constroladores/cargarBaseDeDatos/controladorDeBase");
// const { menu } = require("../constroladores/cargarBaseDeDatos/controladorDelMenu");
// const { proteina } = require("../constroladores/cargarBaseDeDatos/controladorProteina");
// const { salsas } = require("../constroladores/cargarBaseDeDatos/controladorSalsas");
// const { topping } = require("../constroladores/cargarBaseDeDatos/controladorTopping");
// const { complements } = require("../constroladores/cargarBaseDeDatos/controladorDeComplementos");
// const { bebidas } = require("../constroladores/cargarBaseDeDatos/controladorDeBebidas");
// const { postres } = require("../constroladores/cargarBaseDeDatos/controladorDePostres");
// const { menuBig } = require("../constroladores/cargarBaseDeDatos/controladorDelMenuBig");
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
const { getBebidas } = require("./Bebidas/getBebidas");
const { getPostres } = require("./Postres/getPostres");
const postPedidoBebida = require("./Pedidos/postPedidoBebidas");
const postPedidoPostre = require("./Pedidos/postPedidoPostres");
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
const eliminarDelPedido = require("./Pedidos/eliminardelPedido");
const postPedidoMenu = require("./Pedidos/postPedidoMenu");
const postHistorial = require("./Historial/postHistorial");
const { getMenuBig } = require("./MenuBig/getMenuBig");
const postEnsaladaMediana = require("./EnsaladasMedianas/posEnsaladasMediana");
const postEnsaladaGrande = require("./EnsaladasBigs/postEnsaladasBig");
const agregarAlPedido = require("./Pedidos/agregarAlPedido");
const postPedidoMenuBig = require("./Pedidos/postPedidoMenuBig");
const crearLocalStorage = require("./Pedidos/crearPedidoLocalStorage");
const cargarPedido = require("./Pedidos/cargarPedidos");
const { getHistorial } = require("./Historial/getHistorial");
const { usuarioMidelwere } = require("./Usuarios/Midelwer/usuarioMidelwer");
const { sesionMidelwere } = require("./Usuarios/Midelwer/sesionMidelwere");
const { correoContacto } = require("../Nodemailer/correoContacto");
const { crearPedidoMidelwere } = require("./Usuarios/Midelwer/crearPedidoMidelwere");
const { putAdmin } = require("./Usuarios/putAdmin");
const { putActivo } = require("./Usuarios/putActivo");
const getReview = require("./Review/getReview");
const postCrearReview = require("./Review/postCrearReview");
const putPedidosDelivery = require("./Usuarios/putDelivery");
const { putActivoMenu } = require("./Menu/putActivoMenu");
const { putActivoMenuB } = require("./MenuBig/putActivoMenuBig");
const { putActivoBase } = require("./Base/putActivoBases");
const { putActivoProtein } = require("./Proteina/putProteinaActivo");
const { putActivoComplemento } = require("./Complementos/putActivoComplemento");
const { putActivoSalsas } = require("./Salsa/putActivoSalsas");
const { putActivoTopping } = require("./Topping/putActivoTopping");
const { putActivoBebidas } = require("./Bebidas/putActivoBebidas");
const { putActivoPostres } = require("./Postres/putActivoPostres");
const { putActivoReviews } = require("./Review/putReviewActivo");
const pedidoSlice = require("./Pedidos/putAgregaEnsaladasDeSlice");
const { editarProcessing } = require("./Historial/editarProcessing");
const { editarReceived } = require("./Historial/editarReceived");
const { editarCanceled } = require("./Historial/editarCanceled");
const { getHistorialId } = require("./Historial/getHistorialID");
const { postMenuBig } = require("./MenuBig/postMenuBig");
const { putMenuBig } = require("./MenuBig/putMenuBig");
const eliminarLinea = require("./Pedidos/eliminarLinea");


const router = Router();

// rutas para el modelo de Usuarios.
router.use('/usuarios', getUsuarios)
router.use('/usuario', getIdUsuario)
router.use('/registro', registro, usuarioMidelwere, correo)
router.use("/autenticar", auth, crearPedidoMidelwere, sesionMidelwere)
router.put("/usuarios/:_id", editarPassword, passwordEditada);
router.use("/email", getEmail, correoPassword);
router.put("/userAdmin/:_id", putAdmin);
router.put("/userActivo/:_id", putActivo);

// rutas para el modelo de Pedidos.
router.use('/pedidos', getPedidos)
router.use('/pedidobebida', postPedidoBebida)
router.use('/pedidopostre', postPedidoPostre)
router.use('/pedidomenu', postPedidoMenu)
router.use('/pedidomenubig', postPedidoMenuBig)
router.use('/eliminarDelPedido', eliminarDelPedido)
router.use('/agregar', agregarAlPedido)
router.use('/crearLocalStorage', crearLocalStorage)
router.use('/cargarPedido', cargarPedido)
router.use("/putpedidodelivery", putPedidosDelivery)


// rutas para el modelo de Menu.
router.get("/menus", getMenu)
router.post("/menus", postMenu);
router.put("/menus/:_id", putMenu);
router.put("/menusActivo/:_id", putActivoMenu);//

//rutas para el modelo de MenuBig
router.get("/menubig", getMenuBig)
router.post("/menuBig", postMenuBig);
router.put("/menubigActivo/:_id", putActivoMenuB);//
router.put("/menuBig/:_id",putMenuBig);

// rutas para el modelo de Historial.
router.use('/crearHistorial', postHistorial)
router.use('/historial', getHistorial)
router.put("/estadoProcessing/:_id", editarProcessing);
router.put("/estadoReceived/:_id", editarReceived);
router.put("/estadoCanceled/:_id", editarCanceled);
router.get("/historials/:_id", getHistorialId);



// rutas para el modelo de EnsaladasMedian.
router.use('/ensaladamed', crearEnsaladaMed)
router.use('/mediana', postEnsaladaMediana)


// rutas para el modelo de EnsaladasBig.
router.use('/ensaladabig', crearEnsaladasBigs)
router.use('/grande', postEnsaladaGrande)


// rutas para el modelo de Base.
router.get("/bases", getBase)
router.post("/bases", postBase);
router.put("/bases/:_id", putBase);
router.put("/basesActivo/:_id", putActivoBase);//

// rutas para el modelo de Protein.
router.get("/proteins", getProteins)
router.post("/proteins", postProteins);
router.put("/proteins/:_id", putProteins);
router.put("/proteinsActivo/:_id", putActivoProtein);//

// rutas para el modelo de Complement.
router.get("/complements", getComplements)
router.post("/complements", postComplementos);
router.put("/complements/:_id", putComplementos);
router.put("/complementsActivo/:_id", putActivoComplemento);//

// rutas para el modelo de Suace.
router.use('/salsas', getSalsas)
router.post('/salsas', postSalsas);
router.put('/salsas/:_id', putSalsas);//
router.put("/salsasActivo/:_id", putActivoSalsas);


// rutas para el modelo de Topping
router.use('/toppings', getToppings)
router.post('/toppings', postToppings);
router.put('/toppings/:_id', putToppings);
router.put("/toppingsActivo/:_id", putActivoTopping);//

//rutas para el modelo de Beverages
router.get("/bebidas", getBebidas);
router.post("/bebidas", postBebidas);
router.put("/bebidas/:_id", putBebidas);
router.put("/bebidasActivo/:_id", putActivoBebidas);//

//rutas para el modelo de Desserts
router.get("/postres", getPostres);
router.post("/postres", postPostres);
router.put("/postres/:_id", putPostres);
router.put("/postresActivo/:_id", putActivoPostres);//

//ruta formulario de contacto
router.post("/contactform", correoContacto)

// rutas para cargar los modelos de la base de datos
// router.get('/menudb', menu);
// router.get("/basedb", base);
// router.get("/proteinadb", proteina);
// router.get("/salsasdb", salsas);
// router.get("/toppingdb", topping);
// router.get('/complementdb', complements);
// router.get("/bebidadb", bebidas);
// router.get("/postredb", postres);
// router.get("/MenuBigdb", menuBig)


// rutas de las review
router.use('/review', getReview)
router.use('/reviewCreada', postCrearReview)
router.put("/reviewActivo/:_id", putActivoReviews);
// ruta alternativas

// ruta alternativas
router.use('/modificarpedido', pedidoSlice)
router.use('/eliminarLinia', eliminarLinea)

module.exports = router