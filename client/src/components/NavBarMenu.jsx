import React from 'react';
import '../styles/NavBarMenu.css';

import { Link } from 'react-router-dom';



const NavBarMenu = () => {
  return (
    <div>
   
    <div class="menuBarra">
        

            {/* <Link id="subMenu"  to="/pideTuEnsalada">Arma tu ensalada</Link>
            <a href=' ' id="separador">|</a> */}
            <Link id="subMenu" to="/historial">Historial de Compras</Link>
            <a href=' 'id="separador">|</a>
            <Link id="subMenu" to="/review">Dejanos tu comentario</Link>
            {/* <a href=' 'id="separador">|</a>
            <Link id="subMenu" to="/menu">Postre</Link> */}

        
   
    </div>
</div>
   
  )
}

export default NavBarMenu