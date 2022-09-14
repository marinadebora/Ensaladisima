import React from "react"
import { Link } from "react-router-dom"
import "../styles/CardSimple.css"



export default function CardUsuarios({ name,email,phone,adress,key,_id,}){
  return (

    <div id="cardSimpleFrame" key={key}>
        <Link id="linkCardSimple" to={`/adminId/${_id}`}>
        <h3 id="ensaladaNombreEdit">Nombre: {name}</h3>
         <h3 id="ensaladaNombreEdit">Email: {email}</h3>
         <h3 id="ensaladaNombreEdit">Telefono: {phone}</h3>
         <h3 id="ensaladaNombreEdit">Direccion: {adress}</h3>

        </Link>
     </div>
  )
}

