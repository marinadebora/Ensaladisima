import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, Link} from 'react-router-dom';
import { getReview, reviewCreada } from "../action";
import Swal from 'sweetalert2'
import '../styles/Review.css'
import NavBar from "./NavBar";

export const Review = () =>
{
  const comentarios=useSelector(state=>state.comentarios)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const usuario = JSON.parse(localStorage.getItem("loguearUsuario"))
  const [review, setReview] = useState({
    firstName: usuario.firstName,
    lastName: usuario.lastName,
    email: usuario.email,
    estrellas: 0,
    comentarios: ''

  })

  let comentariosUser=comentarios?.filter(e=>e._id===usuario._id)
  console.log(comentariosUser?.length)
  useEffect(()=>{
dispatch(getReview())
  },[dispatch])




  function puntuacion(e)
  {
      setReview({
      ...review,
      [e.target.name]: e.target.value
    })

  }

 async function handleSubmit(e)
  {
    e.preventDefault()
    if(comentariosUser){
      await Swal.fire({
        icon: 'error',
        title: '🚨',
        text: 'ya nos calificaste',
      })
      navigate('/')
    }else{

      if(review.comentarios&&review.estrellas){
        dispatch(reviewCreada(review))
        await  Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Calificacion enviada con exito ',
            showConfirmButton: false,
            timer: 1500
          })
         navigate('/')//ver a donde quiero que me lleve esto
      }else{
        Swal.fire({
          icon: 'error',
          title: '😫',
          text: 'faltan completar campos',
        })
      }
    }
  
    
  }
  function handleChange(e)
  {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    })
   

  }
  // function cancel(e)
  // {
  //   e.preventDefault()
  //   navigate(`/`)//ver a donde quiero que me lleve esto
  // }
  console.log(review)


  return (
    <div>
     <NavBar /> 
     <h2 id="titleReview">Dejamos tu califiación</h2>
      {
        <div id="mainReviewContainer">

          <form onSubmit={handleSubmit}>
          <div id="contenedor" class="container">
            <div class="row">
              <p class="clasificacion">
                <input className='input' onChange={puntuacion} id="radio1" type="radio" name="estrellas" value="5" /><label className='label' for="radio1">★</label>
                <input className='input' onChange={puntuacion} id="radio2" type="radio" name="estrellas" value="4" /><label className='label' for="radio2">★</label>
                <input className='input' onChange={puntuacion} id="radio3" type="radio" name="estrellas" value="3" /><label className='label' for="radio3">★</label>
                <input className='input' onChange={puntuacion} id="radio4" type="radio" name="estrellas" value="2" /><label className='label' for="radio4">★</label>
                <input className='input' onChange={puntuacion} id="radio5" type="radio" name="estrellas" value="1" /><label className='label' for="radio5">★</label>
              </p>
              </div>
            <div class="row">
              {
              
                <div class="form-floating">
                  <textarea
                    type='text'
                    name='comentarios'
                    placeholder="dejanos tu comentario"
                    value={review.comentarios}
                    onChange={handleChange}
                    class="form-control"
                  > </textarea>
                </div>
              }
            </div>

            <div id="buttonCalificarContent" class="row">
            <input type="submit" value="Enviar" id="buttonCalificar"/>
            </div>

            </div>
            <div id="buttonBackContent"class="row" >
              <Link id="butonCarrouselMain" to="/menu">
                <i id="butonCarrousel" class="bi bi-arrow-left-circle-fill"> Volver a la tienda</i>
              </Link>
            </div>
          </form>
          
          
        </div>
      }

    </div>
  )
};
