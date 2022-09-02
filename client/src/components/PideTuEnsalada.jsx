import React from "react";
import { Bases } from "./Bases";
import { Complement } from "./Complement";
import { Protein } from "./Protein";
import { Sauce } from "./Sauce";
import { Toppings } from "./Toppings";
import {SideBarFront} from './SideBarFront';
import {Tamaños} from './Tamaños';
import ensaladaMediana from "../images/ensaladera.png";
import ensaladaGrande from "../images/ensaladera.png";
import '../styles/PideTuEnsalada.css'

export function PideTuEnsalada() {

  return( 
  <div>
      <Tamaños/>
      <div class='container-fluid'>
        <div class="row">
              <div id='contenedor-1' class='col-sm-9'>
                <Bases />
                <Protein />
                <Complement />
                <Sauce />
                <Toppings />
              </div>
              <div class="col-sm-3" id='sideBarContent'>
              <SideBarFront/>
              </div>
        </div>
      </div>
      
  </div>);
};
