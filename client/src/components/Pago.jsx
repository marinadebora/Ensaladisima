import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import collage from '../images/collage.png';
import "../styles/Login.css"
import "../styles/PasarelaDePago.css"
import { Link } from 'react-router-dom';
import PasarelaDePago from "./PasarelaDePago";
import Navbar from "./NavBar";


function Pago() {
  
  return (
    
    <MDBContainer fluid>
      <Navbar/>
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

          <div className='d-flex flex-column justify-content-center h-custom-1 w-100 pt-2'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Pago</h3>

            <PasarelaDePago/>
            
            <Link id="butonPagoBack" to="/checkout">
                 <i id="butonCarrousel" class="bi bi-arrow-left-circle-fill"> Volver</i>
            </Link>

          </div>

        </MDBCol>
      </MDBRow>

    </MDBContainer>

   
  );
}

export default Pago;
