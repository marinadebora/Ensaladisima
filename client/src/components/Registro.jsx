import React from 'react';

import {
 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
}
from 'mdb-react-ui-kit';
import collage1 from '../images/collage1.png';
import "../styles/Registro.css"
import { useState } from "react";
import {PostRegistroUsuario} from "../action/index";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";



function Registro() {
  const history = useNavigate()
  const dispatch = useDispatch();

  const [inputUser, setInputUser]=useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      adress:"",
      phone:""
  });

  const handleChange = (e) => {
    setInputUser({
          ...inputUser,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(PostRegistroUsuario(inputUser));
      alert(`Se ha registrado correctamente con el email ${inputUser.email}`)
      setInputUser({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        adress:"",
        phone:""
      });
      history("/login")
  }
 

  return (
    <div>
    <MDBContainer fluid>
      <MDBRow style={{paddingTop:"130px"}}>

        <MDBCol sm='5' className='d-none d-sm-block px-0  me-5'>
          <img src={collage1}
            alt="Login img" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>
      
        <MDBCard className='ms-5' style={{maxWidth: '600px', border: "none", padding: "0px"}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-center mb-5" style={{fontFamily:"Tommy-regular", color:"#207140"}}>Crea tu cuenta</h2>

          <form onSubmit={handleSubmit}>

        
                <form onSubmit={handleSubmit}></form>
                <input class="inputRegistro" type="email" name = "email" value={inputUser.email}placeholder="Email"  onChange={handleChange}/>
                <input class="inputRegistro" type="password" name = "password" value={inputUser.password} placeholder="Password"  onChange={handleChange}/>
                <input class="inputRegistro" type="text"name = "firstName" value={inputUser.firstName} placeholder="Nombre"  onChange={handleChange}/>
                <input class="inputRegistro" type="text"name = "lastName" value={inputUser.lastName} placeholder="Apellido"  onChange={handleChange}/>
                <input class="inputRegistro" type="text"name = "adress" value={inputUser.adress} placeholder="Direc."  onChange={handleChange}/>
                <input class="inputRegistro" type="text" name = "phone" value={inputUser.phone} placeholder="Telefono"  onChange={handleChange}/>

           <button type="submit" class="buttonChico2">Registrar</button>
            </form>
            <p className='ms-5 mt-5'>Have already an account?<a href="/login" class="link-info"> Login</a></p>

        </MDBCardBody>
      </MDBCard>


        </MDBRow>

        </MDBContainer>

   </div>
  );
}

export default Registro;