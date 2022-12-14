import React,{useState} from "react";
import { useSelector } from "react-redux";
import '../styles/Bases.css';
import { useLocalStorage } from "../useLocalStorage";




export function Bases()
{
  const [base, setBase] = useLocalStorage('bases',[])
  const [state, setstate] = useState(false)
  const allBases=useSelector(state=>state.basesFilter)
  let [form, setForm] = useState({
    bases: []
  })



  let handleChange = (event) =>
  {
    event.preventDefault()
    if(event.target.value!==''){

    setForm({
      ...form,
      bases: [...form.bases, event.target.value],
  
    })
    setBase([...form.bases, event.target.value])

    console.log(base)
  }
  }

  const handleDelete = (event) =>
  {
    setForm({
      ...form,
      bases: form.bases.filter(e => e !== event)
    })
    setBase([...form.bases.filter(e => e !== event)])
    setstate(true)
  }
  if(base?.length===0){
    localStorage.removeItem('bases')
  }
  

  return (

<div>
      <div id="checkboxContent" className="contain-bases" >
        <h3 id="h3-bases">ELIGE TUS BASES</h3>
          {
          allBases?.map(e => (
            <div id="contain-bases-card" key={e._id}>
              <label class="checkeable">
                <img id="img-bases" src={e.image} alt={e.name} />
              </label>
              <h2 id="h2-bases">{e.name.toUpperCase()}</h2>
            </div>
          ))
        }
          <select onChange={(e) => handleChange(e)} disabled={form.bases?.length === 2 && true} class="form-select" aria-label="Default select example">
            <option value="" >seleccione un máximo de 2 bases</option>
            {
              allBases?.map(e => (
              <option name={!state?e.name:''} value={e.name}>{e.name}</option>
            ))
            }
          </select>

          {form.bases?.map(e =>
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

