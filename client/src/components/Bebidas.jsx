import React, { useEffect/* , useState  */} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { beverages } from "../action";
import '../styles/Bases.css'
import {useLocalStorage}from '../useLocalStorage'
import img from '../images/bolsa.png'
import '../styles/Bebidas.css'


export const Bebidas = () =>
{

  const allBeverages = useSelector(state => state.beverages)
  console.log(allBeverages)
  const dispatch = useDispatch()
const [beverage, setBeverage] = useLocalStorage('bebidas',[])
/* const [bebidas,setBebidas]=useState({
name:'',

}) */
const handleSubmit=(event)=>{

  setBeverage({
    ...beverage,
    [event.target.name]:event.target.value
  })
}
console.log(beverage)
  useEffect(() =>
  {
    dispatch(beverages())
  }, [dispatch])


  return (
    <div id="contain-bases">
      {
        allBeverages?.map(e => (
          <div id="contain-bases-card">
            <label class="checkeable">
              <img id="img-bases" src={e.image} alt={e.name} />
              <p>US$ {e.price}</p>
            </label>
            <button className='btn-bolsa'name={e.name} value={e._id} onClick={handleSubmit} ><img className='img-bolsa' src={img} alt="bolsa" /></button>
            <h2 id="h2-bases">{e.name?.toUpperCase()}</h2>
          </div>
        ))
      }
    </div>

  )
}

export default Bebidas