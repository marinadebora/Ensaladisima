import React from "react"
import "../styles/CardComandaDetail.css"



export default function CardDetalleHistorialBebidas({bebidaName,bebidaPrecio}){
  return (
    
      <div id="mainContainerDetalleHistoria" className="container">
      <div class="row">

         <p class="col-6" id="productLabel">Bebida: </p><p class="col-6" id="dataLabel">{bebidaName}</p>
         <p class="col-6" id="productLabel">Precio: </p><p class="col-6" id="dataLabel">u$s {bebidaPrecio}</p>
         
         </div>
         
     </div>
    
  )
}