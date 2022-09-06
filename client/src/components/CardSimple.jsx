import React from "react"
import { Link } from "react-router-dom"


export default function CardSimple({ name, image,id }) {
  return (

    <div>
        <Link to={`/adminedit/${id}`}>
        <img src={image} alt="img" id="ensaladaImagen"/>
        <h3>Nombre: {name}</h3>
        <h3>ID:{id}</h3>
        </Link>
    
    </div>
  )
}