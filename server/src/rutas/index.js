const {Router} = require("express");
const { menu } = require("../constroladores/cargarBaseDeDatos/controladorDelMenu");

const router = Router();

router.get('/', menu)

module.exports = router