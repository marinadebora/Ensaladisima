const {Router} = require("express");
const { base } = require("../constroladores/cargarBaseDeDatos/controladorDeBase");
const { menu } = require("../constroladores/cargarBaseDeDatos/controladorDelMenu");
const { proteina } = require("../constroladores/cargarBaseDeDatos/controladorProteina");
const { salsas } = require("../constroladores/cargarBaseDeDatos/controladorSalsas");
const { topping } = require("../constroladores/cargarBaseDeDatos/controladorTopping");
const { complements } = require("../constroladores/cargarBaseDeDatos/controladorDeComplementos");

const router = Router();

router.get('/menu', menu);
router.get("/base",base);
router.get("/proteina",proteina);
router.get("/salsas",salsas);
router.get("/topping",topping);
router.get('/complement', complements)

module.exports = router