const {Router} = require('express')
const pedidoSlice = Router()
const EnsaladasMedians = require('../../modelos/EnsaladasMedian')
const EnsaladasBig = require('../../modelos/EnsaladasBig')
const Pedidos = require('../../modelos/Pedidos')

pedidoSlice.put('/', async (req,res)=>{
    const {id,orders} = req.body
    try {
        const buscarMedianas = await EnsaladasMedians.find({_id:id})
        const buscarBig = await EnsaladasBig.find({_id:id})
        if(buscarMedianas[0]){
            const cargarMed = await Pedidos.findOneAndUpdate({_id: orders},{
                $push:{
                    saladsMed:id
                }
            })
            console.log(cargarMed)
            res.send(cargarMed)
        }else if(buscarBig[0]){
            const cargarBig = await Pedidos.findOneAndUpdate({_id: orders},{
                $push:{
                    saladsBig:id
                }
            })
            console.log(cargarBig)
            res.send(cargarBig)
        }else{
            res.status(404).send('La ensalada no existe')
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = pedidoSlice