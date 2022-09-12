const express = require('express'); 
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser');
const index = require('./rutas/index')
const bcrypt = require("bcrypt")
const passport = require("passport")
const stripe = require("stripe")
let stripeSecret= "sk_test_51LSmj7J1G02QCFvGG4J3Dib99MeQCelVPlWuhnXkq81ftY0yMucev9ThIR33QQhGk2ZJWnHSyfshdtwRINF98UlW000pzBmNCb"

require('./database')

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(passport.initialize())

app.use(morgan("dev"))

app.post('/checkout', async(req,res)=>{
    try{
        const {id, amount}= req.body
    
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Customers Cart",
            payment_method: id,
            confirm: true
        })
        console.log("pagoooooo back",payment )
        res.send({message:"Pago recibido exitosamente"})
    }

        catch(error){
            console.log(error)
res.json({message:error.raw.message})
        }
})


app.use("/", index)



module.exports = app ;