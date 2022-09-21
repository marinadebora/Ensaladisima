import React, { useState } from "react";
import {  useSelector } from 'react-redux'
import { useLocalStorage } from "../useLocalStorage";
import '../styles/Bases.css'

export function Sauce () {
    const allSauces= useSelector(state=>state.saucesFilter)
    const [salsa, setSalsa] = useLocalStorage('salsa',[])
    let [form, setForm] = useState({
        sauces: []
      
    
      })
  
      let handleChange = (event) =>
      {
        event.preventDefault()
        if(event.target.value!==''){
          setForm({
          ...form,
          sauces: [...form.sauces,event.target.value ],
      
        })
        setSalsa([...form.sauces,event.target.value] )
        console.log(salsa)
      }
      }
    
      const handleDelete = (event) =>
      {
        
        setForm({
          ...form,
          sauces: form.sauces.filter(e => e !== event)
        })
        setSalsa([...form.sauces.filter(e => e !== event)] )
 
      }
   
      return (
    
    <div>
          <div id="checkboxContent" className="contain-bases" >
           
            <h3 id="h3-bases">ELIGE TUS SALSAS</h3>
              {
              allSauces?.map(e => (
                <div id="contain-bases-card" key={e._id}>
                  <label class="checkeable">
                    <img id="img-bases" src={e.image} alt={e.name} />
                  </label>
                  <h2 id="h2-bases">{e.name.toUpperCase()}</h2>
                </div>
              ))
            }
              <select onChange={(e) => handleChange(e)} disabled={form.sauces?.length === 4 && true} class="form-select" aria-label="Default select example">
              <option value="">seleccione un máximo de 4 salsas</option>
                {
                  allSauces?.map(e => (
                  <option name={e.name} value={e.name}>{e.name}</option>
                ))
                }
              </select>
             
              {form.sauces?.map(e =>
                 <div id="buttonDeleteMenuContainer">
                  <h3 class="buttonDeleteMenu">{e}
                    <button class="buttonDeleteMenuX" onClick={() => handleDelete(e)} >X</button>
                  </h3>
                </div>
              )} 
    </div>
    </div>
    
      );
};