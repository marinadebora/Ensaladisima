import React from "react";
import '../styles/Bebidas.css'
import '../styles/Bases.css'


export const Bebidas = ({id,image,name,price,select}) =>
{

  return (
    

            <div key={id} id="contain-bases-card">
              <label class="checkeable">
                <img id="img-bases" src={image} alt={name} />
                <p id="priceMenu">US$ {price}</p>
              <button type='button' className='btn-bolsa' name={name} value='selecciona' onClick={select}>
              <i id="buttoonPlus" class="bi bi-check-square-fill"></i>
              </button>
              </label>
              <h2 id="h2-bases">{name?.toUpperCase()}</h2>
            </div>

    

  )
}

export default Bebidas