import React, { useState } from "react";
import "../styles/PasarelaDePago.css";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

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

const stripePromise = loadStripe("pk_test_51LSmj7J1G02QCFvGIp6Q0A7s2iF2hodQSpEJTlyOo4vlbVA09cB2oxGnR8ODzTVvOxvTXdKVQ8cYiDepTD75FpY600Z8kIW44N");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // setLoading(true);
    
    console.log(paymentMethod)

    if (!error) {
      
      console.log(paymentMethod)
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:4000/checkout",
          {
            id,
            amount: 10000, //cents
          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      // setLoading(false);
    }
  };

  // console.log(!stripe || loading);

  return (
    <div id="paymentMain"className="container">

   
    <form className="card card-body" onSubmit={handleSubmit}>
      {/* Product Information */}
      
      <h3 className="text-center my-2">Price: 100$</h3>

      {/* User Card Input */}
      <div className="form-group">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>

      <button disabled={!stripe} className="btn btn-success">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Buy"
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