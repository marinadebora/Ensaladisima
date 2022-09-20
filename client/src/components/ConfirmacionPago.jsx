import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPedidos } from "../action";
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'
import collage from '../images/collage.png';
import "../styles/PasarelaDePago.css";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import NavBar from "./NavBar";



export default function ConfirmacionPago(){

const dispatch = useDispatch()
const history = useNavigate()
let usuario = JSON.parse(localStorage.getItem("loguearUsuario"))

const todosPedidos = useSelector(state =>state.pedidos)

console.log(todosPedidos)
const pedidosUsuario = todosPedidos?.filter(pedido=>pedido.user?._id === usuario.id )
console.log(pedidosUsuario)
const nuevoPedido = pedidosUsuario?.find(pedido=> pedido?.salads?.length === 0 && pedido?.beverages?.length === 0  && pedido?.desserts?.length === 0)
console.log(nuevoPedido)


  console.log(usuario)
  let usuarioLocalStorage = {
    admin: usuario?.admin,
    adress: usuario?.adress,
    email: usuario?.email,
    firstName: usuario?.firstName,
    id: usuario?.id,
    lastName: usuario?.lastName,
    orders: [nuevoPedido?._id],
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
    localStorage.setItem("loguearUsuario",JSON.stringify(usuarioLocalStorage))
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
    }, [dispatch])
  

  return (


    <div className="container-fluid">

      <NavBar/>
      <MDBContainer fluid>
      <MDBRow style={{paddingTop:"130px"}}>

        <MDBCol sm='5' className='d-none d-sm-block px-0  me-5'>
          <img src={collage}
            alt="Login img" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

        <MDBCol id="confirmMain" sm='5'className='ms-5'>

        <h3 id="titleConfirm">Solo falta un ultimo paso </h3>
        <p id="textConfirm">Ahora simplemente debes dar click al siguiente boton para finalizar tu compra y recibir el detalle</p>
        <div id="butonPagoConfirmContent">
         <button id="butonPagoConfirm" onClick={handleClick}>Confirmar</button>
        </div>

        </MDBCol>

      

      </MDBRow>

    </MDBContainer>
</div>







    
    
    
  );
};

