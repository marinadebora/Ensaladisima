const {Router} = require('express')
const Review = require('../../modelos/Review')

const postCrearReview = Router()

postCrearReview.post('/', async (req, res) =>{
    const {firstName, lastName, comentarios, email, estrellas} = req.body;
    try {
        const buscar = await Review.find({email:email})
        if(!buscar[0]){
            const crear = await Review.create({firstName, lastName, comentarios, email, estrellas})
            res.send(`Tu comentario se agrego correctamente con una puntuacion de ${estrellas}⭐`)
        }else{
            res.status(404).send('Ya has valorado nuestra tienda, si deseas cambiar tu valoracion y comentario dirigete a tu perfil')
        }
        console.log(buscar)
    } catch (error) {
        console.log(error)
    }
})


module.exports = postCrearReview