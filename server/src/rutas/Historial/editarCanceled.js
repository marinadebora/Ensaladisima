const Historial = require("../../modelos/Historial");

const editarCanceled = async (req,res)=>{
   const {_id}=req.params;
try {
  const buscar= await Historial.find({_id:_id});
    if(!buscar) res.status(404).send("No se encontro el historial");
    if(buscar[0].canceled === true){
        const editar= await Historial.findOneAndUpdate({_id:_id},{pending:false,canceled:false,processing:false,received:false})
        res.send(editar)
    } if(buscar[0].canceled === false){
        const editar= await Historial.findOneAndUpdate({_id:_id},{pending:false,canceled:true,processing:false,received:false})
        res.send(editar)
    }
} catch (error) {
    console.error(error)
}
}
module.exports={editarCanceled}