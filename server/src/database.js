const mongoose = require("mongoose");
require('dotenv').config();
const { URL_MONGO } = process.env;


(async () => {
    try {

        const db = await mongoose.connect(URL_MONGO);
        console.log('conectada la db', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()