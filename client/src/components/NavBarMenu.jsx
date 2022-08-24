import React from 'react';
import '../styles/NavBarMenu.css';

import { Link } from 'react-router-dom';



const NavBarMenu = () => {
  return (
    <div>
   
    <div class="menuBarra">
        
       
            <Link id="nav-link-Menu"  to="/home">Arma tu ensalada</Link>
            <a id="separador">|</a>
            <Link id="nav-link-Menu" to="/menu">Ensaladas de la casa</Link>
            <a id="separador">|</a>
            <Link id="nav-link-Menu" to="/pideTuEnsalada">Bebidas</Link>
            <a id="separador">|</a>
            <Link id="nav-link-Menu" to="/contacto">Postre</Link>
        
   
    </div>
</div>
   
  )
}

export default NavBarMenu