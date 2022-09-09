import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { useLocalStorage } from "../useLocalStorage";
import '../styles/Bases.css'


export function Complement()
{
  const [complement, setComplement] = useLocalStorage('complement',[])
    const allcomplements = useSelector(state => state.complements)
    let [form, setForm] = useState({
        complements: []
      
    
      })
  
      let handleChange = (event) =>
      {
        event.preventDefault()
    
        setForm({
          ...form,
          complements: [...form.complements, event.target.value],
      
        })
        setComplement([...form.complements,event.target.value])
      }
    
    
      const handleDelete = (event) =>
      {
        setForm({
          ...form,
          complements: form.complements.filter(e => e !== event)
        })
        console.log(complement)
      }
    
      return (
    
    <div>
          <div id="checkboxContent" className="contain-bases" >
           
            <h3 id="h3-bases">ELIGE TUS COMPLEMENTOS (3)</h3>
              {
              allcomplements?.map(e => (
                <div id="contain-bases-card" key={e._id}>
                  <label class="checkeable">
                    <img id="img-bases" src={e.image} alt={e.name} />
                  </label>
                  <h2 id="h2-bases">{e.name.toUpperCase()}</h2>
                </div>
              ))
            }
              <select onChange={(e) => handleChange(e)} disabled={form.complements?.length === 3 && true} class="form-select" aria-label="Default select example">
              <option value=""disabled>seleccione</option>
                {
                  allcomplements?.map(e => (
                  <option name={e.name} value={e.name}>{e.name}</option>
                ))
                }
              </select>
             
              {form.complements?.map(e =>
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