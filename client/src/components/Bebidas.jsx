import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { beverages } from "../action";
/* import "../styles/Card.css"; */
import '../styles/Bases.css'





export const Bebidas= ()=> {
    //arreglo hardcodeado hasta qu esten listas las rutas depues borrar
  const allBeverages=[
    {
        "name": "cerveza Session-ale",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456496/bebidas/cerveza-session_ale_rpjgwi.png"
    },
    {
        "name": "cerveza Speed-metal",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456496/bebidas/cerveza-speed_metal_dhklob.png"   
    },
    {
        "name": "cerveza Launchpad",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456496/bebidas/cerveza-launchpad_zl1of9.png"
    },
    {
        "name": "cerveza Theread-the-needle",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456496/bebidas/cerveza-theread-the-needle_ijaplx.png" 
    },
    {
        "name": "cerveza Icefields",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456496/bebidas/cerveza-icefields_cbzs4g.png" 
    },
    {
        "name": "cerveza Blower",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456496/bebidas/cerveza-blower_pow_apymdm.png" 
    },{
        "name": "agua gificada",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456515/bebidas/agua-gificada_dxbutb.png"
    },
    {
        "name": "agua mineral",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456515/bebidas/agua_v347lb.png" 
    },
    {
        "name": "vino Chañamuyo",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456514/bebidas/vino-Cha%C3%B1amuyo_xbvohj.png" 
    },
    {
        "name": "vino Lamadrid",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456515/bebidas/vino-Lamadrid_mmapdx.png" 
    },
    {
        "name":"vino Enamore",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456515/bebidas/vino-Enamore_xqjvhh.png"
    },
    {
        "name":"vino Tapiz",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456516/bebidas/vino-Tapiz_evhalu.png"
    },
    {
        "name":"vino Tomero",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456516/bebidas/vino-Tomero_erir1t.png"
    },
    {
        "name":"vino BuenAlma",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456516/bebidas/vino-BuenAlma_esyho1.png"
    },
    {
        "name":"gaseosa Coca-cola",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456517/bebidas/gaseosa-coca-cola_x9igr2.png"
    },
    {
        "name":"gaseosa Fanta",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456517/bebidas/gaseosa-fanta_ec4hps.png"
    },
    {
        "name":"gaseosa Sprite",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456517/bebidas/gaseosa-sprite_u49chs.png"
    },
    {
        "name":"jugo de kiwi",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456516/bebidas/jugo-kiwi_hujb3s.png"
    },
    {
        "name":"jugo de naranja y mango",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456517/bebidas/jugo-Naranja-Mango_kh7ipp.png"
    },
    {
        "name":"jugo de frutilla",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456515/bebidas/jugo-frutilla_wyzngi.png"
    },
    {
        "name":"jugo naranja",
        "image":"https://res.cloudinary.com/deqbqghhq/image/upload/v1661456515/bebidas/jugo-naranja_v1noyj.png"
    }
   

]
 /*  const allBeverages= useSelector(state=>state.beverages)
  const dispatch= useDispatch()
  console.log(allBeverages)
      useEffect(() => {
          dispatch(beverages())
      }, [dispatch]) */
  return (
    <div id="contain-bases"/*  id='bebidaMarco' */>
     
       {
             allBeverages?.map(e=>(
                <div id="contain-bases-card">
                    <label class="checkeable">
             <input type="checkbox" name="cap1"/>
            <img id="img-bases" src={e.image} alt={e.name}/> 
            </label>
            <h2 id="h2-bases">{e.name?.toUpperCase()}</h2> 
            </div>     
             )) 
            }
       </div>
  
  )
}

export default Bebidas