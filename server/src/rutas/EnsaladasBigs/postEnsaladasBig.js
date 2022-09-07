const {Router}=require('express')
const EnsaladasBig = require('../../modelos/EnsaladasBig')

const postEnsaladaGrande = Router()

postEnsaladaGrande.post('/', async (req,res) =>{
    const {base,complement,protein,suace,topping} = req.body
    try {
        const buscar = await EnsaladasBig.find({base,complement,protein,suace,topping})
        if(buscar[0]){
            res.send(buscar[0])
        }else{
            const crear = await EnsaladasBig.create({base,complement,protein,suace,topping})
            res.send(crear)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = postEnsaladaGrande