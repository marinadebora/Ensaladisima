const { Router } = require('express');
const Usuarios = require('../../modelos/Usuarios')

const getUsuarios = Router()

getUsuarios.get('/', async (req,res,next) =>{
    try{    
        const {nombre} = req.query
        const usuarios = await Usuarios.find({}).populate({
            path:"orders",
            populate:{path:"saladsMenu"},
        }).populate({
            path:"orders",
            populate:{path:"saladsMed"},
        }).populate({
            path:"orders",
            populate:{path:"saladsBig"}
        })
        const results = usuarios.map(e =>{
            return{
                _id: e._id,
                firstName: e.firstName,
                lastName: e.lastName,
                email: e.email,
                password: e.password,
                adress: e.adress,
                phone: e.phone,
                admin: e.admin,
                activo: e.activo,
                orders:e.orders.map(d=>{
                    return{
                        user: d.user,
                        salads: d.saladsMenu.concat(d.saladsMed).concat(d.saladsBig),
                        totalPayable: d.saladsMenu.map(a=> a.price).reduce((sum,current)=> sum + current, 0) + d.saladsMed.map(a=> a.price).reduce((sum,current)=> sum + current, 0) + d.saladsBig.map(a=> a.price).reduce((sum,current)=> sum + current, 0),
                        delievery: d.delievery,
                        adress: d.adress
                    }
                }),
                purchaseHistory: e.purchaseHistory
            }
        })

    if(nombre) {
        const usuariosBuscados = results.filter(e=>e.firstName.includes(nombre.toLocaleLowerCase()))
        res.send(usuariosBuscados.length?usuariosBuscados:"Ese nombre no coincide D:")
    }else{
    res.send(results)
}}
    catch(error){
        console.error({message:error.message})
    }
})

module.exports = getUsuarios