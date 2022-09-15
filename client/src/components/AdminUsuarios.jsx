import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css';
import '../styles/Paginado.css';
import CardUsuarios from './CardUsuario';
import { useDispatch, useSelector } from 'react-redux';
import { usuariosRegistrados } from '../action';
import { searchBar } from "../action"


const Admin_clientes = () => {
    const  usuarioss  = useSelector(state => state.usuarios)
    const dispatch = useDispatch()
    const [input, setInput] = useState("");


///////////----------- Paginado ------------////////////

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItempsPerPage] = useState(6);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handleClickPag = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if(currentPage+1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);

        }
    };

    const handlePrevtbtn = () => {
        setCurrentPage(currentPage - 1);

        if((currentPage - 1) % pageNumberLimit===0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);

        }
    };

    const pages = [];
    for(let i=1; i<=Math.ceil(usuarioss?.length/itemsPerPage); i++){
            pages.push(i);
    };

    let pageIncrementBtn = null;
    if(pages?.length > maxPageNumberLimit){
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimit >= 1){
        pageDecrementBtn = <li onClick={handlePrevtbtn}>&hellip;</li>
    }

    const handleLoadMore = () => {
        setItempsPerPage(itemsPerPage + 5);
    }

    const renderPageNumbers = pages.map(number =>{
        
        if(number < maxPageNumberLimit+1 && number > minPageNumberLimit){
            return(
                <li
                key={number}
                id={number}
                onClick={handleClickPag}
                className={currentPage === number ? "active" : null}
    
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    })

    
    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = usuarioss?.slice(indexOfFirstItem, indexOfLastItem);


    ///////////----------- Fin Paginado ------------////////////



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

                    {
                        
                        usuarioss?
                            
                        currentItems.map(e => {
                                return (
                                    <div key={e._id}>
                                        <CardUsuarios
                                            name={e.name}
                                            email={e.email}
                                            phone={e.phone}
                                            adress={e.adress}
                                            _id= {e._id}
                                        />
                                    </div>
                                )
                            }) : <h1>Cargando</h1>
                    }

                        {/* ///------------- Paginado Render --------------/// */}

                    <div id="containerPaginado">
                            <ul className='pageNumbers'>
                            
                            <li>
                                <button
                                onClick={handlePrevtbtn}
                                disabled={currentPage===[0] ? true : false}
                                >Prev
                                </button>
                            </li>
                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}

                            <li>
                                <button
                                onClick={handleNextbtn}
                                disabled={currentPage===[pages.length-1] ? true : false}
                                >
                                Next
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div id="containerMostrarMas">
                    <button onClick={handleLoadMore} className="loadMore">Cargar mas</button>
                    </div>
                       

                    {/* ///------------- Fin paginado Render --------------/// */}

                </div>


            </div>

        </div>



    )
}

export default Admin_clientes