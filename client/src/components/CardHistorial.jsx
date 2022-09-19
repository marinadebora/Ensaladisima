import React from "react"
import { Link } from "react-router-dom"
import "../styles/CardUsuarioId.css"



export default function CardHistorial({canceled,pending,_id,processing,received,totalPayable,facheyhora}){
  return (
    
      <div id="usuarioDetailMain" className="container">
          <Link class="row" id="cardSimpleFrame1" to={`/detalleHistorial/${_id}`}>
      <div class="row">

         <div class="row"  id="pencilContent">
         <button id="pencilB" type='button'><i id="pencil" class="bi bi-pencil"></i></button>
         </div> 
         <p class="col-6" id="userLabel">Pendiente: </p><p class="col-6" id="userData">{pending?"SI":"NO"}</p>
         <p class="col-6" id="userLabel">Procesado: </p><p class="col-6" id="userData">{processing?"SI":"NO"}</p>
         <p class="col-6" id="userLabel">Recibido: </p><p class="col-6" id="userData">{received?"SI":"NO"}</p>
         <p class="col-6" id="userLabel">Cancelado: </p><p class="col-6" id="userData">{canceled?"si":"NO"}</p>
         <p class="col-6" id="userLabel">Nº De Compra: </p><p class="col-6" id="userData">{_id}</p>
         <p class="col-6" id="userLabel">Precio Total: </p><p class="col-6" id="userData">{totalPayable}</p>
         <p class="col-6" id="userLabel">Fecha y Hora: </p><p class="col-6" id="userData">{facheyhora.split('T')[0]+ " / " + facheyhora.split('T')[1].split('.')[0]}</p>
         </div>
     </Link>
         
     </div>
    
  )
}