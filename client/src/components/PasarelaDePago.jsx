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

let preciototal = orders?.find(e =>e._id === user.orders[0]).totalPayable

console.log(preciototal)
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
        setLoading(false)
        Swal.fire({
          position: 'center',
          icon: "success",
          title: 'Pago realizado con exito',
          showConfirmButton: false,
          timer: 1500
        })
        dispatch(postHistorialDeCompra({_id:user.id,totalPayable:preciototal}))
        history("/ConfirmacionPago")
        
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
      {/* Product Information */}
      
      <h3 className="text-center my-2">Price: ${preciototal}</h3>

      {/* User Card Input */}
      <div className="form-group">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>

      <button disabled={!stripe} className="btn btn-success">
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