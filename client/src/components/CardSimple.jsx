import React from "react"
import { Link } from "react-router-dom"
import "../styles/CardSimple.css"



export default function CardSimple({ name, image,key,price,stock,id,activo}){
  return (

    <div id="cardSimpleFrame" key={key}>
        <Link id="linkCardSimple" to={`/adminedit/${id}`}>
        <img src={image} alt="img" id="ensaladaImagenEdit"/>
        <h3 id="ensaladaNombreEdit">Nombre: {name}</h3>
        {price? <h3 id="ensaladaNombreEdit">Price:$ {price}</h3> :<></>}
        {stock? <h3 id="ensaladaNombreEdit">Stock:{stock}</h3> :<></>}
        <br />
      
        <p>{activo === true?"a la venta":"no esta a la venta"}</p>
        </Link>
     </div>
  )
}