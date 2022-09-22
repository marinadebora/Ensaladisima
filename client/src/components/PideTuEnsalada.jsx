import React, { useEffect } from "react";
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { bases, complements, proteins, saladGrande, saladGUser, saladMediana, saladMUser, salads, saladsBig, sauces, toppings } from "../action";
import { useNavigate } from 'react-router-dom';
import { Bases } from "./Bases";
import { Complement } from "./Complement";
import { Protein } from "./Protein";
import { Sauce } from "./Sauce";
import { Toppings } from "./Toppings";
import { Tamaños } from './Tamaños';
import '../styles/PideTuEnsalada.css'
import ensaladaMediana from "../images/ensaladeraGreen.png";
import NavBar from "./NavBar";

export function PideTuEnsalada()
{
  const dispatch = useDispatch()
  const navigate = useNavigate()


  let big = () =>
  {

    let user = JSON.parse(localStorage.getItem('loguearUsuario'))
    let base = JSON.parse(localStorage.getItem('bases'))
    let proteinas = JSON.parse(localStorage.getItem('proteinas'))
    let complement = JSON.parse(localStorage.getItem('complement'))
    let salsa = JSON.parse(localStorage.getItem('salsa'))
    let topping = JSON.parse(localStorage.getItem('topping'))

    if (base && proteinas) {

      if (!user) {

        let ensalada = {
          base: base,
          protein: proteinas,
          complement: complement,
          suace: salsa,
          topping: topping,

        }
        dispatch(saladGrande(ensalada))

      } else {

        let grande = {
          email: user?.email,
          base: base,
          protein: proteinas,
          complement: complement,
          suace: salsa,
          topping: topping,
        }
        dispatch(saladGUser(grande))
      }
      localStorage.removeItem('bases')
      localStorage.removeItem('proteinas')
      localStorage.removeItem('complement')
      localStorage.removeItem('salsa')
      localStorage.removeItem('topping')

      navigate("/cargando");
      Swal.fire({
        
        title: '😉',
        text:'Ensalada creada con exito',
        showConfirmButton: false,
        timer: 1500
      })
        .then((value) =>
        {
          switch (value) {
            default:
              navigate("/pideTuEnsalada");
              break
          }
        });
    } else {
      Swal.fire({
        title: '😫',
        text: 'Sin base ni proteina no tienes 🥗',
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

    if (base && proteinas) {

      if (!user) {
        let ensalada = {
          base: base,
          protein: proteinas,
          complement: complement,
          suace: salsa,
          topping: topping,
        }

        dispatch(saladMediana(ensalada))
      } else {

        let mediana = {
          email: user?.email,
          base: base,
          protein: proteinas,
          complement: complement,
          suace: salsa,
          topping: topping,
        }
        dispatch(saladMUser(mediana))
      }

      localStorage.removeItem('bases')
      localStorage.removeItem('proteinas')
      localStorage.removeItem('complement')
      localStorage.removeItem('salsa')
      localStorage.removeItem('topping')

      navigate("/cargando");

      Swal.fire({
        title: '😉',
        text:'Ensalada creada con exito',
        showConfirmButton: false,
        timer: 1500

      })
        .then((value) =>
        {
          switch (value) {
            default:
              navigate("/pideTuEnsalada");
              break
          }
        });
    } else {
      Swal.fire({
        title: '😫',
        text: 'Sin base ni Proteina no tienes 🥗',
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

  }, [dispatch])

  return (
    <div>
      <NavBar/>
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