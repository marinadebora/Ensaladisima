import React from "react";
import '../styles/VerReview.css'
/* import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReview } from "../action"; */

export const VerReview = () => {
  /* const comentarios=useSelector(state=>state.comentarios)
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getReview())
  }) */
  let comentarios=[
    {
      firstName: 'homero',
      lastName: 'simpson',
      email: 'homerosimpson@gmail.com',
      estrellas: 4,
      comentarios: 'la atencion es muy buena falatria corregir errores en la app en la parte del carrito, lo demas todo bien'
    },
    {
      firstName: 'apu',
      lastName: 'nahasapeemapetilon',
      email: 'apunahasapeemapetilon@gmail.com',
      estrellas: 3,
      comentarios: 'la atencion es muy buena falatria corregir errores en la app en la parte del carrito, lo demas todo bien'
    },
    {
      firstName: 'ned',
      lastName: 'flanders',
      email: 'nedflanders@gmail.com',
      estrellas: 5,
      comentarios: 'la atencion es muy buena falatria corregir errores en la app en la parte del carrito, lo demas todo bien'
    },
    {
      firstName: 'pepe',
      lastName: 'gonzalez',
      email: 'pepegonzalez@gmail.com',
      estrellas: 1,
      comentarios: 'la atencion es muy buena falatria corregir errores en la app en la parte del carrito, lo demas todo bien'
    },
    {
      firstName: 'pepe',
      lastName: 'gonzalez',
      email: 'pepegonzalez@gmail.com',
      estrellas: 2,
      comentarios: 'la atencion es muy buena falatria corregir errores en la app en la parte del carrito, lo demas todo bien'
    },
    {
      firstName: 'pepe',
      lastName: 'gonzalez',
      email: 'pepegonzalez@gmail.com',
      estrellas: 3,
      comentarios: 'la atencion es muy buena falatria corregir errores en la app en la parte del carrito, lo demas todo bien'
    }
  ]
  return(
    
  <div className="contenedorReview">
    
    {
      comentarios?.map(e=>(
        <div>
        <h4 >{e.firstName} {e.lastName}  </h4>
        {
          e?.estrellas=== 1?<li className="estrellas">★</li>:e?.estrellas=== 2
          ?<li className="estrellas">★★</li>:e?.estrellas=== 3
          ?<li className="estrellas">★★★</li>:e?.estrellas=== 4
          ?<li className="estrellas">★★★★</li>:e?.estrellas=== 5
          &&<li className="estrellas">★★★★★</li>
        }
        <p className="pReview">{e.comentarios}</p>.
        </div>
      ))
    }
  </div>
  
  )
};
