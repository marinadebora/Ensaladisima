import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { bases } from "../action";
import '../styles/Bases.css'



export function  Bases () {
const allBases= useSelector(state=>state.bases)
const dispatch= useDispatch()
console.log(allBases)
    useEffect(() => {
        dispatch(bases())
    }, [dispatch])


  return(
    <div className="contain-total">
        
        <h3 id="h3-bases">ELIGE TU BASE</h3>
     <div id="contain-bases">
            {
             allBases?.map(e=>(
                <div id="contain-bases-card">
                <label class="checkeable">
                    <img id="img-bases" src={e.image} alt={e.name}/> 
                </label>
                    <input type="checkbox" name="cap1"/>
            <h2 id="h2-bases">{e.name.toUpperCase()}</h2> 
            </div>     
             )) 
            }
           
       
        
     </div>
     </div>
     );
};


