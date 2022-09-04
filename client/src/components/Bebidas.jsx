import React from "react";
import img from '../images/bolsa.png'
import '../styles/Bebidas.css'


export const Bebidas = ({id,image,name,price,select}) =>
{

  return (
    <div class="contain-bases">

          <div key={id} id="contain-bases-card">
            <label class="checkeable">
              <img id="img-bases" src={image} alt={name} />
              <p>US$ {price}</p>
            <button type='button' className='btn-bolsa' name={name} value='selecciona' onClick={select}>
            <img className='img-bolsa' src={img} alt="bolsa" /></button>
            </label>
            <h2 id="h2-bases">{name?.toUpperCase()}</h2>
          </div>

    </div>

  )
}

export default Bebidas