
const Reviews = require("../../modelos/reviews");




const putActivoReviews = async (req, res) => {
    const { _id } = req.params;
    try {
        const review = await Reviews.findOne({ _id:_id })
        if (review.activo === true) await Reviews.findOneAndUpdate({ _id:_id },{ activo:false}).then(res.send(review)) 
        if (review.activo === false) await Reviews.findOneAndUpdate({ _id:_id },{ activo:true}).then(res.send(review))
    }catch(error){
        console.log(error)
    }
}

module.exports = { putActivoReviews };