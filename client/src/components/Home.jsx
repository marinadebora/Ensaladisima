import React from 'react';
import '../styles/Home.css';
import photo from '../images/ensaladaHome.jpg';
import video from '../images/video.mp4';
import collage1 from '../images/collage.png';
import healtyFood from '../images/healtyFood.jpeg';
import collage2 from '../images/collage1.png';
import  logoWhite  from '../images/ensaladisimaLogoWhite.png'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div id="home">
        <NavBar/>
      <div class="container-fluid">
      
        <div class="row" id="bloque1">
          
          <div id="cuadradoText" class="col-7">
            
              <h1 class="col" id="texto0">POR QUE ELEJIRNOS?</h1>
              <p  class="col" id="texto1">
              Porque es sano, delicioso y divertido.<br/>
              Porque tiene todo lo que tu cuerpo necesita en un solo plato.<br/>
              Porque te ahorra tiempo y dinero.<br/>
              Porque queres probarlo.<br/>
              Porque no todo necesita un por qué!<br/>
              </p>
              <div id="button" class="col" >
              <Link class="button" to="/menu">Conoce nuestro menu</Link>
              </div>
            
            </div>
            <img src={photo} class="col-5" alt="img" id="photo"></img>

        </div>

        <div class="row" id="bloque2">
                <div class="col" id="cuadradoText1">
                  <h1 id="titulo1Bloque2">ARMA</h1>
                  <p id="texto2">
                  </p>
                </div>
                <div class="col">
                  <video  id="video" src={video} autoPlay loop muted/> 
                </div>
                <div class="col" id="cuadradoText2">
                  <h1 id="titulo2Bloque2">TU PROPIA<br/>ENSALADA</h1>
                  <p id="texto3">
                </p>
            </div>
        </div> 

        <div  class="row" id="bloque3">
              <img class="col" src={collage2} id="collage2" alt="img"/>
              <img class="col" src={healtyFood} id="healtyFood" alt="img"/>
              <img class="col" src={collage1}  id="collage1" alt="img"/>
        </div>

      </div>
      
        <div class="container-fluid" id="footerInfo" >
        
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
      
        
         
     
    </div>  
  )
}

export default Home