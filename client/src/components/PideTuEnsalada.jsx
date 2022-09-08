import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { bases, complements, proteins, salads, saladsBig, sauces, toppings } from "../action";
import { useNavigate } from 'react-router-dom';
import { Bases } from "./Bases";
import { Complement } from "./Complement";
import { Protein } from "./Protein";
import { Sauce } from "./Sauce";
import { Toppings } from "./Toppings";
import {Tamaños} from './Tamaños';
import '../styles/PideTuEnsalada.css'
import { useLocalStorage } from "../useLocalStorage";
import img from '../images/ensaladaSola.png'

export function PideTuEnsalada() {
const dispatch = useDispatch()
const navigate=useNavigate()
const allMenuM= useSelector(state=>state.salads)
const allMenuG= useSelector(state=>state.saladsBig)
let precioM =allMenuM?.[0].price
let precioG =allMenuG?.[0].price
console.log(allMenuG)
let [ensaladaG, setEnsaladaG] = useLocalStorage('ensaladaG', [])
let [form, setForm] = useState({
    ensalada: []
  })

let [ensaladaM, setEnsaladaM] = useLocalStorage('ensaladaM', [])
let [formM, setFormM] = useState({
      ensalada: []
    })


let big = () =>
{
let base=JSON.parse(localStorage.getItem('bases'))
let proteinas=JSON.parse(localStorage.getItem('proteinas'))
let complement=JSON.parse(localStorage.getItem('complement'))
let salsa=JSON.parse(localStorage.getItem('salsa'))
let topping=JSON.parse(localStorage.getItem('topping'))

let ensalada={  
  base:base,
  proteinas:proteinas,
  complement:complement,
  salsa:salsa,
  topping:topping,
  price:[precioM,precioG],
  image:img,
  name:'Tu Ensalada'
}

setForm({
  ...form,
  proteinas: [...form.ensalada, ensalada],

})
setEnsaladaG([...ensaladaG,ensalada])

  navigate("/checkout");
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1000
  })
  .then((value) => {
    switch (value) {
      default:
       navigate("/pideTuEnsalada");
      break
    }
  }); 
  
  
}

let medium = () =>
{
  let base=JSON.parse(localStorage.getItem('bases'))
  let proteinas=JSON.parse(localStorage.getItem('proteinas'))
  let complement=JSON.parse(localStorage.getItem('complement'))
  let salsa=JSON.parse(localStorage.getItem('salsa'))
  let topping=JSON.parse(localStorage.getItem('topping'))
  
  let ensalada={  
    base:base,
    proteinas:proteinas,
    complement:complement,
    salsa:salsa,
    topping:topping,
    price:[precioM,precioG],
    image:img,
    name:'Tu Ensalada'
  }
  
  setFormM({
    ...formM,
    proteinas: [...formM.ensalada, ensalada],
  
  })
  setEnsaladaM([...ensaladaM,ensalada])
  
    navigate("/checkout");
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    })
    .then((value) => {
      switch (value) {
        default:
         navigate("/pideTuEnsalada");
        break
      }
    });  
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

  
  
  
  return( 
  <div>
      <Tamaños/>
      <div class='container-fluid'>
        <div class="row">
              <div id='contenedor-1' class='col-sm-9'>
              <Bases /> 
              <Protein /> 
              <Complement />  
              <Sauce />
                <Toppings /> 
             
              </div>
              <div class="row" id="addContent">
        <p class="col-3" id="textButtonAdd">Mediana</p>
        <button onClick={medium} type="button" class="col-1" id="buttonAddG">
          <i class="bi bi-plus-circle-fill"></i>
        </button>

        <p class="col-3" id="textButtonAdd">Grande</p>
        <button onClick={()=>big()} class="col-1" id="buttonAddG">
          <i class="bi bi-plus-circle-fill"></i>
        </button>
      </div>
    </div>
        </div>
      </div>
     
  );
};
