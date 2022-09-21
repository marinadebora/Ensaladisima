import React from "react"
import "../styles/CardComandaDetail.css"



export default function CardDetalleHistorial({name,base,protein,sauce,complement,topping,price}){
  return (
    <div id="mainContainerDetalleHistoria" className="container">

      <div class="row">
        
         <p class="col-6" id="productLabel">Ensaladas: </p><p class="col-6" id="dataLabel">{name}</p>
         <p class="col-6" id="productLabel">Bases: </p><p class="col-6" id="dataLabel">{base}</p>
         <p class="col-6" id="productLabel">Proteinas: </p><p class="col-6" id="dataLabel">{protein}</p>
         <p class="col-6" id="productLabel">Salsas: </p><p class="col-6" id="dataLabel">{sauce}</p>
         <p class="col-6" id="productLabel">Complementos: </p><p class="col-6" id="dataLabel">{complement}</p>
         <p class="col-6" id="productLabel">Toppings: </p><p class="col-6" id="dataLabel">{topping}</p>
         <p class="col-6" id="productLabel">Precio: </p><p class="col-6" id="dataLabel">u$s {price}</p>
         </div>
         
     </div>
    
  )
}