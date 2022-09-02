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
      <img src={Logo} alt="img" id="logoNavBar"/>
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
        
        <Link to="/checkout" class="nav-link-Main">
          <i class="bi bi-bag-fill"></i>
          <span class="badge rounded-pill badge-notification" >2</span>
        </Link> 

        <Link to="/profile" class="nav-link-Main">
          <i class="bi bi-person-circle"></i>
        </Link>

        <Link to="/login" class="nav-link-Main">
          <a id='logInText'> LOGIN</a>
          <a href=' ' id='logInText'> LOGIN</a>
        </Link>
      </div>
    </div>

  </div>
</nav>
   

    </div>
  )
}

export default NavBar
