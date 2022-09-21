import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/PasarelaDePago.css";
import Swal from 'sweetalert2'
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import { useEffect } from "react";
import { getPedidos, postHistorialDeCompra } from "../action";
import { useNavigate } from "react-router-dom";
const stripePromise = loadStripe("pk_test_51LSmj7J1G02QCFvGIp6Q0A7s2iF2hodQSpEJTlyOo4vlbVA09cB2oxGnR8ODzTVvOxvTXdKVQ8cYiDepTD75FpY600Z8kIW44N");

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      backgroundColor:"white",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};






const CheckoutForm = () => {
const user = JSON.parse(localStorage.getItem("loguearUsuario"))
const dispatch =useDispatch()
const history = useNavigate()



  useEffect(() => {
  dispatch(getPedidos())
}, [dispatch])
const orders = useSelector(state=>state.pedidos)
let datos=JSON.parse(localStorage.getItem('datosCheckout'))
let preciototal = orders?.find(e =>e._id === user.orders[0])?.totalPayable
let data = orders?.find(e =>e._id === user.orders[0])

  const stripe = useStripe();
  const elements = useElements();
  
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  
    
    console.log(paymentMethod)

    if (!error) {
      

      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:4000/checkout",
          {
            id,
            amount: preciototal*100, //cents
          }
        );

        console.log(data);
        
        elements.getElement(CardElement).clear();
        Swal.fire({
          position: 'center',
          icon: "success",
          title: 'Pago realizado con exito',
          showConfirmButton: false,
          timer: 1500
        })
        dispatch(postHistorialDeCompra({_id:user.id,totalPayable:preciototal}))
        history("/confirmacionPago")
        window.location.reload()
        setLoading(false)
        
      } catch (error) {
        alert("Los datos no concuerdan");
      }
      setLoading(false);
    }
  };

  // console.log(!stripe || loading);

  return (
    
    <div id="paymentMain"className="container">
      
   
    <form className="card card-body" onSubmit={handleSubmit}>
    {data?.facheyhora&&<div> <p className="text-left my-2">Fecha: {data?.facheyhora?.split('T')[0]}</p><p className="text-end my-2">{data?.facheyhora?.split('T')[1].split('.')[0]} Hs.  </p></div> }
    {data?.user&& <p className="text-left my-2"> {data.user.firstName} {data.user.lastName} Tel: {data.user.phone}</p>}
    {datos&& <p className="text-left my-2"> {datos.adress} </p>}
    {datos&& <p className="text-left my-2"> delivery: {datos.delivery?'✔':'❌'} </p>}
    {datos&& <p className="text-left my-2">Comentarios:  {datos.comentario}</p>}
    {data?.salads&&data.salads?.map(e=><p className="text-left my-2">1 {e.name} US${e.price}</p>)}
    {data?.beverages&&data.beverages?.map(e=><p className="text-left my-2">1 {e.name} US${e.price}</p>)}
    {data?.desserts&&data.desserts?.map(e=><p className="text-left my-2">1 {e.name} US${e.price}</p>)}
      
      <h5 className="text-center my-2">Price: US${preciototal}</h5>

      {/* User Card Input  beverages*/}
      <div className="form-group">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>

      <button disabled={loading} className="btn btn-success">
        {loading ? (
          <button class="btn btn-success" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Procesando...
        </button>
        ) : (
          "Comprar"
        )}
      </button>
    </form>
    </div>
    
  );
};

function PasarelaDePago() {
  return (
   
    <Elements stripe={stripePromise}>
      
          <div id="checkOutContainer">
  
          <CheckoutForm />

        </div>
    </Elements>
    
  );
}

export default PasarelaDePago;