import React from 'react';
import "../styles/Card.css";
import ensaladaPrueba from "../images/ensaladaPrueba.png";





const Ensaladas = () => {
  return (
    <div id='ensaladaMarco'>
       <div>
        <img src={ensaladaPrueba} alt="img" id="ensaladaPrueba" />
        <h2 id="nombreEnsalada">Campera</h2>
       </div>
       <div id="ingredientes">
        <ul id="ingredientesUl">
        <span id="numberLi">1</span><li id="ingredientesLi">Base: Papa</li>
        <span id="numberLi">2</span><li id="ingredientesLi">Proteina: Atun</li>
        <span id="numberLi">3</span><li id="ingredientesLi">Complementos: Cebolla, Tomate, Pimiento verde, Pimiento rojo, Huevo</li>
        <span id="numberLi">4</span><li id="ingredientesLi">Salsas: Aceite de oliva, Vinagre de jerez</li>
        <span id="numberLi">5</span><li id="ingredientesLi">Topping: Aceitunas, Perejil fresco</li>
        </ul>
       </div>
    </div>


/* const Ensaladas = (image, name, base, protein, complement, sauce, topping) => {
  return (
    <div id='ensaladaMarco'>
      <div>
        <img src={image} alt="img" id="ensaladaPrueba" />
        <h2 id="nombreEnsalada">{name}</h2>
      </div>
          <div id="ingredientes">
          <ul id="ingredientesUl">
          <span id="numberLi">1</span><li id="ingredientesLi">Base: {base}</li>
          <span id="numberLi">2</span><li id="ingredientesLi">Proteina: {protein}</li>
          <span id="numberLi">3</span><li id="ingredientesLi">Complementos: {complement}</li>
          <span id="numberLi">4</span><li id="ingredientesLi">Salsas: {sauce}</li>
          <span id="numberLi">5</span><li id="ingredientesLi">Topping: {topping}</li>
          </ul>
          </div>
      </div> */






  )
}

export default Ensaladas