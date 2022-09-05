import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bases, putBases} from "../action";



// function validate(input) {
//     let errors = {}
//     if (!input.name) errors.name = "Campo Obligatorio"
//     // if (!(/^[a-zA-Z-\s]+$/).test(input.name)) errors.name = "No puede contener numeros ni caracteres especiales"
//     if(!input.image) errors.image = "Campo Obligatorio"
//     return errors
//   }




export default function BaseEdit(image) {
  const dispatch = useDispatch()
  const  base1 = useSelector(state => state.bases)

  const navigate = useNavigate()
  let { id } = useParams()

  const buscar = base1.find(e => e._id === id)

  useEffect(() => {
    dispatch(bases(id))
  }, [dispatch,id])

  const [input, setInput] = useState({
    name: "",
    image: "",

  })
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(putBases(id, input))
    alert("Base editada")
    setInput({
      name: "",
      image: ""
    })
    navigate("/menu")

  }





  return (
    <div>
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div><Link to="/menu"><button>Volver</button></Link></div>
      <div><h1>Creación de Bases</h1></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label><input type="text" value={input.name} placeholder={buscar.name} name="name" onChange={handleChange} />
          {/* {errors.name && <p>{errors.name}</p>} */}
        </div>
        <div>
          <label >Imagen(link):</label><input type="url" defaulValue={input.image} placeholder={buscar.image} name="image" onChange={handleChange} />
          {/* {errors.image && <p>{errors.image}</p>} */}
        </div>
        <button type='submit'>Editar Base</button>

      </form>
    </div>

  )
}