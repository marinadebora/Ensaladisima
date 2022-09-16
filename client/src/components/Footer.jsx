import React from 'react';
import '../styles/Footer.css';
import  logoWhite  from '../images/ensaladisimaLogoWhite.png'
import { VerReview } from './VerReview';



const Footer = () => {

  return (
    
        <div class="container-fluid" id="footerInfo" >
        <VerReview/>
          <div class="col-3" id="logocontent">
          <img src={logoWhite} alt="img" id="logoWhite"/>
          </div>
          <div class="col-3" id="buscanos">Buscanos en redes</div>
          <div class="col-3" id="logoGroup">
            <i class="bi bi-instagram" id="igLogo"/>
            <i class="bi bi-facebook" id="igLogo"/>
            <i class="bi bi-tiktok" id="igLogo"/>
          </div>
        </div>
  )
}

export default Footer
