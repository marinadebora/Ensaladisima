import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { desserts } from "../action";
import '../styles/Bases.css'






const Postres = () => {

    const allDesserts= useSelector(state=>state.desserts)
  const dispatch= useDispatch()
  console.log(allDesserts)
      useEffect(() => {
          dispatch(desserts())
      }, [dispatch])
  return (
    <div id="contain-bases">
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