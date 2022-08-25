import React from 'react';
import '../styles/NavBarMenu.css';

import { Link } from 'react-router-dom';



const NavBarMenu = () => {
  return (
    <div>
   
    <div class="menuBarra">
        

            <Link id="subMenu"  to="/home">Arma tu ensalada</Link>
            <a id="separador">|</a>
            <Link id="subMenu" to="/menu">Ensaladas de la casa</Link>
            <a id="separador">|</a>
            <Link id="subMenu" to="/pideTuEnsalada">Bebidas</Link>
            <a id="separador">|</a>
            <Link id="subMenu" to="/contacto">Postres</Link>

        
   
    </div>
</div>
   
  )
}

export default NavBarMenu