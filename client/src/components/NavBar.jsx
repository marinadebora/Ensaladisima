import React from 'react';
import '../styles/NavBar.css';
import Logo from "../images/ensaladisimaLogo1.png";
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div>
      <nav id="navBarMain" class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <Link class="nav-link-Main" to="/">
      <img src={Logo} alt="img" id="logoNavBar" />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link-Main"  to="/">Home</Link>
        <Link class="nav-link-Main" to="/menu">Menu</Link>
        <Link class="nav-link-Main" to="/pideTuEnsalada">Pide tu ensalada</Link>
        <Link class="nav-link-Main" to="/contacto">Contacto</Link>
      </div>
        <div class="contenedor-icono">
          <i class="bi bi-bag-fill"></i>
        </div> 
        <div class="contenedor-login">
          <i class="bi bi-person-circle"></i>
        </div>
    </div>
  </div>
</nav>
   
    </div>
  )
}

export default NavBar
