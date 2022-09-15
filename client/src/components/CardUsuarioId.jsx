import React from "react"
import "../styles/CardSimple.css"



export default function CardUsuariosId({ firstName,email,phone,adress,activo,admin}){
  return (

    <div>
        <h3 >Nombre: {firstName}</h3>
         <h3 >Email: {email}</h3>
         <h3 >Telefono: {phone}</h3>
         <h3 >Direccion: {adress}</h3>
         <h3 >Admin: {admin?"Si":"No"}</h3>
         <h3 >Activo: {activo?"Si":"No"}</h3>
     </div>
  )
}