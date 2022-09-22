import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css';
import CrearProduto from '../FormPost/Crear Producto';
import NavBar from "./NavBar";

const Admin_productos = () => {


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
               
                
            
            </div>

            <div class="col-10" id="adminContent">
                <div class="row" id="searchBarAdmin">
                    <div class="col" id="adminTittle">ADMIN</div>  
                </div>

                <div class="row">
                <CrearProduto/>
                </div>
            </div>


         </div>

       </div>

    )}

    export default Admin_productos