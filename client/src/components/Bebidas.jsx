import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { beverages, pedidoBebidas } from "../action";
import '../styles/Bases.css'
import {useLocalStorage}from '../useLocalStorage'
import img from '../images/bolsa.png'
import '../styles/Bebidas.css'


export const Bebidas = () =>
{

const allBeverages = useSelector(state => state.beverages)
const pedido = useSelector(state => state.usuario)
const dispatch = useDispatch()
const [beverage, setBeverage] = useLocalStorage('bebidas',[])
const UserLocalStorage=useLocalStorage('User',[])

let name=[]
const handleSubmit=(event)=>{

  name.push(event.target.name) 
  setBeverage([...beverage,...name])
 
  console.log(name)
}
//si el usuario esta logeado
const [bebidas,setBebidas]=useState({
  name:name?.length-1,
  user:UserLocalStorage[0].email
})
  useEffect(() =>
  {
    dispatch(beverages())
    dispatch(pedidoBebidas(bebidas))
  }, [dispatch])


  return (
    <div id="contain-bases">
      {
        allBeverages?.map(e => (
          <div key={e._id} id="contain-bases-card">
            <label class="checkeable">
              <img id="img-bases" src={e.image} alt={e.name} />
              <p>US$ {e.price}</p>
            <input type='button' className='btn-bolsa' name={e.name} value='selecciona' onClick={handleSubmit} />
            <img className='img-bolsa' src={img} alt="bolsa" />
            </label>
            <h2 id="h2-bases">{e.name?.toUpperCase()}</h2>
          </div>
        ))
      }
    </div>

  )
}

export default Bebidas