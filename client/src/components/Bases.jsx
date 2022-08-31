import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { bases } from "../action";
import '../styles/Bases.css';
import { useLocalStorage } from "../useLocalStorage";


export function Bases()
{
  const allBases = useSelector(state => state.bases)
  const dispatch = useDispatch()


  const [state, setstate] = useLocalStorage('base', '[]')

  useEffect(() =>
  {
    dispatch(bases())
   
  }, [dispatch])

  console.log(state)

  return (
    <div className="contain-total">

      <h3 id="h3-bases">ELIGE TU BASE</h3>
      <div id="contain-bases">
        {
          allBases?.map(e => (
            <div id="contain-bases-card">
              <label class="checkeable">
                <input type="checkbox" name={e.name} value={e.name} onChange={e => setstate(e.target.value)} />

                <img id="img-bases" src={e.image} alt={e.name} />
              </label>
              <h2 id="h2-bases">{e.name.toUpperCase()}</h2>
            </div>
          ))
        }

        <div>

        </div>

      </div>
    </div>
  );

