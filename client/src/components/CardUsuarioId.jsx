import { Link } from "@mui/material"
import React from "react"
import "../styles/CardUsuarioId.css"



export default function CardUsuariosId({ firstName,lastName,email,phone,adress,activo,admin}){
  return (
    
     <div id="usuarioDetailMain" className="container">
      <div class="row">

         <div class="row"  id="pencilContent">
         <button id="pencilB" type='button'><i id="pencil" class="bi bi-pencil"></i></button>
         </div> 
         <p class="col-6" id="userLabel">Nombre: </p><p class="col-6" id="userData">{firstName}</p>
         <p class="col-6" id="userLabel">Apellido: </p><p class="col-6" id="userData">{lastName}</p>
         <p class="col-6" id="userLabel">Email: </p><p class="col-6" id="userData">{email}</p>
         <p class="col-6" id="userLabel">Telefono: </p><p class="col-6" id="userData">{phone}</p>
         <p class="col-6" id="userLabel">Direccion: </p><p class="col-6" id="userData">{adress}</p>
         <p class="col-6" id="userLabel">Admin: </p><p class="col-6" id="userData">{admin?"Si":"No"}</p>
         <p class="col-6" id="userLabel">Activo: </p><p class="col-6" id="userData">{activo?"Si":"No"}</p>
         </div>
         
     </div>
  )
}