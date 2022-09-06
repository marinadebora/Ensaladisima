import React from 'react';
import '../styles/Home.css';
import photo from '../images/ensaladaHome.jpg';
import video from '../images/video.mp4';
import collage1 from '../images/collage.png';
import healtyFood from '../images/healtyFood.jpeg';
import collage2 from '../images/collage1.png';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <div id="home">
        <NavBar/>
      <div class="container-fluid">
      
        <div class="row" id="bloque1">
          
            <div id="cuadradoText" class="col-7">

              <h1 class="col" id="texto0">POR QUE ELEGIRNOS?</h1>
              <p  class="col" id="texto1">
              Porque es sano, delicioso y divertido.<br/>
              Porque tiene todo lo que tu cuerpo necesita en un solo plato.<br/>
              Porque te ahorra tiempo y dinero.<br/>
              Porque querés probarlo.<br/>
              Porque no todo necesita un por qué!<br/>
              </p>
              <Link class="button" to="/menu">Conocé nuestro menú</Link>
            

            </div>
            <div class="col-5" id="photo1Container">
            <img src={photo} alt="img"  class="img-fluid" id="photo1"></img>
            </div>

        </div>

            <div class="row" id="bloque2">

                <div class="col" id="cuadradoText1">
                  <h1 id="titulo1Bloque2">ARMÁ</h1>
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
      
    </div>  
  )
}

export default Home
