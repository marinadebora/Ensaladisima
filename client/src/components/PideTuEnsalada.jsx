import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { bases, complements, proteins, saladGUser, saladMUser, salads, saladsBig, sauces, toppings } from "../action";
import { useNavigate } from 'react-router-dom';
import { Bases } from "./Bases";
import { Complement } from "./Complement";
import { Protein } from "./Protein";
import { Sauce } from "./Sauce";
import { Toppings } from "./Toppings";
import { Tamaños } from './Tamaños';
import '../styles/PideTuEnsalada.css'
import { useLocalStorage } from "../useLocalStorage";
import img from '../images/ensaladaSola.png'
import ensaladaMediana from "../images/ensaladeraGreen.png";

export function PideTuEnsalada()
{
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const allMenuM = useSelector(state => state.salads)
  const allMenuG = useSelector(state => state.saladsBig)
  let precioM = allMenuM?.[0].price
  let precioG = allMenuG?.[0].price

  let [ensaladaG, setEnsaladaG] = useLocalStorage('ensaladaG', [])
  let [form, setForm] = useState({
    ensalada: []
  })

  let [ensaladaM, setEnsaladaM] = useLocalStorage('ensaladaM', [])
  let [formM, setFormM] = useState({
    ensalada: []
  })
  let [mediana, setMediana] = useLocalStorage('mediana', {})
  let [grande, setGrande] = useLocalStorage('grande', {})
  let ok = JSON.parse(localStorage.getItem('ok'))

  let big = () =>
  {

    let user = JSON.parse(localStorage.getItem('loguearUsuario'))
    let base = JSON.parse(localStorage.getItem('bases'))
    let proteinas = JSON.parse(localStorage.getItem('proteinas'))
    let complement = JSON.parse(localStorage.getItem('complement'))
    let salsa = JSON.parse(localStorage.getItem('salsa'))
    let topping = JSON.parse(localStorage.getItem('topping'))

    if(base&&complement){

      if (!user) {
        let ensalada = {
          _id: '2',
          base: base,
          proteinas: proteinas,
          complement: complement,
          salsa: salsa,
          topping: topping,
          price: precioG,
          image: img,
          name: 'Tu Ensalada'
        }
        setForm({
          ...form,
          ensalada: [...form.ensalada, ensalada],
  
        })
  
        setEnsaladaG([...ensaladaG, ensalada])
  
      } else {
  
        setGrande({
          email: user?.email,
          base: base,
          protein: proteinas,
          complement: complement,
          suace: salsa,
          topping: topping,
        })
        localStorage.removeItem('ensaladaG')
      }
      localStorage.removeItem('bases')
      localStorage.removeItem('proteinas')
      localStorage.removeItem('complement')
      localStorage.removeItem('salsa')
      localStorage.removeItem('topping')
  
      navigate("/cargando");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ensalada creada con exito',
        showConfirmButton: false,
        timer: 1200
      })
        .then((value) =>
        {
          switch (value) {
            default:
              navigate("/pideTuEnsalada");
              break
          }
        });
    }else{
      Swal.fire({
        icon: 'error',
        title:'😫' ,
        text: 'Sin base ni complemento no tienes 🥗',
      })
    }


  }

  let medium = () =>
  {
    let base = JSON.parse(localStorage.getItem('bases'))
    let proteinas = JSON.parse(localStorage.getItem('proteinas'))
    let complement = JSON.parse(localStorage.getItem('complement'))
    let salsa = JSON.parse(localStorage.getItem('salsa'))
    let topping = JSON.parse(localStorage.getItem('topping'))
    let user = JSON.parse(localStorage.getItem('loguearUsuario'))
    if(base&&complement){

      if (!user) {
  
        let ensalada = {
          _id: '1',
          base: base,
          proteinas: proteinas,
          complement: complement,
          salsa: salsa,
          topping: topping,
          price: precioM,
          image: img,
          name: 'Tu Ensalada'
        }
  
        setFormM({
          ...formM,
          ensalada: [...formM.ensalada, ensalada],
  
        })
        setEnsaladaM([...ensaladaM, ensalada])
      } else {
  
        setMediana({
          email: user?.email,
          base: base,
          protein: proteinas,
          complement: complement,
          suace: salsa,
          topping: topping,
        })
        localStorage.removeItem('ensaladaM')
  
      }
      localStorage.removeItem('bases')
      localStorage.removeItem('proteinas')
      localStorage.removeItem('complement')
      localStorage.removeItem('salsa')
      localStorage.removeItem('topping')
      navigate("/cargando");
      
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ensalada creada con exito',
            showConfirmButton: false,
            timer: 1200
          })
            .then((value) =>
            {
              switch (value) {
                default:
                  navigate("/pideTuEnsalada");
                  break
              }
            });
    }else{
      Swal.fire({
        icon: 'error',
        title:'😫' ,
        text: 'Sin base ni complemento no tienes 🥗',
      })
    }


  }


  useEffect(() =>
  {

    dispatch(bases())
    dispatch(proteins())
    dispatch(complements())
    dispatch(sauces())
    dispatch(toppings())
    dispatch(salads())
    dispatch(saladsBig())
    dispatch(saladMUser(mediana))
    dispatch(saladGUser(grande))
  }, [dispatch, grande, mediana])

  return (
    <div>
      <Tamaños />

      <div class='container'>

        <div class="row">

          <div id='contenedor-1' class='col-sm-12'>
            <Bases />
            <Protein />
            <Complement />
            <Sauce />
            <Toppings />
          </div>

          <div id="addContent">

            <button onClick={() => medium()} type="button" id="buttonAddEnsalada">
              <img src={ensaladaMediana} alt="img" id="ensaladeraGreen" />
              <p id="textButtonAddEnsaladaM">Mediana</p>
            </button>

            <button onClick={() => big()} id="buttonAddEnsalada">
              <img src={ensaladaMediana} alt="img" id="ensaladeraGreen" />
              <p id="textButtonAddEnsaladaG">Grande</p> </button>




          </div>

        </div>

      </div>


    </div>

  );
};