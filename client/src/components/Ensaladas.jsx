import React from 'react';
import "../styles/Card.css";





const Ensaladas = ({image, name, base, protein, complement, sauce, topping}) => {

  return (
    <div id='ensaladaMarco' class="container-fluid">
      <div>
        <img src={image} alt="img" id="ensaladaImagen" />
        <div class="row" id="addContent">
          <a class="col-3" id="textButtonAdd">Mediana</a>
          <button class="col-1" id="buttonAddM">
          <i class="bi bi-plus-circle-fill"></i>
          </button>

          <a class="col-3" id="textButtonAdd">Grande</a>
          <button class="col-1" id="buttonAddG">
          <i class="bi bi-plus-circle-fill"></i>
          </button>
        </div>
        <h2 id="nombreEnsalada">{name.toUpperCase()}</h2>
      </div>
          <div id="ingredientes">
          <ul id="ingredientesUl">
            <span id="numberLi">1</span><a id="tipoIngrediente">Base: </a> {base?.map(e => <li id="ingredientesLi"> {e}</li>)} 
            <span id="numberLi">2</span><a id="tipoIngrediente">Proteina: </a> {protein?.map(e => <li id="ingredientesLi"> {e}</li>)}
            <span id="numberLi">3</span><a id="tipoIngrediente">Complementos: </a> {complement?.map(e => <li id="ingredientesLi"> {e}</li>)}
            <span id="numberLi">4</span><a id="tipoIngrediente">Salsas: </a> {sauce?.map(e => <li id="ingredientesLi"> {e}</li>)}
            <span id="numberLi">5</span><a id="tipoIngrediente">Topping: </a> {topping?.map(e => <li id="ingredientesLi"> {e}</li>)}
          </ul>
          </div>
      </div>






  )
}

export default Ensaladas