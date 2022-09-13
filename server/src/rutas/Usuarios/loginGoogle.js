const { Router } = require("express");
const auth = require("./postInicioSesionUsuario");
const loginGoogle = Router();

loginGoogle.get("/google", (req,res,next)=>res.send(req.user,next()),auth)

module.exports = {loginGoogle}