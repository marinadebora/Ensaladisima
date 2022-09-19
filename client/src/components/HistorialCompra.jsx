
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {historialCompra} from '../action/'
import '../styles/HistorialUser.css'
import NavBar from './NavBar'
export function HistorialCompras()  { 
  const dispatch=useDispatch()
  const loguearUser = JSON.parse(localStorage.getItem("loguearUsuario"))
  const userID =loguearUser?.id
  const myHistorial = useSelector(state => state?.historial);
let historialUser=myHistorial?.filter(e=>e.user[0]===userID)


  useEffect(()=>{
  dispatch(historialCompra())
  },[dispatch])

    return (
      <div>
        <NavBar/>
       <div className="contenedor-total">
{
  historialUser?.length<=0?<div ><h3 className='h3'>Aun no tienes compras</h3> <img className="imagenhc" src={''} alt=''/></div>:
  historialUser?.map(e=>(
      <div className="contenedor-orden">
      {e.received&&<p id='estadoRec'>Estado de la compra RECIBIDO</p> }
      {e.pending&& <p id='estadoPend'>Estado de la compra PENDIENTE</p>}
      {e.processing&& <p id='estadoProc'>Estado de la compra PROCESADO</p>}
      {e.canceled&&<p id='estadoCan'>Estado de la compra CANCELADO</p>}
      <p className="text">Compra n° : {e._id}</p>
      <p className="text">Fecha : {e?.facheyhora?.split('T')[0]}</p>
      <p className="text">Hora : {e?.facheyhora?.split('T')[1]?.split('.')[0]}</p>
        
         { e.orders?.map(e=>(
              <div >
                 {
                  e.saladsMenu&& e.saladsMenu.map(e=>(
                    <>
                    {
                      
                    }
                    <p className='nombre-art'>1 {e.name}</p>
                    <img src={e.image?.[0]} alt="imagen" className='imagen-art'/>
                    <p>ingredientes</p>
                    <ul className="ulEnsaladas">
                    {
                     e.base&& e.base.map(e=>(
                        <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.protein&& e.protein.map(e=>(
                        <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.complement&& e.complement.map(e=>(
                        <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.sauce&& e.sauce.map(e=>(
                        <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.topping&& e.topping.map(e=>(
                        <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <p className='texto-art'>Precio: {e.price}</p>
                    </>
                  ))
                 }
                 {
                 e.saladsMenuBig&& e.saladsMenuBig.map(e=>(
                    <>
                    <p className='nombre-art'>1 {e.name}</p>
                    <img src={e.image?.[0]} alt="imagen" className='imagen-art'/>
                    <p>ingredientes</p>
                    <ul className="ulEnsaladas">
                    {
                    e.base&&e.base.map(e=>(
                        <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                    e.protein&& e.protein.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.complement&& e.complement.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.sauce&& e.sauce.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.topping&& e.topping.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <p className='texto-art'>Precio: {e.price}</p>
                    </>
                  ))
                 }
                 {
                 e.saladsMed&& e.saladsMed.map(e=>(
                    <>
                    <p className='nombre-art'>1 {e.name}</p>
                    <img src={e.image} alt="imagen" className='imagen-art'/>
                    <p>ingredientes</p>
                    <ul className="ulEnsaladas">
                    {
                     e.base&& e.base.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.protein&& e.protein.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.complement&& e.complement.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul>
                    {
                     e.sauce&& e.sauce.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.topping&& e.topping.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <p className='texto-art'>Precio: {e.price}</p>
                    </>
                  ))
                 }
                  {
                   e.saladsBig&&e.saladsBig.map(e=>(
                    <>
                    <p className='nombre-art'>1 {e.name}</p>
                    <img src={e.image} alt="imagen" className='imagen-art'/>
                    <p>ingredientes</p>
                    <ul className="ulEnsaladas">
                    {
                     e.base&& e.base.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.protein&& e.protein.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.complement&& e.complement.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.sauce&& e.sauce.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <ul className="ulEnsaladas">
                    {
                     e.topping&& e.topping.map(e=>(
                      <li className="liIngredientes">{e}, </li>
                      ))
                    }
                    </ul>
                    <p className='texto-art'>Precio: {e.price}</p>
                    </>
                  ))
                 }
                 {
                  e.beverages&&e.beverages.map(e=>(
                    <>
                    <p className='nombre-art'>1 {e.name}</p>
                    <img src={e.image?.[0]} alt="imagen" className='imagen-art'/>
                    <p>Precio: {e.price}</p>
                    
                    </>
                  )) 
                 }
                 {
                  e.desserts&&e.desserts.map(e=>(
                    <>
                    <p className='nombre-art'>1 {e.name}</p>
                    <img src={e.image?.[0]} alt="imagen" className='imagen-art'/>
                    <p>Precio: {e.price}</p>
                    
                    </>
                  )) 
                 }
                
             </div>
          ))}

      <h5 className="text">Total: US$ {e.totalPayable} </h5>    
  
      <Link to='/menu'>
          <button variant="outlined" id="buttonHistotialCliente">Volver</button>
      </Link> 
          </div>
      ))
}
  
  

</div>
</div>) 
}

