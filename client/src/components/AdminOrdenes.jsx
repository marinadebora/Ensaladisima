import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/Admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { historialCompra, filtroHistorial, filtroHistorialPrecio } from "../action";
import CardHistorial from "./CardHistorial";
import NavBar from "./NavBar";

export default function HistorialDelUsuario()
{
  
  const { historial } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(historialCompra())
  }, [dispatch])


  const filtroPorEstado = (event) =>
  {
    event.preventDefault()
   
      dispatch(filtroHistorial(event.target.value))
    
  }
  const filtroPorPrecio = (event) =>
  {
    event.preventDefault()
      dispatch(filtroHistorialPrecio(event.target.value))
  }

  return (
    <div id="container">
      <NavBar />
      <div class="row">

        <div class="col-2" id="sideBar">



         
        <div class="col" id="mainButtonContentAdmin">
                    <Link id="butonSideBarAdmin" to="/admin_ordenes">
                        <i id="butonOrders" class="bi bi-clipboard-check-fill"> Ordenes</i>
                    </Link>
                </div>
                
                <div class="col" id="mainButtonContentAdmin">
                    <Link id="butonSideBarAdmin" to="/admin_usuarios">
                        <i id="butonOrders" class="bi bi-people-fill"> Usuarios</i>
                    </Link>
                </div>
                <div class="col" id="mainButtonContentAdmin">
                    <Link id="butonSideBarAdmin" to="/admin_productos">
                        <i id="butonOrders" class="bi bi-file-earmark-plus-fill"> Productos</i> 
                    </Link>
                </div>
                <div class="col" id="mainButtonContentAdmin">
                    <Link id="butonSideBarAdmin" to="#">
                        <i id="butonOrders" class="bi bi-clipboard-check-fill"> Caja</i>
                    </Link>
                </div>
                
            
            </div>

        <div class="col-10" id="adminContent">
          <div class="row" id="searchBarAdmin">
            <div class="col-5" id="searchBarAdminComponent">
            </div>
            <div class="col-7" id="adminTittle">ADMIN</div>
          </div>

          <div class="row">
                <h2 id="titleUsuariosRegistrados">Ordenes</h2>
            <div>
              <div className="contenedor-total">
                <div id='filtro'>
                  
                  <select name="filtroestado" id="filtroestado" onChange={(e) => filtroPorEstado(e)}>
                    <option key={'sinFiltro'} value={'sinFiltro'}>Buscar por estados</option>
                    <option key={'pendiente'} value={'pending'}>Pendiente</option>
                    <option key={'procesado'} value={'processing'}>Procesado</option>
                    <option key={'recibido'} value={'received'}>Entregado</option>
                    <option key={'cancelado'} value={'canceled'}>Cancelado</option>
                  </select>
                  
                  <select name="filtroRango" id="filtroRango" onChange={(e) => filtroPorPrecio(e)}>
                    <option key={'sinFiltro'} value={'sinFiltro'}>Rango de precio</option>
                    <option key={'menor'} value={'menor'}>Menor a US$ 50</option>
                    <option key={'medio'} value={'medio'}>Entre US$ 50 y US$ 100</option>
                    <option key={'mayor'} value={'mayor'}>Mayor a US$ 100</option>
                  </select>
                </div>
              </div>
          
              {
                historial ?
                  historial?.map(e =>
                  {
                    return (
                      <div>

                        <CardHistorial
                          nombre={e.user[0]?.firstName + " " + e.user[0]?.lastName}
                          correo={e.user[0]?.email}
                          _id={e._id}
                          canceled={e?.canceled}
                          pending={e?.pending}
                          processing={e?.processing}
                          received={e?.received}
                          totalPayable={e.totalPayable}
                          facheyhora={e.facheyhora}

                        />
                      </div>
                    )
                  }) : <></>
              }
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

/* import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/Admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { historialCompra} from "../action";
import CardHistorial from "./CardHistorial";
import NavBar from "./NavBar";

export default function HistorialDelUsuario() {
    const {historial} = useSelector(state=>state)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(historialCompra())
    },[dispatch])


    return (
       <div id="container">
        <NavBar/>
         <div class="row">

            <div class="col-2" id="sideBar">

                

                <div class="col" id="mainButtonContentAdmin">
                    <Link id="butonSideBarAdmin" to="/admin_ordenes">
                        <i id="butonOrders" class="bi bi-clipboard-check-fill"> Ordenes</i>
                    </Link>
                </div>
                
                <div class="col" id="mainButtonContentAdmin">
                    <Link id="butonSideBarAdmin" to="/admin_usuarios">
                        <i id="butonOrders" class="bi bi-people-fill"> Usuarios</i>
                    </Link>
                </div>
                <div class="col" id="mainButtonContentAdmin">
                    <Link id="butonSideBarAdmin" to="/admin_productos">
                        <i id="butonOrders" class="bi bi-file-earmark-plus-fill"> Productos</i> 
                    </Link>
                </div>
                <div class="col" id="mainButtonContentAdmin">
                    <Link id="butonSideBarAdmin" to="#">
                        <i id="butonOrders" class="bi bi-clipboard-check-fill"> Caja</i>
                    </Link>
                </div>
                
            
            </div>

            <div class="col-10" id="adminContent">
                

                    <div class="row" id="searchBarAdmin">
                        <div class="col" id="adminTittle">ADMIN</div>  
                    </div>

                
                        
                   
               

                <div class="row">
                //<CrearProduto/> 
                <div>
                <h2 id="titleUsuariosRegistrados">Ordenes</h2>
                {
            historial?
            historial?.map(e=>{
               return(
                <div>
                
                    <CardHistorial
                    nombre={e.user[0]?.firstName + " " +e.user[0]?.lastName}
                    correo={e.user[0]?.email}
                    _id={e._id}
                    canceled={e?.canceled}
                    pending={e?.pending}
                    processing={e?.processing}
                    received={e?.received}
                    totalPayable={e.totalPayable}
                    facheyhora={e.facheyhora}
                    
                    />
                </div>
               )
            }):<></>
           }
                </div>
               
                </div>




            </div>


         </div>

       </div>

    )} */