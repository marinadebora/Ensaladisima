import React from 'react';
import '../styles/Home.css';
import NavBarMenu from './NavBarMenu';
import Ensaladas from './Ensaladas';
import Bebidas from './Bebidas';
import Postres from './Postres';
import ensaladaMediana from "../images/ensaladera.png";
import ensaladaGrande from "../images/ensaladera.png";
import { useEffect/* , useState  */} from "react";
import { useDispatch, useSelector } from "react-redux";
import { salads } from "../action/index.js";
import "../styles/Menu.css";
import CarrouselEP from './CarrouselEP';





const Menu = () => {

  const dispatch = useDispatch();
  const allSalads = useSelector((state) => state.salads);

  useEffect(() => {
    dispatch(salads());
  }, [dispatch]);

  console.log(allSalads);

  return (
    <div>
       <NavBarMenu/>
    <div class="container">

       
        <CarrouselEP/>
        <h1 id="tituloMenu"> Ensaladas de la casa</h1>

  
        <div id="tamaños">
          <h4 id="tamaño">Opciones de tamaño:</h4>
          <img src={ensaladaMediana} alt="img" id="ensaladaMediana" />
          <h5 id="tamañoPrecioM">Mediana: u$d 13</h5>
          <img src={ensaladaGrande} alt="img" id="ensaladaGrande" />
          <h5 id="tamañoPrecioG">Grande: u$d 15</h5>
        </div>

        <div class="divisorMenu">..............................................................</div>

        <div  id="ensaladasDeLaCasa">
        
          {
            
             allSalads?.map(e =>(
              <Ensaladas
              name={e.name}
              image={e.image}
              base={e.base}
              protein={e.protein}
              complement={e.complement}
              sauce={e.sauce}
              topping={e.topping}
        />
            ))
          }
          
        </div>
        <div class="clearFix"></div>

        <div class="divisorMenu">..............................................................</div>

        <div id="bebidas">
          <h1 id="tituloMenu">Bebidas</h1>
          <Bebidas/>
        </div>

        <div class="divisorMenu">..............................................................</div>

        <div id="postres">
          <h1 id="tituloMenu">Postres</h1>
          <Postres/>
        </div>
       
    </div>
    </div>
  )
}

export default Menu