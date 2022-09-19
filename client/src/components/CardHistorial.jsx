import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { historialId, putCancelado, putProcesado, putRecibido } from "../action";
import "../styles/CardUsuarioId.css"



export default function CardHistorial({canceled,pending,_id,processing,received,totalPayable,facheyhora,correo,nombre}){

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(historialId(_id))
},[dispatch,_id])

  function handleSubmitProcesado (e){
    e.preventDefault()
    dispatch(putProcesado(_id))
    window.location.reload()
}
function handleSubmitRecibido (e){
  e.preventDefault()
  dispatch(putRecibido(_id))
  window.location.reload()
}
function handleSubmitCancelado (e){
  e.preventDefault()
  dispatch(putCancelado(_id))
  window.location.reload()
}


  return (
    
      <div id="usuarioDetailMain" className="container">
        <Link  class="row" id="cardSimpleFrame1" to={`/detalleHistorial/${_id}`}> <button >Detalle </button></Link>
      <div class="row">
      
                    
         <div class="row"  id="pencilContent">
         <button id="pencilB" type='button'><i id="pencil" class="bi bi-pencil"></i></button>
         </div> 
         <p class="col-6" id="userLabel">Nombre y Apellido: </p><p class="col-6" id="userData">{nombre}</p>
         <p class="col-6" id="userLabel">Email: </p><p class="col-6" id="userData">{correo}</p>
         <p class="col-6" id="userLabel">Nº De Compra: </p><p class="col-6" id="userData">{_id}</p>
         <p class="col-6" id="userLabel">Pendiente: </p><p class="col-6" id="userData">{pending?"SI":"NO"}</p>
         <p class="col-6" id="userLabel">Procesado: </p><p class="col-6" id="userData">{processing?"SI":"NO"}</p>  <button class="col-1" onClick={handleSubmitProcesado}>Si/No</button>
         <p class="col-6" id="userLabel">Recibido: </p><p class="col-6" id="userData">{received?"SI":"NO"}</p> <button class="col-1" onClick={handleSubmitRecibido}>Si/No</button>
         <p class="col-6" id="userLabel">Cancelado: </p><p class="col-6" id="userData">{canceled?"si":"NO"}</p><button class="col-1" onClick={handleSubmitCancelado}>Si/No</button>
         <p class="col-6" id="userLabel">Precio Total: </p><p class="col-6" id="userData">{totalPayable}</p>
         <p class="col-6" id="userLabel">Fecha y Hora: </p><p class="col-6" id="userData">{facheyhora.split('T')[0]+ " / " + facheyhora.split('T')[1].split('.')[0]}</p>
         </div>

         
     </div>
    
  )
}