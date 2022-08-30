import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { complements } from "../action";
import '../styles/Bases.css'


export function Complement () {
    const allcomplements= useSelector(state=>state.complements)
    const dispatch= useDispatch()
    console.log(allcomplements)
        useEffect(() => {
            dispatch(complements())
        }, [dispatch])
  return (
  <div>
    <h3 id="h3-bases">ELIGE TUS COMPLEMENTOS</h3>
<div id="contain-bases">
            {
             allcomplements?.map(e=>(
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