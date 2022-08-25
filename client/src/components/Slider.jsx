import React,{useEffect} from 'react'
import  {useDispatch, useSelector} from 'react-redux'
import '../styles/slider.css'
import { motion } from 'framer-motion'
import { salads } from '../action'


const Slider = () => {
    const ensaladas=useSelector(state=>state.salads)
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(salads())
    }, [dispatch])
    console.log(ensaladas)
  return (
    <motion.div className='slider-container'>
     
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-1500}} >
        {ensaladas?.map(e=> (
            <motion.div className='item'>
                <img src={e.image} alt="" />
               {/*  <div className='detail'>
              {e.base.map(e=>(
                <p>{e}</p>
              ))}
              {e.protein.map(e=>(
                <p>{e}</p>
              ))}
              {e.complement.map(e=>(
                <p>{e}</p>
              ))} 
                {e.sauce.map(e=>(
                <p>{e}</p>
              ))} 
                 {e.topping.map(e=>(
                <p>{e}</p>
              ))} </div> */}
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Slider