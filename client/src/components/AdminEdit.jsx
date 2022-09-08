import { bases, beverages, complements, desserts, Menu, proteins, sauces, toppings } from "../action";
import CardSimple from "./CardSimple";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



export default function BaseEdit(){
    let { id } = useParams()
    const  bases1 = useSelector(state => state.bases)
    const dispatch = useDispatch()

    useEffect ( () => {
        dispatch(bases(id))
    },[dispatch,id])
    return (
      <div>
      {
        bases1 ?
      bases1.map((e,i) => {
        return (
          <div key={i}>
          <CardSimple
          key={e._id}
              name={e.name}
              image={e.image}
              id={e._id}
               />
          </div>
        )
      }):<h1>Cargandoo</h1>
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
    <div>
    {
      complemento ?
      complemento.map(e => {
      return (
        <div key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            id={e._id}
          />
        </div>
      )
    }):<h1>Cargandoo</h1>
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
    <div>
    {
      salsas ?
      salsas.map(e => {
      return (
        <div key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            id={e._id}

          />
        </div>
      )
    }):<h1>Cargandoo</h1>
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
    <div>
    {
      proteina ?
      proteina.map(e => {
      return (
        <div key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            id={e._id}

          />
        </div>
      )
    }):<h1>Cargandoo</h1>
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
    <div>
    {
      topping ?
      topping.map(e => {
      return (
        <div key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            id={e._id}

          />
        </div>
      )
    }):<h1>Cargandoo</h1>
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
    <div>
    {
      beverage ?
      beverage.map(e => {
      return (
        <div key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            price={e.price}
            stock= {e.stock}
            id={e._id}
          />
        </div>
      )
    }):<h1>Cargandoo</h1>
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
    <div>
    {
      dessert ?
      dessert.map(e => {
      return (
        <div key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            price={e.price}
            stock= {e.stock}
            id={e._id}
          />
        </div>
      )
    }):<h1>Cargandoo</h1>
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
    <div>
    {
      menu ?
      menu.map(e => {
      return (
        <div key={e._id}>
          <CardSimple
            name={e.name}
            image={e.image}
            price={e.price}
            stock= {e.stock}
            id={e._id}
          />
        </div>
      )
    }):<h1>Cargandoo</h1>
  }
  </div>
  )
}