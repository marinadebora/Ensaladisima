import React from "react"
import "../styles/CardUsuarioId.css"



export default function CardDetalleHistorialPostres({postresName,postresPrecio}){
  return (
    
      <div id="usuarioDetailMain" className="container">
      <div class="row">

         <div class="row"  id="pencilContent">
         <button id="pencilB" type='button'><i id="pencil" class="bi bi-pencil"></i></button>
         </div> 
         <p class="col-6" id="userLabel">Postre: </p><p class="col-6" id="userData">{postresName}</p>
         <p class="col-6" id="userLabel">Precio: </p><p class="col-6" id="userData">💲 {postresPrecio}</p>
         
         </div>
         
     </div>
    
  )
}