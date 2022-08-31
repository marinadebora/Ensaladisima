import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { desserts } from "../action";
/* import "../styles/Card.css"; */
import '../styles/Bases.css'






const Postres = () => {
  //arreglo hardcodeado hasta qu esten listas las rutas depues borrar
  const allDesserts=[
    {
        "name":"budin de pan",
        "image": "https://res.cloudinary.com/deqbqghhq/image/upload/v1661462698/bebidas/postres/budin-pan_nngemg.png" 
    },
    {
        "name":"blueberry Cheesecake",
        "image": "https://res.cloudinary.com/deqbqghhq/image/upload/v1661462698/bebidas/postres/blueberry_-Cheesecake_lnxv9s.png" 
    },
    {
        "Nombre":"pastel de cocolate",
        "image": "https://res.cloudinary.com/deqbqghhq/image/upload/v1661462698/bebidas/postres/pastel-cocolate_obwwhp.png" 
    },
    {
        "name":"latte machiato",
        "image": "https://res.cloudinary.com/deqbqghhq/image/upload/v1661462698/bebidas/postres/latte-machiato_mw4y75.png" 
    },
    {
        "name":"tarta de queso con fresa",
        "image": "https://res.cloudinary.com/deqbqghhq/image/upload/v1661462700/bebidas/postres/tarta-queso-fresa_gbsixl.png" 
    }
]
   /*  const allDesserts= useSelector(state=>state.desserts)
  const dispatch= useDispatch()
  console.log(allDesserts)
      useEffect(() => {
          dispatch(desserts())
      }, [dispatch]) */
  return (
    <div id="contain-bases"/* id='postreMarco' */>
       {
             allDesserts?.map(e=>(
                <div id="contain-bases-card">
                    <label class="checkeable">
            <img id="img-bases" src={e.image} alt={e.name}/> 
            </label>
             <input type="checkbox" name="cap1"/>
            <h2 id="h2-bases">{e.name?.toUpperCase()}</h2> 
            </div>     
             )) 
            }
        
       
    </div>
  )
}

export default Postres