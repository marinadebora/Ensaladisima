import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css';
import CrearProduto from '../FormPost/Crear Producto';


const Admin_productos = () => {


    return (
       <div id="container">
        
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
                            <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>

                    <div class="col-7" id="adminTittle">ADMIN</div>

                    
                        
                   
                </div>

                <div class="row">
                <CrearProduto/>
                </div>




            </div>


         </div>

       </div>

    )}

    export default Admin_productos