const { Router } = require('express')
const Review = require('../../modelos/Review')

const getReview = Router()

getReview.get('/', async (req, res) => {
    try {
        const inf = await Review.find({})
        res.send(inf)
    } catch (error) {
        console.log(error)
    }

})


module.exports = getReview