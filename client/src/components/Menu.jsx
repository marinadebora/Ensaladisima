import React from 'react';
import '../styles/Home.css';
import NavBarMenu from './NavBarMenu';
import Ensaladas from './Ensaladas';
import Bebidas from './Bebidas';
import Postres from './Postres';

import ensaladaMediana from "../images/ensaladera.png";
import ensaladaGrande from "../images/ensaladera.png";


import "../styles/Menu.css";





const Menu = () => {
  return (

    <div class="container-fluid">

        <NavBarMenu/>
        <h1 id="tituloMenu"> Ensaladas de la casa</h1>
        <div id="tamaños">
          <h4 id="tamaño">Opciones de tamaño:</h4>
          <img src={ensaladaMediana} alt="img" id="ensaladaMediana" />
          <h5 id="tamañoPrecioM">Mediana: u$d 13</h5>
          <img src={ensaladaGrande} alt="img" id="ensaladaGrande" />
          <h5 id="tamañoPrecioG">Grande: u$d 15</h5>
        </div>


        <div  id="ensaladasDeLaCasa">
        <Ensaladas/>
        </div>

        <div id="bebidas">
          <h1 id="tituloMenu">Bebidas</h1>
          <Bebidas/>
        </div>

        <div id="postres">
          <h1 id="tituloMenu">Postres</h1>
          <Postres/>
        </div>
       
    </div>
  )
}

export default Menu