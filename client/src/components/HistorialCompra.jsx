
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
 // cost buscarUser=myHistorial?.map(e=>e.user[])
let historialUser=myHistorial?.filter(e=>e.user[0]?._id===userID)

console.log(historialUser)
  useEffect(()=>{
  dispatch(historialCompra())
  },[dispatch])

    return (
      <div id="containerHistorialMain">
        <NavBar/>
       <div className="contenedor-total">
{
     loguearUser&& historialUser?.length<=0? <div style={{ paddingTop: "7%" ,}}>
        
     <h3 style={{color:"#207140", fontFamily:"Tommy-light", paddingBottom:"9%" ,paddingTop: "12%",display:'flex', justifyContent:'center', alignContent:'center' }}>Aun no tienes compras</h3>
   </div>:
     loguearUser&&historialUser?historialUser?.map(e=>(
      <div className="contenedor-orden">
      <div class="row">
        <div class="col">
          {e.received&&<p id='estadoRec'>Estado de la compra ENTREGADO</p> }
          {e.pending&& <p id='estadoPend'>Estado de la compra PENDIENTE</p>}
          {e.processing&& <p id='estadoProc'>Estado de la compra EN PROCESO</p>}
          {e.canceled&&<p id='estadoCan'>Estado de la compra CANCELADO</p>}
        </div>
        <div id="nCompra"class="col">
          <p className="text">Compra n° : {e._id}</p>
        </div>
      </div>
      
      <div class="row">

        <div class="col">

            { e.orders?.map(e=>(
                  <div >
                    {
                      e.saladsMenu&& e.saladsMenu.map(e=>(
                        <>
                        
                        <p className='tuEnsalada'>{e.name}</p>
                        <img src={e.image?.[0]} alt="imagen" className='imagen-art'/>
                        <p className='nombre-art1'>Ingredientes:</p>
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
                        <p className='texto-art'>Precio: u$s {e.price}</p>
                        </>
                      ))
                    }
                    {
                    e.saladsMenuBig&& e.saladsMenuBig.map(e=>(
                        <>
                        <p className='tuEnsalada'>1 {e.name}</p>
                        <img src={e.image?.[0]} alt="imagen" className='imagen-art'/>
                        <p className='nombre-art'>Ingredientes:</p>
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
                        <p className='texto-art'>Precio: u$s {e.price}</p>
                        </>
                      ))
                    }
                    {
                    e.saladsMed&& e.saladsMed.map(e=>(
                        <>
                        <p className='tuEnsalada'>1 {e.name}</p>
                        <img src={e.image} alt="imagen" className='imagen-art'/>
                        <p className='nombre-art'>Ingredientes:</p>
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
                        <p className='texto-art'>Precio: u$s {e.price}</p>
                        </>
                      ))
                    }
                      {
                      e.saladsBig&&e.saladsBig.map(e=>(
                        <>
                        <p className='tuEnsalada'>1 {e.name}</p>
                        <img src={e.image} alt="imagen" className='imagen-art'/>
                        <p className='nombre-art'>Ingredientes:</p>
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
                        <p className='texto-art'>Precio: u$s {e.price}</p>
                        </>
                      ))
                    }
                    {
                      e.beverages&&e.beverages.map(e=>(
                        <>
                        <p className='tuEnsalada'>Bebidas:</p>
                        <p className='nombre-art'>1 {e.name}</p>
                        <img src={e.image?.[0]} alt="imagen" className='imagen-art'/>
                        <p>Precio: u$s {e.price}</p>
                        
                        </>
                      )) 
                    }
                    {
                      e.desserts&&e.desserts.map(e=>(
                        <>
                        <p className='tuEnsalada'>Postres:</p>
                        <p className='nombre-art'>1 {e.name}</p>
                        <img src={e.image?.[0]} alt="imagen" className='imagen-art'/>
                        <p>Precio: u$s {e.price}</p>
                        
                        </>
                      )) 
                    }
                    
                </div>
              ))}
        </div>

        <div class="col">
          <p class="row" className="textDate">Fecha : {e?.facheyhora?.split('T')[0]}</p>
          <p class="row" className="textDate">Hora : {e?.facheyhora?.split('T')[1]?.split('.')[0]}</p>
        </div>
        
      </div>

      <div class="row">
        <div class="col">
          <h5 className="text">Total: u$s {e.totalPayable} </h5>
        </div>
        <div class="col">
          <Link to='/menu'>
            <button variant="outlined" id="buttonHistotialCliente">Volver</button>
          </Link> 

        </div>
      </div> 

  
          </div>
      )):
      <div style={{ paddingTop: "7%" ,}}>
        
      <h3 style={{color:"#207140", fontFamily:"Tommy-light", paddingBottom:"9%" ,paddingTop: "12%",display:'flex', justifyContent:'center', alignContent:'center' }}>Inicia sesion para ver tu historial</h3>
    </div>
}
  
  

</div>
</div>) 
}

