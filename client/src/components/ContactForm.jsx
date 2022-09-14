import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate }from 'react-router-dom';
import { contactForm } from "../action/index";
import "./../styles/ContactForm.css"

//const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name:'',
    email:'',
    message:'',
    telefono:''
  })
  
  const handleOnChange = (e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    console.log(data)
  }
  

  const handleSubmit = () => {
    dispatch(contactForm(data))
    alert('Consulta enviada exitosamente')
    navigate("/menu")
   
/*     setTimeout(() => {
      setSubmitted(true);
    }, 100); */
  };


/*   if (submitted) {
   return (
     <>
      <div id="mainContainerContactOK">
        <img  alt='img' id='imageCompraFinal'/>
        <div id='messageContactOK' className="text-2xl">Gracias!</div>
        <div id='messageContactOK' className="text-md">Te contactaremos pronto.</div>
       </div>
     </>
   );
 } */



 return (
    <div id="contactFormMain">
        <form className="contactForm"
        //   action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        >
        <h1 id="tittleContactForm">Contacto</h1>
        <div className="mb-3 pt-0">
        <label>Nombre: </label>
            <input
            type="text"
            placeholder="Your name"
            name="name"
            onChange={handleOnChange}
            required
            />
        </div>
        <div className="mb-3 pt-0">
        <label>Email: </label>
            <input

            type="email"
            placeholder="Email"
            name="email"
            onChange={handleOnChange}
            required
            />
        </div>
        <div className="mb-3 pt-0">
        <label>Telefono: </label>
            <input

            type="text"
            placeholder="11111111111111"
            name="telefono"
            onChange={handleOnChange}
            required
            />
        </div>
        <div className="mb-3 pt-0">
        <label>Dejanos tu consulta: </label>
            <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded-20 text-sm border-1 outline-none focus:outline-none focus:ring w-full"
            onChange={handleOnChange}
            required
            />
        </div>
        <div className="mb-3 pt-0">
            <button class="buttonChico2" 
            type="submit"
            >
            Enviar
            </button>
        </div>
        {/* <button id='buttonBackFormContact' onClick={volver}>Volver</button> */}
        <Link id="butonCarrouselMain" to="/menu">
            <i id="butonCarrousel" class="bi bi-arrow-left-circle-fill"> Volver a la tienda</i>
        </Link>
        </form>
    </div>
  );
};

export default ContactForm;