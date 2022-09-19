const Historial = require("../../modelos/Historial");

const editarReceived = async (req,res)=>{
   const {_id}=req.params;
try {
  const buscar= await Historial.find({_id:_id});
    if(!buscar) res.status(404).send("No se encontro el historial");
    if(buscar[0].received === true){
        const editar= await Historial.findOneAndUpdate({_id:_id},{pending:false,received:false,processing:false})
        res.send(editar)
    } if(buscar[0].received === false){
        const editar= await Historial.findOneAndUpdate({_id:_id},{pending:false,received:true,processing:false})
        res.send(editar)
    }
} catch (error) {
    console.error(error)
}
}
module.exports={editarReceived}