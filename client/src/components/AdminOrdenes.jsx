import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css';
import CrearProduto from '../FormPost/Crear Producto';
import NavBar from "./NavBar";
import { useEffect } from 'react';
import { getPedidos } from '../action';
import { useDispatch, useSelector } from 'react-redux';



const Admin_ordenes= () => {
    const dispatch = useDispatch();
    const {pedidos}= useSelector(state =>state)

    useEffect(() => {
        dispatch(getPedidos());
    }, [dispatch]);

    console.log(pedidos)


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

                    <div class="col-5" id="searchBarAdminComponent">
                        <form id="searchBarForm" class="d-flex" role="search">
                            {/* <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light" type="submit">Search</button> */}
                            <Link to="/menu"><button>Volver</button></Link>
                        </form>
                    </div>

                    <div class="col-7" id="adminTittle">ADMIN</div>

                    
                        
                   
                </div>

                <div class="row">
                {/* <CrearProduto/> */}
                <div>
                  {pedidos?.map(e=>{
                            return (
                                <div style={{borderBlockEnd:"1px,black"}}>
                                    <h6><span>Número De Pedido:</span></h6>
                                <p>{e._id}</p>
                                <h6><span>Delivery:</span></h6>
                                <p>{e.delievery?"si":"no"}</p>
                                <h6><span>Ensaladas:</span></h6>
                                <p>{e.salads.length?e.salads.map(e=>e?.name+ ".- "):"Sin postres"}</p>
                                <h6><span>Bebidas:</span></h6>
                                <p>{e.beverages.length?e.beverages.map(e=>e.name+ ".- "):"Sin bebidas"}</p>
                                <h6><span>Postres:</span></h6>
                                <p>{e.desserts.length?e.desserts.map(e=>e.name+ ".- "):"Sin postres"}</p>
                                <h6><span>Precio Total:</span></h6>
                                <p>{e.totalPayable}</p>
                                <h6><span>Fecha y Hora:</span></h6>
                                <p>{e?.facheyhora.split('T')[0]+" / "+ e?.facheyhora.split('T')[1].split('.')[0]}</p>
                                <h6><span>Datos Del Usuario:</span></h6>
                                <p>Nombre: {e.user.firstName+" "+e.user.lastName}</p>
                                <p>Dirección: {e.user.adress}</p>
                                <p>Correo: {e.user.email}</p>
                                <p>Teléfono: {e.user.phone}</p>
                                </div>
                                
                            )
                        })}
                </div>
               
                </div>




            </div>


         </div>

       </div>

    )}

    export default Admin_ordenes
    
