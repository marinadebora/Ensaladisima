import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { beverages } from "../action";
import '../styles/Bases.css'
import {useLocalStorage}from '../useLocalStorage'




export const Bebidas = () =>
{

  const allBeverages = useSelector(state => state.beverages)
  console.log(allBeverages)
  const dispatch = useDispatch()
const [beverage, setBeverage] = useLocalStorage('bebidas',[])
const [count, setCount] = useState(0)
const [pedido, setPedido] = useState(0)

  useEffect(() =>
  {
    dispatch(beverages())
  }, [dispatch])

let sum=()=>{
  setCount(count+1)
}
let res=()=>{
  count>0?
  setCount(count-1)
  :setCount(0)
}
  return (
    <div id="contain-bases">
      {
        allBeverages?.map(e => (
          <div id="contain-bases-card">
            <label class="checkeable">
              <img id="img-bases" src={e.image} alt={e.name} />
              <p>US$ {e.price}</p>
            </label>
            <i class="bi bi-bag-fill"></i>
            {/* <button onClick={sum}>+</button>{count}<button onClick={res}>-</button> */}
            <h2 id="h2-bases">{e.name?.toUpperCase()}</h2>
          </div>
        ))
      }
    </div>

  )
}

export default Bebidas