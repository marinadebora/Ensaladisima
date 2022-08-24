import React from 'react';
import '../styles/Home.css';
import NavBarMenu from './NavBarMenu';
import Card from './Card';
import ensaladaMediana from "../images/ensaladera.png";
import ensaladaGrande from "../images/ensaladera.png";


import "../styles/Menu.css";





const Menu = () => {
  return (
    <div>
        <NavBarMenu/>
        <h1 id="tituloMenu"> Ensaladas de la casa</h1>
        <div id="tamaños">
          <h4 id="tamaño">Opciones de tamaño:</h4>
          <img src={ensaladaMediana} alt="img" id="ensaladaMediana" />
          <h5 id="tamañoPrecioM">Mediana: u$d 13</h5>
          <img src={ensaladaGrande} alt="img" id="ensaladaGrande" />
          <h5 id="tamañoPrecioG">Grande: u$d 15</h5>
        </div>
        <Card/>
    </div>
  )
}

export default Menu