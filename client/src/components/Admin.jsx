import React, {useState} from 'react';
import { useEffect } from 'react';
import '../styles/Admin.css';
import CrearProduto from '../FormPost/Crear Producto';






const Admin = () => {

    const value1 = "ordenes";
    const value2 = "usuarios";
    const value3 = "crear producto";

    const [buttonValue, setButtonValue] = useState("")

    function click1(valor){
        setButtonValue (valor)
        console.log(buttonValue)
    }

    // function click2(){
    //     setButtonValue ("usuarios")
    //     console.log(buttonValue)
    // }

    // function click3(){
    //     setButtonValue ("crear producto")
    //     console.log(buttonValue)
    // }



    return (
       <div id="container">
        
         <div class="row">

            <div class="col-2" id="sideBar">

                

                <div class="col" id="mainButtonContentAdmin">
                    <button id="butonSideBarAdmin" href="#" onClick={()=> click1(value1)}>
                        <i id="butonOrders" class="bi bi-clipboard-check-fill"> Ordenes</i>
                    </button>
                </div>
                
                <div class="col" id="mainButtonContentAdmin">
                    <button id="butonSideBarAdmin" href="#"  onClick={()=> click1(value2)}>
                        <i id="butonOrders" class="bi bi-people-fill"> Usuarios</i>
                    </button>
                </div>
                <div class="col" id="mainButtonContentAdmin">
                    <button id="butonSideBarAdmin" href="#"  onClick={()=> click1(value3)}>
                        <i id="butonOrders" class="bi bi-file-earmark-plus-fill"> Crear Producto</i>
                    </button>
                </div>
                <div class="col" id="mainButtonContentAdmin">
                    <button id="butonSideBarAdmin" href="#">
                        <i id="butonOrders" class="bi bi-clipboard-check-fill"> Caja</i>
                    </button>
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

    export default Admin