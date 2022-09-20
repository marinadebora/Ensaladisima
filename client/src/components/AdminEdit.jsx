import { bases, beverages, complements, desserts, Menu, MenuBig, proteins, sauces, toppings } from "../action";
import CardSimple from "./CardSimple";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import '../styles/CrearProducto.css';



export default function BaseEdit(){
    let { id } = useParams()
    const  bases1 = useSelector(state => state.bases)
    const dispatch = useDispatch()

    useEffect ( () => {
        dispatch(bases(id))
    },[dispatch,id])
    return (
      <div id='grillaEditCardContent'>
      {
        bases1 ?
      bases1.map((e,i) => {
        return (
          <div  id="grillaEditCard" key={i}>
          <CardSimple
          key={e._id}
              name={e.name}
              image={e.image}
              id={e._id}
               />
          </div>
        )
      }): <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
    }
    </div>
    )
}

export  function ComplemetoEdit(){
  let { id } = useParams()
  const  complemento = useSelector(state => state.complements)
  const dispatch = useDispatch()

  useEffect ( () => {
      dispatch(complements(id))
  },[dispatch,id])
  return (
    <div id='grillaEditCardContent'>
    {
      complemento ?
      complemento.map(e => {
      return (
        <div id="grillaEditCard" key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            id={e._id}
          />
        </div>
      )
    }):<div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
  }
  </div>
  )
}

export  function SalsasEdit(){
  let { id } = useParams()
  const  salsas = useSelector(state => state.sauces)
  const dispatch = useDispatch()

  useEffect ( () => {
      dispatch(sauces(id))
  },[dispatch,id])
  return (
    <div id='grillaEditCardContent'>
    {
      salsas ?
      salsas.map(e => {
      return (
        <div id="grillaEditCard" key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            id={e._id}

          />
        </div>
      )
    }):<div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
       </div>
  }
  </div>
  )
}

export  function ProteinaEdit(){
  let { id } = useParams()
  const  proteina = useSelector(state => state.proteins)
  const dispatch = useDispatch()

  useEffect ( () => {
      dispatch(proteins(id))
  },[dispatch,id])
  return (
    <div id='grillaEditCardContent'>
    {
      proteina ?
      proteina.map(e => {
      return (
        <div id="grillaEditCard" key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            id={e._id}

          />
        </div>
      )
    }):<div class="spinner-grow text-success" role="status">
         <span class="visually-hidden">Loading...</span>
       </div>
  }
  </div>
  )
}
export  function ToppingEdit(){
  let { id } = useParams()
  const  topping = useSelector(state => state.toppings)
  const dispatch = useDispatch()

  useEffect ( () => {
      dispatch(toppings(id))
  },[dispatch,id])
  return (
    <div id='grillaEditCardContent'>
    {
      topping ?
      topping.map(e => {
      return (
        <div id="grillaEditCard" key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            id={e._id}

          />
        </div>
      )
    }):<div class="spinner-grow text-success" role="status">
         <span class="visually-hidden">Loading...</span>
       </div>
  }
  </div>
  )
}
export  function BebidasEdit(){
  let { id } = useParams()
  const  beverage = useSelector(state => state.beverages)
  console.log(beverage)

  const dispatch = useDispatch()

  useEffect ( () => {
      dispatch(beverages(id))
  },[dispatch,id])
  return (
    <div id='grillaEditCardContent'>
    {
      beverage ?
      beverage.map(e => {
      return (
        <div id="grillaEditCard" key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            price={e.price}
            stock= {e.stock}
            id={e._id}
          />
        </div>
      )
    }):<div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
       </div>
  }
  </div>
  )
}
export  function PostresEdit(){
  let { id } = useParams()
  const  dessert = useSelector(state => state.desserts)

  const dispatch = useDispatch()

  useEffect ( () => {
      dispatch(desserts(id))
  },[dispatch,id])
  return (
    <div id='grillaEditCardContent'>
    {
      dessert ?
      dessert.map(e => {
      return (
        <div id="grillaEditCard" key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            price={e.price}
            stock= {e.stock}
            id={e._id}
          />
        </div>
      )
    }):
    <div class="spinner-grow text-success" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
  }
  </div>
  )
}

export  function MenuEdit(){
  let { id } = useParams()
  const  menu = useSelector(state => state.menu)

  const dispatch = useDispatch()

  useEffect ( () => {
      dispatch(Menu(id))
  },[dispatch,id])
  return (
    <div id='grillaEditCardContent'>
    {
      menu ?
      menu.map(e => {
      return (
        <div id="grillaEditCard" key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            price={e.price}
            stock= {e.stock}
            id={e._id}
          />
        </div>
      )
    }):<div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
       </div>
  }
  </div>
  )
}

export  function MenuBigEdit(){
  let { id } = useParams()
  const  menuBig = useSelector(state => state.menuBig)

  const dispatch = useDispatch()

  useEffect ( () => {
      dispatch(MenuBig(id))
  },[dispatch,id])
  return (
    <div id='grillaEditCardContent'>
    {
      menuBig ?
      menuBig.map(e => {
      return (
        <div id="grillaEditCard" key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            price={e.price}
            stock= {e.stock}
            id={e._id}
          />
        </div>
      )
    }):<div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
       </div>
  }
  </div>
  )
}