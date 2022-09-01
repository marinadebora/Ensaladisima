import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { bases } from "../action";
import '../styles/Bases.css';
/* import { useLocalStorage } from "../useLocalStorage"; */
export const arrayEnsalada = []


//funcion para limitar los checkbox
function limitCheckBox()
{
  let checkboxContent = document
    .getElementById("checkboxContent")
    .getElementsByTagName("input");

  let limit = 2;

  for (let i = 0; i < checkboxContent.length; i++) {
    checkboxContent[i].onclick = function ()
    {
      let checkedCount = 0;

      for (let i = 0; i < checkboxContent.length; i++) {
        checkedCount += checkboxContent[i].checked ? 1 : 0;
      }

      if (checkedCount > limit) {
        let dos = this.checked = false;
        checkboxContent[checkboxContent.length - 1] = dos
        /*   alert("solo puedes seleccionar" + limit + " bases");
          this.checked = false; */
      }
    };
  }
}



export function Bases()
{
  const allBases = useSelector(state => state.bases)
  const dispatch = useDispatch()
  let formInputs = {
    allBases: []
  }
  const [state, setstate] = useState(' ') /* useLocalStorage('base',[]) */
  const handleChange = (e) =>
  {
    limitCheckBox();
    e.target.name === "allBases"
      ? formInputs["allBases"].indexOf(e.target.value) !== -1
        ? (formInputs = {
          ...formInputs,
          allBases: formInputs["allBases"].filter((f) => (f !== e.target.value && !e.target.checked)),
        })
        : (formInputs = {
          ...formInputs,
          allBases: [...formInputs.allBases, e.target.value],

        })
      : (formInputs = {
        ...formInputs.allBases,
        [e.target.name]: e.target.value,

      })

  };



  function click()
  {
    /* setstate(formInputs.allBases) */
    arrayEnsalada.push(formInputs.allBases)
    console.log(formInputs.allBases)

  }


  useEffect(() =>
  {
    dispatch(bases())

  }, [dispatch])

  console.log(formInputs.allBases)

  return (

    <div className="contain-total">

      <h3 id="h3-bases">ELIGE TU BASE</h3>
      {<div id="checkboxContent" className="contain-bases" >
        {allBases?.map((e, index) =>
        {
          return (
            <div id="contain-bases-card" key={index}>
              <label class="checkeable">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value={e.name}
                  name="allBases"
                  id={`${e.name}-${index}`}
                />

                <img id="img-bases" src={e.image} alt={e.name} />
              </label>
              <h2 id="h2-bases">{e.name.toUpperCase()}</h2>
            </div>
          );
        })}
      </div>}
      <button onClick={click}>Echo</button>


    </div>
  );
};


