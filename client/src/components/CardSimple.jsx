import React from "react"
import { Link } from "react-router-dom"


export default function CardSimple({ name, image,_id }) {
  return (

    <div>
        <Link to={`/editbases/${_id}`}>
        <img src={image} alt="img" id="ensaladaImagen"/>
        <h3>Nombre: {name}</h3>
        <h3>ID:{_id}</h3>
        </Link>
    
    </div>
  )
}