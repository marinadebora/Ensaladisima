import React from 'react';

import {
 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,MDBInput,MDBBtn,MDBCheckbox 
}
from 'mdb-react-ui-kit';
import collage1 from '../images/collage1.png';
import "../styles/Registro.css"
import { useState } from "react";
import {PostRegistroUsuario} from "../action/index";
import {useDispatch, /* useSelector */} from "react-redux";
import {useNavigate} from "react-router-dom";


  function validate(inputUser) {
    let errors = {}
    if (!inputUser.firstName) errors.firstName = "Los campos con * son obligatorios"
    if (!inputUser.lastName) errors.lastName = "Los campos con * son obligatorios"
    if (!inputUser.email) errors.email = "Los campos con * son obligatorios"
    if (!inputUser.password) errors.password = "Los campos con * son obligatorios"
   // if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/).test(inputUser.password) errors.password = ""
    if (!(/^[a-zA-Z-\s]+$/).test(inputUser.firstName)) errors.firstName = "Sólo puede contener letras";
    if (!(/^[a-zA-Z-\s]+$/).test(inputUser.lastName)) errors.lastName = "Sólo puede contener letras";
    if (!(/^[\w-\s]+$/).test(inputUser.adress)) errors.adress = "S"
    if (inputUser.phone.length > 17) errors.phone = "El teléfono es demasiado largo";
    if (inputUser.phone.length < 5) errors.phone =  "El teléfono es demasiado corto";

    return errors
}



function Registro() {


  const history = useNavigate()
  const dispatch = useDispatch();
//const usuarios = useSelector(state =>state.usuarios)
  const [inputUser, setInputUser] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      adress:"",
      phone:""
  });

  const [errors,setErrors] = useState({})

  const handleChange = (e) => {
    setInputUser({
          ...inputUser,
          [e.target.name]: e.target.value
      })
      setErrors(validate({
        ...inputUser,
        [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = async (e) => {
      e.preventDefault()      
      if (  
        errors.firstName||
        errors.lastName||
        errors.email||
        errors.password||
        errors.adress||
        errors.phone||
        !inputUser.firstName) alert("Tienes errores en los campos")
        
      else{

        const  dispatchRegister = await dispatch(PostRegistroUsuario(inputUser));
        console.log(inputUser)
        if(!dispatchRegister){
          alert("Tienes errores en los campos")
        }else{
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
        
      }  
      
        
  }
 

  return (
    <div>
    <MDBContainer fluid>
      <MDBRow style={{paddingTop:"130px"}}>

        <MDBCol sm='5' className='d-none d-sm-block px-0  me-5'>
          <img src={collage1}
            alt="Login" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>
      
        <MDBCard className='ms-5' style={{maxWidth: '600px', border: "none", padding: "0px"}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-center mb-5" style={{fontFamily:"Tommy-regular", color:"#207140"}}>Crea tu cuenta</h2>

       

          <h1>Registro</h1>

          <form onSubmit={handleSubmit}>
          
          <MDBInput wrapperClass='mb-2' name = "firstName" value={inputUser.firstName} placeholder='Nombre*' size='lg' id='form1' type='text'onChange={handleChange}/>
          {errors.name && <p>{errors.firstName}</p>}
          <MDBInput wrapperClass='mb-2' name = "lastName" value={inputUser.lastName} placeholder='Apellido*' size='lg' id='form1' type='text'onChange={handleChange}/>
          {errors.lastName && <p>{errors.lastName}</p>}
          <MDBInput wrapperClass='mb-2' name = "email" value={inputUser.email} placeholder='Email*' size='lg' id='form2' type='email' onChange={handleChange}/>
          {errors.email && <p>{errors.email}</p>}
          <MDBInput wrapperClass='mb-2' name = "password" value={inputUser.password} placeholder='Password*' size='lg' id='form4' type='password'onChange={handleChange}/>
          {errors.password && <p>{errors.password}</p>}
          <MDBInput wrapperClass='mb-2' name = "phone" value={inputUser.phone} placeholder='Telefono' size='lg' id='form3' type='tel'onChange={handleChange}/>
          {errors.phone && <p>{errors.phone}</p>}
          <MDBInput wrapperClass='mb-2' name = "adress" value={inputUser.adress} placeholder='Direccion' size='lg' id='form4' type='text' onChange={handleChange}/> 
          {errors.adress && <p>{errors.adress}</p>}
 <div className='d-flex flex-row justify-content-center mb-4'>
  <MDBCheckbox name='flexCheck' id='flexCheckDefault' placeholder='I agree all statements in Terms of service' />
</div> 

               {/*  <input type="email" placeholder="email"  onChange={handleChange}/>
                <input type="password" placeholder="password" />
                <input type="text" placeholder="Nombre"  onChange={handleChange}/>
                <input type="text"name = "lastName" value={inputUser.lastName} placeholder="Apellido"  onChange={handleChange}/>
                <input type="text"name = "adress" value={inputUser.adress} placeholder="Direc."  onChange={handleChange}/>
                <input type="text" name = "phone" value={inputUser.phone} placeholder="telefono"  onChange={handleChange}/>
 */}
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

 <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn> 
