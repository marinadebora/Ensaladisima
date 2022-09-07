const {Router} = require('express')
const EnsaladasMedians = require('../../modelos/EnsaladasMedian')

const postEnsaladaMediana = Router()

postEnsaladaMediana.post('/', async (req,res) =>{
    const {base,complement,protein,suace,topping} = req.body
    try {
        const buscar = await EnsaladasMedians.find({base,complement,protein,suace,topping})
        if(buscar[0]){
            res.send(buscar[0])
        }else{
            const crear = await EnsaladasMedians.create({base,complement,protein,suace,topping})
            res.send(crear)
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = postEnsaladaMediana