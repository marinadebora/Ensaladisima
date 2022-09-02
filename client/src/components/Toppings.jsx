import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toppings } from "../action";
import '../styles/Bases.css'

export function Toppings () {
    const allToppings= useSelector(state=>state.toppings)
    const dispatch= useDispatch()
        useEffect(() => {
            dispatch(toppings())
        }, [dispatch])
  return (
  <div>
    <h3 id="h3-bases">ELIGE TUS TOPPINGS</h3>
<div className="contain-bases">
            {
             allToppings?.map(e=>(
                <div id="contain-bases-card">
                    <label class="checkeable">
             <input type="checkbox" name="cap1"/>
            <img id="img-bases" src={e.image} alt={e.name}/> 
            </label>
            <h2 id="h2-bases">{e.name.toUpperCase()}</h2> 
            </div>     
             )) 
            }
           
       
        
     </div>
  </div>
  );
};
