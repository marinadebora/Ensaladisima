import React from 'react';
import '../styles/Footer.css';
import  logoWhite  from '../images/ensaladisimaLogoWhite.png'
import { VerReview } from './VerReview';
import { Map } from './Map';




const Footer = () => {

  return (
    
        <div class="container-fluid" id="footerContent" >
          <div class="row" id="footerInfo" >
            <div class='col-2' id="footerInfoContent" >
              <div class="row" id="logocontent">
              <img src={logoWhite} alt="img" id="logoWhite"/>
              </div>
              <div class="row" id="buscanos">Buscanos en redes</div>
              <div class="row" id="logoGroupContent">
                <p class="col" id="logoGroupContent1">
                  <i class="bi bi-instagram" id="igLogo"/>
                  <i class="bi bi-facebook" id="igLogo"/>
                  <i class="bi bi-tiktok" id="igLogo"/>
                </p>
              </div>
            </div>
            <div class="col-6" id="review">
              <h4 id="reviewTitle">La opinion de nuestros clientes:</h4>
              <VerReview/>
            </div>
            <div class="col-4" id="map">
              <h4 id="mapTitle">Ubicación:</h4>
              <Map/>
            </div>
          </div>
        </div>
  )
}

export default Footer
