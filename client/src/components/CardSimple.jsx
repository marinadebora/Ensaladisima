import React from "react"
import { Link } from "react-router-dom"


export default function CardSimple({ name, image,key,price,stock,id}){
  return (

    <div key={key}>
        <Link to={`/adminedit/${id}`}>
        <img src={image} alt="img" id="ensaladaImagen"/>;
        <h3>Nombre: {name}</h3>;
        {price? <h3>Price:$ {price}</h3> :<></>};
        {stock? <h3>Stock:$ {stock}</h3> :<></>};
        </Link>
     </div>
  )
};