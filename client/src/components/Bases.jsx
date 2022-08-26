import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { bases } from "../action";
import '../styles/Bases.css'
import ensaladaMediana from "../images/ensaladera.png";
import ensaladaGrande from "../images/ensaladera.png";


export function  Bases () {
const allBases= useSelector(state=>state.bases)
const dispatch= useDispatch()
console.log(allBases)
    useEffect(() => {
        dispatch(bases())
    }, [dispatch])


  return(
    <div>
        <h1 id="h1-bases">Crea tu ensalada</h1>
        <div id="tamaños">
          <h4 id="tamaño">Opciones de tamaño:</h4>
          <img src={ensaladaMediana} alt="img" id="ensaladaMediana" />
          <h5 id="tamañoPrecioM">Mediana: u$d 13</h5>
          <img src={ensaladaGrande} alt="img" id="ensaladaGrande" />
          <h5 id="tamañoPrecioG">Grande: u$d 15</h5>
        </div>
        <h3 id="h3-bases">ELIGE TU BASE</h3>
     <div id="contain-bases">
            {
             allBases?.map(e=>(
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


