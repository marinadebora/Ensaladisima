import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css';
import { useDispatch } from 'react-redux';
import { usuariosRegistrados } from '../action';
import { searchBar } from "../action"
import AdminUsuariosId from './AdminUsuarioId';


const Admin_clientesDetail = () => {
    
    const dispatch = useDispatch()
    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch(usuariosRegistrados())
    }, [dispatch])

    function handleSearch(e) {
        setInput(e.target.value)
        dispatch(searchBar(e.target.value))
    }
    function handleClick (){
        setInput("")
    }

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
                                {/* <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" /> */}
                                <input class="form-control me-3" type="search" placeholder='Buscar...' value={input} onChange={(e) => handleSearch(e)} />
                                <button class="btn btn-outline-light" type="submit" onClick={handleClick}>Todos</button>
                            </form>
                        </div>

                        <div class="col-7" id="adminTittle">ADMIN</div>
                    
                    </div>

                    <h2 id="titleUsuariosRegistrados"> Usuarios Registrados</h2>
                    
                    <div class="row">
                    <AdminUsuariosId/>
                    </div>


                </div>


            </div>

        </div>



    )
}

export default Admin_clientesDetail