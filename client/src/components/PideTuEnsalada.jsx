import React from "react";
import { Bases } from "./Bases";
import { Complement } from "./Complement";
import { Protein } from "./Protein";
import { Sauce } from "./Sauce";
import { Toppings } from "./Toppings";

export function PideTuEnsalada() {

  return( 
  <div>
     <Bases />
    <Protein />
    <Complement />
    <Sauce />
    <Toppings />
   
  </div>);
};
