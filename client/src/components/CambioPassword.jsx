import React, { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMailUsuario, putPassword, usuariosRegistrados } from "../action";
import { useNavigate } from "react-router-dom";
import "./../styles/ContactForm.css"
import Swal from 'sweetalert2'

/// funcion para enviar el mail de confirmacion para cambiar la password

export default function SendEmail(){
    const usuarios1 = useSelector(state =>state.usuarios)
    const dispatch = useDispatch()
    const history =useNavigate()
    
    useEffect(()=>{
        dispatch(usuariosRegistrados())
    },[dispatch])
    
    
    
    const [input,setInput]=useState({
        email:""
    })
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const buscar = usuarios1.find(e=> e.email === input.email)
    if (buscar) {
      dispatch(getMailUsuario(input))
      Swal.fire({
        title: '📧',
        text:'Revisa tu correo',
        showConfirmButton: false,
        timer: 1500
      })
      setInput({
        email:""
      })
      history("/menu")
    }else{
        Swal.fire({
            title: '🚨',
            text:'Usuario no encontrado',
           
          })
    }

}
return(
    <div id="contactFormMain">
        <div class="contactFormPasword">
            
            <div id="tittleContactForm"><h1>Ingresa tu email</h1></div>
            <form onSubmit={handleSubmit}>
            <div>
            <label>Email: </label><input type="text" value={input.email}  name="email" onChange={handleChange} />
            </div>
            <button class="buttonChicoPassword" type='submit'>Enviar correo</button>
            <Link class="buttonChicoPassword" to="/menu">Volver</Link>
            </form>
        </div>
    </div>
)

}

/// funcion para cambiar la password

export  function CambioPassword(){
    const usuariossss = useSelector(state =>state.usuarios)
    const {_id}= useParams()
    const dispatch = useDispatch()
    const history =useNavigate()
    
    useEffect(()=>{
        dispatch(usuariosRegistrados(_id))
    },[dispatch,_id])
    
    
    
    const [input,setInput]=useState({
        password:"",
        password1:""
    })
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const buscar = usuariossss.find(e=> e._id === _id)
        console.log(buscar)
    if (buscar._id) {
        if(input.password !== input.password1)Swal.fire({title: '🚨',text:'Los password no coinciden'})
        else{
            dispatch(putPassword(_id,input))
            Swal.fire({title: '😉', text:'Password actualizada'})
      setInput({
        password:"",
        password1:""
      })
      history("/menu")
        }
      
    }else{
        Swal.fire({title: '🚨',text:'Usuario no encontrado'})
    }
}
return(
    <div id="contactFormMain">
        <div class="contactFormPasword1">

            <div id="tittleContactForm"><h1>Completa los campos</h1></div>
            <form onSubmit={handleSubmit}>
            {/* <div>
            <label>Email: </label><input type="text" value={input.email}  name="email" onChange={handleChange} />
        </div> */}
            <div>
            <label>Nuveva contraseña: </label><input type="text" value={input.password}  name="password" onChange={handleChange} />
            </div>
            <div>
            <label>Repite contraseña: </label><input type="text" value={input.password1}  name="password1" onChange={handleChange} />
            </div>
            <button class="buttonChicoPassword" type='submit'>Actualizar password</button>
            <Link class="buttonChicoPassword" to="/menu">Volver</Link>
            </form>

        </div>
    </div>
)

}