import React, { useState } from "react";
import {  useSelector } from 'react-redux'
import { useLocalStorage } from "../useLocalStorage";

import '../styles/Bases.css'

export function Toppings () {
    const allToppings= useSelector(state=>state.toppings)
    const [topping, setTopping] = useLocalStorage('topping',[])

    let [form, setForm] = useState({
        toppings: []
      
    
      })
  
      let handleChange = (event) =>
      {
        event.preventDefault()
        if(event.target.value!==''){

        setForm({
          ...form,
          toppings: [...form.toppings, event.target.value],
      
        })
        setTopping([...form.toppings,event.target.value])
        console.log(topping)
      }
      }
    
      const handleDelete = (event) =>
      {
        setForm({
          ...form,
          toppings: form.toppings.filter(e => e !== event)
        })
        setTopping([...form.toppings.filter(e => e !== event)])
      }
    
      return (
    
    <div>
          <div id="checkboxContent" className="contain-bases" >
           
            <h3 id="h3-bases">ELIGE TUS TOPPINGS</h3>
              {
              allToppings?.map(e => (
                <div id="contain-bases-card" key={e._id}>
                  <label class="checkeable">
                    <img id="img-bases" src={e.image} alt={e.name} />
                  </label>
                  <h2 id="h2-bases">{e.name.toUpperCase()}</h2>
                </div>
              ))
            }
              <select onChange={(e) => handleChange(e)} disabled={form.toppings?.length === 5 && true} class="form-select" aria-label="Default select example">
              <option value="">seleccione un máximo de 5 toppings</option>
                {
                  allToppings?.map(e => (
                  <option name={e.name} value={e.name}>{e.name}</option>
                ))
                }
              </select>
             
              {form.toppings?.map(e =>
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