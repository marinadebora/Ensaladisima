const Historial = require("../../modelos/Historial");

const editarProcessing= async (req,res)=>{
   const {_id}=req.params;
try {
  const buscar= await Historial.find({_id:_id});
    if(!buscar) res.status(404).send("No se encontro el historial");
    if(buscar[0].processing === true){
        const editar= await Historial.findOneAndUpdate({_id:_id},{pending:false,processing:false,canceled:false})
        res.send(editar)
    } if(buscar[0].processing === false){
        const editar= await Historial.findOneAndUpdate({_id:_id},{pending:false,processing:true,canceled:false})
        res.send(editar)
    }
} catch (error) {
    console.error(error)
}
}
module.exports={editarProcessing}