import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPedidos, usuariosRegistrados } from "../action";
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'
import "../styles/PasarelaDePago.css";
import NavBar from "./NavBar";




export default function ConfirmacionPago(preciototal){

const dispatch = useDispatch()
const history = useNavigate()
let usuario = JSON.parse(localStorage.getItem("loguearUsuario"))


const usuarito = useSelector(state =>state.usuarios)
console.log(usuarito)

const usuarioAModificar = usuarito?.find(e=>e._id === usuario?.id)
console.log(usuarioAModificar)
const pedidoNuevo = usuarioAModificar?.orders[0]?._id
console.log(pedidoNuevo)

  console.log(usuario)
  let usuarioLocalStorage = {
    admin: usuario?.admin,
    adress: usuario?.adress,
    email: usuario?.email,
    firstName: usuario?.firstName,
    id: usuario?.id,
    lastName: usuario?.lastName,
    orders: [pedidoNuevo],
    token: usuario?.token 
  }
  console.log(usuarioLocalStorage)
  function handleClick(){
    localStorage.removeItem("postres")
    localStorage.removeItem("bebidas")
    localStorage.removeItem("ensdaladaM")
    localStorage.removeItem("ensaladaG")
    localStorage.removeItem("medianas")
    localStorage.removeItem("grandes")
    localStorage.removeItem("datosCheckout")
    const usuario = localStorage.setItem("loguearUsuario",JSON.stringify(usuarioLocalStorage))
    console.log(usuario)
    history("/menu")
  

    Swal.fire({
      position: 'center',
      icon: "success",
      title: 'Se ha confirmado su compra',
      showConfirmButton: false,
      timer: 2500
    })
    };
    useEffect(() => {
    dispatch(getPedidos())
    dispatch(usuariosRegistrados())
    },[dispatch])
  

  return (
    <div id="paymentMain"className="container">
      <NavBar/>
      <br /><br /><br /><br /><br /><br /><br /><br />
    <h3>Solo falta un ultimo paso </h3>
    <p>Ahora simplemente debes dar click al siguiente boton para finalizar tu compra y recibir el detalle</p>
    <button onClick={handleClick}>Confirmar</button>
    </div>
  );
};

