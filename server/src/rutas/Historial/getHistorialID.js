const  Historials = require("../../modelos/Historial")

const getHistorialId= async (req,res)=>{
    const {_id}=req.params;
    console.log(_id)
    try {
        if(!_id) res.status(404).send("no se encontro el id")
        const buscar = await Historials.findById({_id:_id}).populate({
            path:"orders",
            populate:{path:"saladsMenu"}
        }).populate({
            path:"orders",
            populate:{path:"saladsMenuBig"}
        }).populate({
            path:"orders",
            populate:{path:"saladsMed"}
        }).populate({
            path:"orders",
            populate:{path:"saladsBig"}
        }).populate({
            path:"orders",
            populate:{path:"beverages"}
        }).populate({
            path:"orders",
            populate:{path:"desserts"}
        }).populate('user',{
            password:0,
            orders:0,
            purchaseHistory:0,
            __v:0,
            admin:0,
            activo:0
        })
        // console.log(buscar.map(e => e.orders?._id))
        /* const suma = buscar?.map( e=>{
            return {
                _id: e._id,
                user: e.user,
                orders: e.orders?.saladsMenu?.concat(e.orders?.saladsMenuBig).concat(e.orders?.saladsMed).concat(e.orders?.saladsBig).concat(e.orders?.beverages).concat(e.orders?.desserts),
                totalPayable: e.orders?.saladsMenu?.map(a => a.price).reduce((sum, current) => sum + current, 0) + e.orders?.saladsMee.orders?.map(a => a.price).reduce((sum, current) => sum + current, 0) + e.orders?.saladsBig.map(a => a.price).reduce((sum, current) => sum + current, 0) + e.orders?.beverages.map(a => a.price).reduce((sum, current) => sum + current, 0) + e.orders?.desserts.map(a => a.price).reduce((sum, current) => sum + current, 0) + e.orders?.saladsMenuBig.map(a => a.price).reduce((sum, current) => sum + current, 0),
            }
        }) */
        res.send(buscar)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={getHistorialId}