
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getUsuarioId} from '../action/'


export function HistorialCompras()  { 
  const dispatch=useDispatch()
  const loguearUser = JSON.parse(localStorage.getItem("loguearUsuario"))
  const userID =loguearUser?.id
  const myUserDetail = useSelector(state => state?.userId);



  useEffect(()=>{
  dispatch(getUsuarioId(userID))
  },[dispatch,userID])

    return (
      <div>
       <div className="contenedor-total">

{
myUserDetail.purchaseHistory?.length<=0?<div ><h3 className='h3'>Aun no tienes compras</h3> <img className="imagenhc" src={''} alt=''/></div>:
myUserDetail.purchaseHistory?.map(e=>(
  
  e.recibido === true? 

  
  <div   className="contenedor-orden">
     
        <h2 classname='estado'>Estado de la compra RECIBIDO</h2>  
         
  <h3 className="text">Compra n° : {e._id}</h3>,
  <h3 className="text">Fecha : {e?.fechaDeCompra.split('T')[0]}</h3>
        <h3 className="text">Hora : {e?.fechaDeCompra.split('T')[1].split('.')[0]}</h3>
     { e.productos.map(e=>(
          <div >
             
          <div className='contenedor-art'>
        <img src={e.imagenes?.[0]} alt="imagen" id='imagen-art'/>
        <div className='contenedor-texto-art'>
      <p className='nombre-art'>{e.producto}</p>
      <p className='texto-art'>Precio: {e.precio}</p>
      <p>{e.cantidad||1} unidad</p>
     
      </div>
  
      
      </div></div>
      ))},
     <h3 className="text">Total: US$ {e.precioTotal} </h3>
    
      </div>:
      <div   className="contenedor-orden">
       
        {e.pendiente&& <h2 classname='estado'>Estado de la compra PENDIENTE</h2>}
       { e.procesado&& <h2 classname='estado'>Estado de la compra PROCESADO</h2>}
      { e.cancelado&&<h2 classname='estado'>Estado de la compra CANCELADO</h2>}
         <h3 className="text">Compra n° : {e._id}</h3>
        <h3 className="text">Fecha : {e?.fechaDeCompra.split('T')[0]}</h3>
        <h3 className="text">Hora : {e?.fechaDeCompra.split('T')[1].split('.')[0]}</h3>
        <h3 className="text">Total: US$ {e.precioTotal} </h3>
         { e.productos.map(e=>(
              <div >
                 
              <div className='contenedor-art'>
            <img src={e.imagenes?.[0]} alt="imagen" className='imagen-art'/>
            <div className='contenedor-texto-art'>
          <p className='nombre-art'>{e.producto}</p>
          <p className='texto-art'>Precio: {e.precio}</p>
          <p>{e.cantidad||1} unidad</p>
          </div>
      
          
          </div></div>
          ))}

         
  
      <Link to='/accesorios'>
          <button variant="outlined" id="buttonHistotialCliente">Volver</button>
      </Link> 
          </div>))
}
  
  

</div>
</div>) 
}