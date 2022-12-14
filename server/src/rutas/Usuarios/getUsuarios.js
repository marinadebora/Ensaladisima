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
        }).populate({
            path:"orders",
            populate:{path:"beverages"}
        }).populate({
            path:"orders",
            populate:{path:"desserts"}
        }).populate({
            path:"purchaseHistory",
            populate:{path:"orders",
            populate:{path:"saladsMenu"}
        }}).populate({
            path:"purchaseHistory",
            populate:{path:"orders",
            populate:{path:"saladsMenuBig"}
        }}).populate({
            path:"purchaseHistory",
            populate:{path:"orders",
            populate:{path:"saladsMed"}
        }}).populate({
            path:"purchaseHistory",
            populate:{path:"orders",
            populate:{path:"saladsBig"}
        }}).populate({
            path:"purchaseHistory",
            populate:{path:"orders",
            populate:{path:"beverages"}
        }}).populate({
            path:"purchaseHistory",
            populate:{path:"orders",
            populate:{path:"desserts"}
        }})
        const results = usuarios.map(e =>{
            return{
                _id: e._id,
                name: e.firstName + " " + e.lastName,
                // lastName: e.lastName,
                email: e.email,
                adress: e.adress,
                phone: e.phone,
                admin: e.admin,
                activo: e.activo,
                orders:e.orders.map(d=>{
                    return{
                        _id: d._id,
                            user: d.user,
                            salads: d.saladsMenu.concat(d.saladsMed).concat(d.saladsBig).concat(d.saladsMenuBig),
                            beverages: d.beverages.map(a => a)? d.beverages.map(a => a): [],
                            desserts: d.desserts.map(a => a)? d.desserts.map(a => a):[],
                            totalPayable: d.saladsMenu.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsMed.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.saladsBig.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.beverages.map(a => a.price).reduce((sum, current) => sum + current, 0) + d.desserts.map(a => a.price).reduce((sum, current) => sum + current, 0),
                            delievery: d.delievery,
                            adress: d.adress,
                            facheyhora: d.facheyhora
                    }
                }),
                purchaseHistory: e.purchaseHistory.map(e=>e)
            }
        })

    if(nombre) {  
        const usuariosBuscados = results.filter(e=>e.name.includes(nombre.toLocaleLowerCase()))
        usuariosBuscados.length?
        res.send(usuariosBuscados):
        res.status(404).json("Ese nombre no coincide D:")
    }else{
    res.send(results)
}}
    catch(error){
        console.error({message:error.message})
    }
})

module.exports = getUsuarios