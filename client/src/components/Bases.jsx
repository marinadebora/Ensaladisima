import React,{useState} from "react";
import { useSelector } from "react-redux";
import '../styles/Bases.css';
import { useLocalStorage } from "../useLocalStorage";




export function Bases()
{
  const [base, setBase] = useLocalStorage('bases',[])
  const allBases=useSelector(state=>state.bases)
  let [form, setForm] = useState({
    bases: []
  

  })
 
  console.log(form.bases)



  let handleChange = (event) =>
  {
    event.preventDefault()

    setForm({
      ...form,
      bases: [...form.bases, event.target.value],
  
    })
    setBase([...form.bases, event.target.value])
    console.log(base)
  }


  const handleDelete = (event) =>
  {
    setForm({
      ...form,
      bases: form.bases.filter(e => e !== event)
    })
  }

  return (

<div>
      <div id="checkboxContent" className="contain-bases" >
        <h3 id="h3-bases">ELIGE TUS BASES (2)</h3>
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
            <option value="">seleccione</option>
            {
              allBases?.map(e => (
              <option name={e.name} value={e.name}>{e.name}</option>
            ))
            }
          </select>
         
          {form.bases?.map(e =>
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

