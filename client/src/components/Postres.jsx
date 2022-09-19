import React from "react";
import '../styles/Bases.css';






const Postres = ({id,image,name,price,stock,select}) => {

return (

        <div key={id} id="contain-bases-card">
          <label class="checkeable">
          {
            stock? <><img id="img-bases" src={image} alt={name} />
          <p id="priceMenu">US$ {price}</p>
          <button type='button' className='btn-bolsa' name={name} value='selecciona' onClick={select}>
          <i id="buttoonPlus" class="bi bi-check-square-fill"></i>
          </button>
          </>
            
            :
              <><img id="img-bases" src={image} alt={name} />
                <img id="sinStock" src='https://res.cloudinary.com/deqbqghhq/image/upload/v1663334638/samples/sinStcock_zantpc.png' alt='sin stock'/>
            <p id="priceMenu">US$ {price}</p>
          <button type='button' className='btn-bolsa' disabled name={name} value='selecciona' onClick={select}>
          <i id="buttoonPlus" class="bi bi-check-square-fill"></i>
          </button></>
              
                 
          }
                
          </label>
          <h2 id="h2-bases">{name?.toUpperCase()}</h2>
        </div>


)
}

export default Postres