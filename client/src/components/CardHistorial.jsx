import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { historialId, putCancelado, putProcesado, putRecibido } from "../action";
import "../styles/CardHistorial.css"



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
    
      <div id="ordereMainContainer" className="container">

      <div class="row">
           
         <div class="row"  id="pencilContent">
         <button id="pencilB" type='button'><i id="pencil" class="bi bi-printer"></i></button>
         </div> 
         <div class="row">
            <div class="col">
            <p class="col" id="userLabelOrder">Fecha y Hora: </p><p class="col" id="userDataOrder">{facheyhora.split('T')[0]+ " / " + facheyhora.split('T')[1].split('.')[0]}</p>
            </div>
            <div class="col">
            <p class="col" id="userLabelOrder">Nº De Compra: </p><p class="col" id="userDataOrder">{_id}</p>
            </div>
         </div>
         
         <div class="row">
            <div class="col">
            <p class="col-6" id="userLabelOrder">Nombre y Apellido: </p><p class="col-6" id="userDataOrder">{nombre}</p>
            </div>
            <div class="col">
            <p class="col-6" id="userLabelOrder">Email: </p><p class="col-6" id="userDataOrder">{correo}</p>
            </div>
         </div>

          <div class="row">
         <div id="statesContent"class="col-4">
         
         <div class="row">
         <p class="col-4" id="stateLabel">Pendiente: </p>
         <p class="col-4" id="stateData">{pending?"SI":"NO"}</p>
         </div>
         <div class="row">
         <p class="col-4" id="stateLabel">En proceso: </p>
         <p class="col-3" id="stateData">{processing?<p id="psi">SI<i class="bi bi-check-lg" id="check"></i></p>:"NO"}</p>

         <button id="buttonState" class="col-5" onClick={handleSubmitProcesado}>Si/No</button>
         </div>
         
         <div class="row">
         <p class="col-4" id="stateLabel">Entregado: </p>
         <p class="col-3" id="stateData">{received?<p id="psi">SI<i class="bi bi-check-lg" id="check"></i></p>:"NO"}</p>
         <button id="buttonState" class="col-5" onClick={handleSubmitRecibido}>Si/No</button>
         </div>

         <div class="row">
          <p class="col-4" id="stateLabel">Cancelado: </p>
          <p class="col-3" id="stateData">{canceled?<p id="psi">SI<i class="bi bi-check-lg" id="check"></i></p>:"NO"}</p>
          <button id="buttonState" class="col-5" onClick={handleSubmitCancelado}>Si/No</button>
          </div>

        </div>

          <div class="col">
            <Link  class="row" id="buttonDetailContent" to={`/detalleHistorial/${_id}`}> <button id="buttonDetail">Detalle </button></Link>
            <div id="priceContent"class="row">
              <p class="col-5" id="priceLabel">Precio Total: </p><p class="col-4" id="priceData">u$s {totalPayable}</p>
            </div>
          </div>
        </div>

         
        </div>

         

         
     </div>
    
  )
}