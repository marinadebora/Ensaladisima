import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { sauces } from "../action";
import '../styles/Bases.css'
import '../styles/Bases.css'

export function Sauce () {
    const allSauces= useSelector(state=>state.sauces)
    const dispatch= useDispatch()
    console.log(allSauces)
        useEffect(() => {
            dispatch(sauces())
        }, [dispatch])
  return (
  <div>
    <h3 id="h3-bases">ELIGE TUS SALSAS</h3>
<div id="contain-bases">
            {
             allSauces?.map(e=>(
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
