import React from "react"
import "../styles/CardComandaDetail.css"



export default function CardDetalleHistorialPostres({postresName,postresPrecio}){
  return (
    
    <div id="mainContainerDetalleHistoria" className="container">

      <div class="row">

         <p class="col-6" id="productLabel">Postre: </p><p class="col-6" id="dataLabel">{postresName}</p>
         <p class="col-6" id="productLabel">Precio: </p><p class="col-6" id="dataLabel">u$s {postresPrecio}</p>
         
         </div>
         
     </div>
    
  )
}