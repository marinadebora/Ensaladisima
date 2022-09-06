
import { useState } from "react";
import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import collage from '../images/collage.png';
import "../styles/Login.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostLogeoUsuario, usuariosRegistrados, vaciarUsuarios } from "../action";
import { useEffect } from "react";


  function validate(loginUser){
  let error = {}
  if(!loginUser.email) error.email = "Necesitas tu email para iniciar sesión"
  if(!loginUser.password) error.password= "Necesitas tu contraseña para iniciar sesión"
 // if(!usuarios.filter(e => e.email === loginUser.email))error.email = "No encontramos un perfil con ese email"
  return error
}

 
 function Login() {
   const history = useNavigate();
   const dispatch = useDispatch();
   
  
   const [loginUser, setLoginUser] = useState({
     email:"",
     password:""
    });
    const [error, setError] = useState({})
      

    
    useEffect( () => {
      dispatch(usuariosRegistrados())
       
    }, [dispatch])
    
    

  const handleInput = (e) => {
    setLoginUser({
          ...loginUser,
          [e.target.name]: e.target.value
        })
    setError(validate({
          ...loginUser,
          [e.target.name]:e.target.value
      }))
    }
  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      if(error.email||error.password)  alert("Hay errores en los campos")
    
      else{
  
        const dispatchLog = await dispatch(PostLogeoUsuario(loginUser))
        if(!dispatchLog) alert("Hay un error en el inicio de sesion") 
        else{
          alert('Bienvenido a ensaladísima')
          localStorage.setItem("UsuarioLogueado", JSON.stringify(dispatchLog.payload))
    setLoginUser({
      email:"",
      password:"",
    });
      history("/menu")
      }
        }
        
    }catch(error){
      console.log(error)
      alert(error)
    }
  }
   
  
  
  return (
    
    <MDBContainer fluid>
      <MDBRow style={{paddingTop:"130px"}}>

      <MDBCol sm='5' className='d-none d-sm-block px-0  me-5'>
          <img src={collage}
            alt="Login img" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

        <MDBCol sm='5'className='ms-5'>

          <div className='d-flex flex-row ps-3 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0"></span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-1 w-75 pt-2'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            
            <form onSubmit={handleLogin}>

            <MDBInput style={{border: "2px solid #207140"}} wrapperClass='mb-4 mx-5 w-100'name="email" value={loginUser.email} placeholder='Email' id='formControlLg' type='email' size="lg" onChange={handleInput}/>
            {error.email && <p>{error.email}</p>}
            <MDBInput style={{border: "2px solid #207140"}} wrapperClass='mb-4 mx-5 w-100'name="password"value={loginUser.password}  placeholder='Password' id='formControlLg' type='password' size="lg" onChange={handleInput}/>
            {error.password && <p>{error.password}</p>}
            <button type="submit" class="buttonChico2">Login</button>
            
            </form>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>No tienes una cuenta? <a href="/registro" class="link-info">Registrate</a></p>

          </div>

        </MDBCol>

       

      </MDBRow>

    </MDBContainer>

   
  );
}

export default Login;
