import React from 'react';
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

function Registro() {
  return (
    
    <MDBContainer fluid>
      <MDBRow style={{paddingTop:"130px"}}>

        <MDBCol sm='5' className='d-none d-sm-block px-0  me-5'>
          <img src={collage1}
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

        <MDBCard className='ms-5' style={{maxWidth: '600px', border: "none", padding: "0px"}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-center mb-5" style={{fontFamily:"Tommy-regular", color:"#207140"}}>Crea tu cuenta</h2>
          <MDBInput wrapperClass='mb-2' label='Nombre' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-2' label='Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-2' label='Telefono' size='lg' id='form3' type='tel'/>
          <MDBInput wrapperClass='mb-2' label='Password' size='lg' id='form4' type='password'/>
          {/* <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div> */}

           <button type="submit" class="buttonChico2">
            Registrar
            </button>
            
            <p className='ms-5 mt-5'>Have already an account?<a href="/login" class="link-info"> Login</a></p>

          {/* <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>


        </MDBRow>

        </MDBContainer>

   
  );
}

export default Registro;