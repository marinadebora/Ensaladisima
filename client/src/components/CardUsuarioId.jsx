
import React from "react"
import "../styles/CardUsuarioId.css"



export default function CardUsuariosId({ firstName,lastName,email,phone,adress,activo,admin,purchaseHistory}){
  return (
    
     <div id="usuarioDetailMain" className="container">
      <div class="row">

         <div class="row"  id="pencilContent">
         <button id="pencilB" type='button'><i id="pencil" class="bi bi-pencil"></i></button>
         </div> 
         <p class="col-6" id="userLabel">Nombre: </p><p class="col-6" id="userData">{firstName}</p>
         <p class="col-6" id="userLabel">Apellido: </p><p class="col-6" id="userData">{lastName}</p>
         <p class="col-6" id="userLabel">Email: </p><p class="col-6" id="userData">{email}</p>
         <p class="col-6" id="userLabel">Teléfono: </p><p class="col-6" id="userData">{phone}</p>
         <p class="col-6" id="userLabel">Dirección: </p><p class="col-6" id="userData">{adress}</p>
         <p class="col-6" id="userLabel">Admin: </p><p class="col-6" id="userData">{admin?"Si":"No"}</p>
         <p class="col-6" id="userLabel">Activo: </p><p class="col-6" id="userData">{activo?"Si":"No"}</p>
        { purchaseHistory?<div>
            <p class="col-6" id="userLabel">Última Compra: </p><p class="col-6" id="userData"></p>
         <ul>
            <li>
            <p class="col-6" id="userLabel">Fecha y Hora: </p><p class="col-6" id="userData">{purchaseHistory.facheyhora.split('T')[0]+" / "+ purchaseHistory.facheyhora.split('T')[1].split('.')[0]}</p>
            </li>
            <li>
            <p class="col-6" id="userLabel">Estado de la compra: </p><p class="col-6" id="userData">{purchaseHistory.canceled?"cancelado":purchaseHistory.pending?"Pendiente":purchaseHistory.recieved?"Recibido":purchaseHistory.processing?"En proceso":""}</p>
            </li>
            <li>
               <p><p class="col-6" id="userLabel">Total De La Compra: </p><p class="col-6" id="userData">{purchaseHistory.totalPayable}</p></p>
            </li>
         </ul>
         </div>:""}
         
         </div>
         
     </div>
  )
}