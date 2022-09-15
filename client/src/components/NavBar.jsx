import React, { useEffect, useState } from 'react';
import '../styles/NavBar.css';
import Logo from "../images/ensaladisimaLogo1.png";
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../useLocalStorage';
import { getPedidos } from '../action';
import { useDispatch, useSelector } from "react-redux"



const NavBar = () => {
  const dispatch = useDispatch()
  const [user,setUser] = useState(null)
  const pedido = useSelector(state => state.pedidos)

  // inf del local storage
  let bebidas = useLocalStorage('bebidas', [])
  let postres = useLocalStorage('postres', [])
  let ensaladaCreadaM = JSON.parse(localStorage.getItem('ensaladaM'))
  let ensaladaCreadaG = JSON.parse(localStorage.getItem('ensaladaG'))
  let ensaladasMed = useLocalStorage('medianas', [])
  let ensaladasGr = useLocalStorage('grandes', [])
  let med = ensaladasMed[0]
  let gran = ensaladasGr[0]
  let beb = bebidas[0]
  let post = postres[0]
  let creadaM=ensaladaCreadaM
  let creadaG=ensaladaCreadaG

  let todosLosProductos = [beb,post,med,gran,creadaM,creadaG].flat()
  let productosReales = todosLosProductos.filter(e=>e!==undefined&&e!==null)

  const resultado = pedido?.find(e => e._id === user?.orders[0])
  const armadoCarrito = {
    _id: resultado?._id,
    user: resultado?.user?.email,
    producto: resultado?.salads?.map(e => e).concat(resultado?.beverages?.map(e => e)).concat(resultado?.desserts?.map(e => e)),
    total: resultado?.totalPayable,
    direccion: resultado?.adress
  }
  


  useEffect(()=>{
    if(localStorage.getItem('loguearUsuario')){
      const users = JSON.parse(localStorage.getItem('loguearUsuario'))
      setUser(users)
      dispatch(getPedidos())
    }
  },[dispatch])
  
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
                  <button class="buttonCloseSesion" onClick={logOut}> Cerrar sesión</button>
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
          <span class="badge rounded-pill badge-notification" >{user ? armadoCarrito?.producto?.length : productosReales?.length}</span>
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
