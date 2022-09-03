import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { desserts, pedidoPostres } from "../action";
import '../styles/Bases.css'
import {useLocalStorage}from '../useLocalStorage'
import img from '../images/bolsa.png'






const Postres = () => {

  const allDesserts= useSelector(state=>state.desserts)
  const dispatch= useDispatch()
  const [dessert, setDessert] = useLocalStorage('postres',[])

      useEffect(() => {
          dispatch(desserts())
          dispatch(pedidoPostres(dessert))
      }, [dispatch,dessert])

      let postre=[]
const handleSubmit=(event)=>{

  postre.push(event.target.name) 
  setDessert([...dessert,...postre])
 
  console.log(postre)
}
return (
  <div id="contain-bases">
    {
      allDesserts?.map(e => (
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

export default Postres