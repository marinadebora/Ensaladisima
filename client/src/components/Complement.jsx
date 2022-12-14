import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { useLocalStorage } from "../useLocalStorage";
import '../styles/Bases.css'


export function Complement()
{
  const [complement, setComplement] = useLocalStorage('complement',[])
    const allcomplements = useSelector(state => state.complementsFilter)
    let [form, setForm] = useState({
        complements: []
      
    
      })
  
      let handleChange = (event) =>
      {
        event.preventDefault()
    if(event.target.value!==''){

      setForm({
        ...form,
        complements: [...form.complements, event.target.value],
    
      })
      setComplement([...form.complements,event.target.value])
    }
    console.log(complement)
    }
    
    
      const handleDelete = (event) =>
      {
        setForm({
          ...form,
          complements: form.complements.filter(e => e !== event)
        })
        setComplement([...form.complements.filter(e => e !== event)])
      }
      if(complement.length===0){
        localStorage.removeItem('complement')
      }
    
      return (
    
    <div>
          <div id="checkboxContent" className="contain-bases" >
           
            <h3 id="h3-bases">ELIGE TUS COMPLEMENTOS</h3>
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
              <option value="">seleccione un máximo de 3 complementos</option>
                {
                  allcomplements?.map(e => (
                  <option name={e.name} value={e.name}>{e.name}</option>
                ))
                }
              </select>
             
              {form.complements?.map(e =>
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