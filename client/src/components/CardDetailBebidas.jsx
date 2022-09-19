import React from "react"
import "../styles/CardUsuarioId.css"



export default function CardDetalleHistorialBebidas({bebidaName,bebidaPrecio}){
  return (
    
      <div id="usuarioDetailMain" className="container">
      <div class="row">

         <div class="row"  id="pencilContent">
         <button id="pencilB" type='button'><i id="pencil" class="bi bi-pencil"></i></button>
         </div> 
         <p class="col-6" id="userLabel">Bebida: </p><p class="col-6" id="userData">{bebidaName}</p>
         <p class="col-6" id="userLabel">Precio: </p><p class="col-6" id="userData">💲 {bebidaPrecio}</p>
         
         </div>
         
     </div>
    
  )
}