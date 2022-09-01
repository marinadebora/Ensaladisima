import React from "react";
import { Bases } from "./Bases";
import { Complement } from "./Complement";
import { Protein } from "./Protein";
import { Sauce } from "./Sauce";
import { Toppings } from "./Toppings";
import ensaladaMediana from "../images/ensaladera.png";
import ensaladaGrande from "../images/ensaladera.png";
import '../styles/PideTuEnsalada.css'

export function PideTuEnsalada() {

  return( 
  <div className="contain-tamaños">
    <h1 id="h1-crea">Crea tu ensalada</h1>
        <div id="tamaño-contain">
          <h4 id="tamaño">Opciones de tamaño:</h4>
          <img src={ensaladaMediana} alt="img" id="ensaladaMediana" />
          <h5 id="tamañoPrecioM">Mediana: u$d 13</h5>
          <img src={ensaladaGrande} alt="img" id="ensaladaGrande" />
          <h5 id="tamañoPrecioG">Grande: u$d 15</h5>
        </div>
      

     <Bases />
    <Protein />
    <Complement />
    <Sauce />
    <Toppings />
   
  </div>);
};
