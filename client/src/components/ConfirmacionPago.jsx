import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPedidos } from "../action";

import "../styles/PasarelaDePago.css";




export default function ConfirmacionPago(){

const dispatch = useDispatch()

const usuario = JSON.parse(localStorage.getItem("loguearUsuario"))

const todosPedidos = useSelector(state =>state.pedidos)

console.log(todosPedidos)
const pedidosUsuario = todosPedidos?.filter(pedido=>pedido.user[0]?._id == usuario.id )
console.log(pedidosUsuario)
const pedidosOrdenados = pedidosUsuario?.facheyhora?.sort((a,b)=>{return a>b?-1:1})
console.log("hola hola"+pedidosOrdenados)
  useEffect(() => {
  dispatch(getPedidos())
}, [dispatch])

  
  const handleSubmit = async (e) => {
  
    };
  

  return (
    <div id="paymentMain"className="container">

   
   
    </div>
  );
};

