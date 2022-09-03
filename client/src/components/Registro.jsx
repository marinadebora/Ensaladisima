import React from 'react';
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
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
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>
      
        <MDBCard className='ms-5' style={{maxWidth: '600px', border: "none", padding: "0px"}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-center mb-5" style={{fontFamily:"Tommy-regular", color:"#207140"}}>Crea tu cuenta</h2>

          <form onSubmit={handleSubmit}>

          <h1>Registro</h1>

                <form onSubmit={handleSubmit}></form>
                <input type="email" name = "email" value={inputUser.email}placeholder="email"  onChange={handleChange}/>
                <input type="password" name = "password" value={inputUser.password} placeholder="password"  onChange={handleChange}/>
                <input type="text"name = "firstName" value={inputUser.firstName} placeholder="Nombre"  onChange={handleChange}/>
                <input type="text"name = "lastName" value={inputUser.lastName} placeholder="Apellido"  onChange={handleChange}/>
                <input type="text"name = "adress" value={inputUser.adress} placeholder="Direc."  onChange={handleChange}/>
                <input type="text" name = "phone" value={inputUser.phone} placeholder="telefono"  onChange={handleChange}/>

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
{/*           <MDBInput wrapperClass='mb-2' placeholder='Nombre...'  size='lg' id='form1' type='text'onChange={this.setRegisterName}/>
          <MDBInput wrapperClass='mb-2' placeholder='Apellido' size='lg' id='form1' type='text'onChange={this.setRegisterLastname}/>
          <MDBInput wrapperClass='mb-2' placeholder='Email' size='lg' id='form2' type='email'onChange={this.setRegisterEmail}/>
          <MDBInput wrapperClass='mb-2' placeholder='Telefono' size='lg' id='form3' type='tel'onChange={this.setRegisterPhone}/>
          <MDBInput wrapperClass='mb-2' placeholder='Password' size='lg' id='form4' type='password'onChange={this.setRegisterPassword}/>
          <MDBInput wrapperClass='mb-2' placeholder='Direccion' size='lg' id='form4' type='text' onChange={this.setRegisterAdress}/> */}
{/* <div className='d-flex flex-row justify-content-center mb-4'>
  <MDBCheckbox name='flexCheck' id='flexCheckDefault' placeholder='I agree all statements in Terms of service' />
</div> */}

{/* <div className='d-flex flex-row justify-content-center mb-4'>
<MDBCheckbox name='flexCheck' id='flexCheckDefault' placeholder='I agree all statements in Terms of service' />
</div> */}
{/* <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn> */}