const express = require('express'); 
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser');
const index = require('./rutas/index')
const bcrypt = require("bcrypt")
const passport = require("passport")

require('./database')

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(passport.initialize())

app.use(morgan("dev"))
app.use("/", index)



module.exports = app ;