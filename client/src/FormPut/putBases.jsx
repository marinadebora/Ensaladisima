import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bases, beverages, complements, desserts, Menu, proteins, putBases, putBebidas, putComplemento, putMenu, putPostres, putProteinas, putSalsas, putTopping, sauces, toppings } from "../action";
import "./putBases.css"


export default function BaseEdit() {
  const dispatch = useDispatch()
  const base1 = useSelector(state => state.bases)
  const complemento = useSelector(state => state.complements)        
  const salsas = useSelector(state => state.sauces)
  const proteina = useSelector(state => state.proteins)
  const topping = useSelector(state => state.toppings)
  const beverage = useSelector(state => state.beverages)
  const dessert = useSelector(state => state.desserts)
  const menu = useSelector(state => state.menu)

  let { id } = useParams()

  const buscar1 = base1?.find(e => e._id === id)
  const buscar2 = complemento?.find(e => e._id === id)
  const buscar3 = salsas?.find(e => e._id === id)
  const buscar4 = proteina?.find(e => e._id === id)
  const buscar5 = topping?.find(e => e._id === id)
  const buscar6 = beverage?.find(e => e._id === id)
  const buscar7 = dessert?.find(e => e._id === id)
  const buscar8 = menu?.find(e => e._id === id)

  useEffect(() => {
    dispatch(bases(id))
    dispatch(complements(id))
    dispatch(sauces(id))
    dispatch(proteins(id))
    dispatch(toppings(id))
    dispatch(beverages(id))
    dispatch(desserts(id))
    dispatch(Menu(id))
  }, [dispatch, id])

  const [input, setInput] = useState({
    name: "",
    image: "",
    base: "",
    protein: "",
    complement: "",
    sauce: "",
    topping: "",
    price: "",
    stock: ""
  })


  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (buscar1) {
      dispatch(putBases(id, input))
      alert("Base editada")
      setInput({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: ""
      })
    }
    else if (buscar2) {
      dispatch(putComplemento(id, input))
      alert("Complemento Editado")
      setInput({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: ""
      })
    }
    else if (buscar3) {
      dispatch(putSalsas(id, input))
      alert("Salsa Editada")
      setInput({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: ""
      })
    }
    else if (buscar4) {
      dispatch(putProteinas(id, input))
      alert("Proteina Editada")
      setInput({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: ""
      })
    }
    else if (buscar5) {
      dispatch(putTopping(id, input))
      alert("Topping Editado")
      setInput({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: ""
      })
    }
    else if (buscar6) {
      dispatch(putBebidas(id, input))
      alert("Bebida Editada")
      setInput({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: ""
      })
    }
    else if (buscar7) {
      dispatch(putPostres(id, input))
      alert("Postre Editado")
      setInput({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: ""
      })
    }
    else if (buscar8) {
      dispatch(putMenu(id, input))
      alert("Menu editado")
      setInput({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: "",
        precio: "",
        stock: ""
      })
    }
  }


  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <div><Link to="/admin_productos"><button>Volver</button></Link></div>
      <div><h1>Editá tus productos!</h1></div>
      <form onSubmit={handleSubmit}>
         {/**FORMULARIO PARA EDITAR BASES/COMPLEMENTOS/SALSAS/TOPPING/ETC */}
        <div id="marcoProductEdit">
          <label>Nombre: </label><input type="text" value={input.name} placeholder={buscar1?.name ? buscar1.name : buscar2?.name ? buscar2.name : buscar3?.name ? buscar3.name : buscar4?.name ? buscar4.name : buscar5?.name ? buscar5.name : buscar6?.name ? buscar6.name : buscar7?.name ? buscar7.name : buscar8?.name ? buscar8.name : input.name} name="name" onChange={handleChange} />
        </div>
        <div>
          <label >Imagen(link):</label><input type="url" defaulValue={input.image} placeholder={buscar1?.image ? buscar1.image : buscar2?.image ? buscar2.image : buscar3?.image ? buscar3.image : buscar4?.image ? buscar4.image : buscar5?.image ? buscar5.image : buscar6?.image ? buscar6.image : buscar7?.image ? buscar7.image : buscar8?.image ? buscar8.image : input.image} name="image" onChange={handleChange} />
        </div>
           {/**FORMULARIO PARA EDITAR POSTRES/BEBIDAS*/}
        {

          buscar6 && <div><label >Precio:</label><input type="number" value={input.price} placeholder={buscar6?.price ? buscar6.price : input.price} name="price" onChange={handleChange} />

          </div>
        }
        {

          buscar6 && <div><label >Stock:</label><input type="number" value={input.stock} placeholder={buscar6?.stock ? buscar6.stock : input.stock} name="stock" onChange={handleChange} />

          </div>
        }
        {

          buscar7 && <div><label >Precio:</label><input type="number" value={input.price} placeholder={buscar7?.price ? buscar7.price : input.price} name="price" onChange={handleChange} />

          </div>
        }
        {

          buscar7 && <div><label >Stock:</label><input type="number" value={input.stock} placeholder={buscar7?.stock ? buscar7.stock : input.stock} name="stock" onChange={handleChange} />

          </div>
        }
         {/**FORMULARIO PARA EDITAR MENU*/}
        {

          buscar8 && <div><label >Base:</label><input type="text" value={input.base} placeholder={buscar8?.base ? buscar8.base : input.base} name="base" onChange={handleChange} />

          </div>
        }
        {
          buscar8 && <div><label >Protein:</label><input type="text" value={input.protein} placeholder={buscar8?.protein ? buscar8.protein : input.protein} name="protein" onChange={handleChange} />
          </div>
        }

        {
          buscar8 && <div><label >Complement:</label><input type="text" value={input.complement} placeholder={buscar8?.complement ? buscar8.complement : input.complement} name="complement" onChange={handleChange} />
          </div>
        }
        {
          buscar8 && <div><label >Sauce:</label><input type="text" value={input.sauce} placeholder={buscar8?.sauce ? buscar8.sauce : input.sauce} name="sauce" onChange={handleChange} />
          </div>
        }
        {
          buscar8 && <div> <label >Topping:</label><input type="text" value={input.topping} placeholder={buscar8?.topping ? buscar8.topping : input.topping} name="topping" onChange={handleChange} />
          </div>
        }


        <button type='submit'>Editar producto</button>

      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>

  )
}
