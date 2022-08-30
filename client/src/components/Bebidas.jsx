import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { beverages } from "../action";
import '../styles/Bases.css'





export const Bebidas= ()=> {

  const allBeverages= useSelector(state=>state.beverages)
  const dispatch= useDispatch()
  console.log(allBeverages)
      useEffect(() => {
          dispatch(beverages())
      }, [dispatch])
  return (
    <div id="contain-bases">
     
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