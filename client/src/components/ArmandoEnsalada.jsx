import React from "react";
import '../styles/ArmandoEnsalada.css'

export const ArmandoEnsalada = () => {
  return(
     <div className="containerCargando">
        <img className="imagenCargando" src='https://res.cloudinary.com/deqbqghhq/image/upload/v1662939393/ensaladas/picasion.com_29ab692adcf8662f1e93414c74e6299f_1_k6afys.gif' alt="cargando" />
        <h1 className="h1Cargando">Agregando al pedido...</h1>
    </div>
);
};
