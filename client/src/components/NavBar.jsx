import React, { useEffect, useState } from 'react';
import '../styles/NavBar.css';
import Logo from "../images/ensaladisimaLogo1.png";
import { Link } from 'react-router-dom';



const NavBar = () => {


  const [user,setUser] = useState(null)

  useEffect(()=>{
    if(localStorage.getItem('loguearUsuario')){
      const users = JSON.parse(localStorage.getItem('loguearUsuario'))
      setUser(users)
    }    
  },[])
  
  const logOut =()=>{ 
    localStorage.removeItem("loguearUsuario")
    window.location.reload()
  }
  const logeado = ()=>{
    return (
                <div style={{display : "flex", flexdirection: "row" }}>
                  <Link to="/profile" class="nav-link-Main">
                      <i class="bi bi-person-circle"></i>  </Link>
                
                  <Link to="/profile" class="nav-link-Main"><p>Hola {user.firstName}</p></Link>
                  <button onClick={logOut}> Cerrar sesión</button>
                </div> 
        
      )
  }

  const noLogeado=()=>{
    return(
   
        <Link to="/login" class="nav-link-Main">
          <p id='logInText'> Inicia sesión</p>
        </Link>

    )
  }

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

        
        
        {!user?noLogeado():logeado()}
        
      </div>
    </div>

  </div>
</nav>
   

    </div>
  )
}

export default NavBar
