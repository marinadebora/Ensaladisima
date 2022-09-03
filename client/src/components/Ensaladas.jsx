import React from 'react';
import "../styles/Card.css";





const Ensaladas = ({image, name, base, protein, complement, sauce, topping}) => {

  return (
    <div id='ensaladaMarco' class="container-fluid">
      <div>
        <img src={image} alt="img" id="ensaladaImagen" />
        <div class="row" id="addContent">
          <a href=' ' class="col-3" id="textButtonAdd">Mediana</a>
          <button class="col-1" id="buttonAddM">
          <i class="bi bi-plus-circle-fill"></i>
          </button>

          <a href=' ' class="col-3" id="textButtonAdd">Grande</a>
          <button class="col-1" id="buttonAddG">
          <i class="bi bi-plus-circle-fill"></i>
          </button>
        </div>
        <h2 id="nombreEnsalada">{name.toUpperCase()}</h2>
      </div>
          <div id="ingredientes">
          <ul id="ingredientesUl">

            <span id="numberLi">1</span><p id="tipoIngrediente">Base: </p> {base?.map(e => <li id="ingredientesLi"> {e}</li>)} 
            <span id="numberLi">2</span><p id="tipoIngrediente">Proteina: </p> {protein?.map(e => <li id="ingredientesLi"> {e}</li>)}
            <span id="numberLi">3</span><p id="tipoIngrediente">Complementos: </p> {complement?.map(e => <li id="ingredientesLi"> {e}</li>)}
            <span id="numberLi">4</span><p id="tipoIngrediente">Salsas: </p> {sauce?.map(e => <li id="ingredientesLi"> {e}</li>)}
            <span id="numberLi">5</span><p id="tipoIngrediente">Topping: </p> {topping?.map(e => <li id="ingredientesLi"> {e}</li>)}

          </ul>
          </div>
      </div>

  )
}

export default Ensaladas