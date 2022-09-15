import React from "react"
import { Link } from "react-router-dom"
import "../styles/CardUsuario.css"



export default function CardUsuarios({ name,email,phone,adress,key,_id,}){
  return (

    <div class="container" key={key}>
        <Link class="row" id="cardSimpleFrame1" to={`/adminId/${_id}`}>
          <p class="col-1" id="ensaladaNombreEdit"><i id="buttoonPlus" class="bi bi-eye"></i></p>
          <h3 class="col" id="ensaladaNombreEdit">{name}</h3>
          <h3 class="col" id="ensaladaNombreEdit">{email}</h3>
          <h3 class="col" id="ensaladaNombreEdit">{phone}</h3>
          <h3 class="col" id="ensaladaNombreEdit">{adress}</h3>
        </Link>
     </div>
  )
}

