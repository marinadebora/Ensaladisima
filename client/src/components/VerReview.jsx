import React from "react";
import '../styles/VerReview.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReview } from "../action";

export const VerReview = () => {
  const comentarios=useSelector(state=>state.comentarios)
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getReview())
  },[dispatch])

  return(
    
  <div className="contenedorReview">
      
    {
      
      comentarios?.map(e=>(
        <div id="contenedorReview1">
        <h3 >{e.firstName} {e.lastName}  </h3>
        {
          e?.estrellas=== 1?<li className="estrellas">★</li>:e?.estrellas=== 2
          ?<li className="estrellas">★★</li>:e?.estrellas=== 3
          ?<li className="estrellas">★★★</li>:e?.estrellas=== 4
          ?<li className="estrellas">★★★★</li>:e?.estrellas=== 5
          &&<li className="estrellas">★★★★★</li>
        }
        <p className="pReview">{e.comentarios}</p>
        </div>
      ))
    }
  </div>
  
  )
};
