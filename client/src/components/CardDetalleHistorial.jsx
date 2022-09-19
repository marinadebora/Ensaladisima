import React from "react"
import "../styles/CardUsuarioId.css"



export default function CardDetalleHistorial({name,base,protein,sauce,complement,topping,price}){
  return (
    
      <div id="usuarioDetailMain" className="container">
      <div class="row">

         <div class="row"  id="pencilContent">
         <button id="pencilB" type='button'><i id="pencil" class="bi bi-pencil"></i></button>
         </div> 
         <p class="col-6" id="userLabel">Ensaladas: </p><p class="col-6" id="userData">{name}</p>
         <p class="col-6" id="userLabel">Bases: </p><p class="col-6" id="userData">{base}</p>
         <p class="col-6" id="userLabel">Proteinas: </p><p class="col-6" id="userData">{protein}</p>
         <p class="col-6" id="userLabel">Salsas: </p><p class="col-6" id="userData">{sauce}</p>
         <p class="col-6" id="userLabel">Complementos: </p><p class="col-6" id="userData">{complement}</p>
         <p class="col-6" id="userLabel">Toppings: </p><p class="col-6" id="userData">{topping}</p>
         <p class="col-6" id="userLabel">Precio: </p><p class="col-6" id="userData">💲 {price}</p>
         </div>
         
     </div>
    
  )
}