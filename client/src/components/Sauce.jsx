import React, { useState } from "react";
import {  useSelector } from 'react-redux'
import { useLocalStorage } from "../useLocalStorage";
import '../styles/Bases.css'

export function Sauce () {
    const allSauces= useSelector(state=>state.sauces)
    const [/* salsa, */ setSalsa] = useLocalStorage('salsa',[])
    let [form, setForm] = useState({
        sauces: []
      
    
      })
  
      let handleChange = (event) =>
      {
        event.preventDefault()
    let info=event.target.value
        setForm({
          ...form,
          sauces: [...form.sauces,info ],
      
        })
        setSalsa([...form.sauces,info] )
      
      }
    
    
      const handleDelete = (event) =>
      {
        
        setForm({
          ...form,
          sauces: form.sauces.filter(e => e !== event)
        })
        
      }
   
      return (
    
    <div>
          <div id="checkboxContent" className="contain-bases" >
           
            <h3 id="h3-bases">ELIGE TUS SALSAS (4)</h3>
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
              <option value="">seleccione</option>
                {
                  allSauces?.map(e => (
                  <option name={e.name} value={e.name}>{e.name}</option>
                ))
                }
              </select>
             
              {form.sauces?.map(e =>
                <div >
                  <h5 class="badge text-bg-secondary">{e}
                    <button class="btn btn-outline-success" onClick={() => handleDelete(e)} >X</button>
                  </h5>
                </div>
              )} 
    </div>
    </div>
    
      );
};