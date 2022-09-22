import React, { useState, useEffect } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { bases, beverages, complements, desserts, Menu, proteins, putBases, putBebidas, putComplemento, putMenu, putPostres, putProteinas, putSalsas, putTopping, sauces, toppings,
  putActivoBase,putActivoBebidas, putActivoMenu,/* putActivoMenuB, */putActivoComplementos,
  putActivoPostres,putActivoToppings,putActivoSalsas,putActivoProteina  } from "../action";
import "./putBases.css"
import axios from "axios";

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
  const history = useNavigate()
  let { id } = useParams()

  const buscar1 = base1?.find(e => e._id === id)
  const buscar2 = complemento?.find(e => e._id === id)
  const buscar3 = salsas?.find(e => e._id === id)
  const buscar4 = proteina?.find(e => e._id === id)
  const buscar5 = topping?.find(e => e._id === id)
  const buscar6 = beverage?.find(e => e._id === id)
  const buscar7 = dessert?.find(e => e._id === id)
  const buscar8 = menu?.find(e => e._id === id)
  const putActivoTodo =async() => {
  if(buscar1?._id) await dispatch(putActivoBase(id))
  if(buscar2?._id) await dispatch(putActivoComplementos(id))
  if(buscar3?._id) await dispatch(putActivoSalsas(id))
  if(buscar4?._id) await dispatch(putActivoProteina(id))
  if(buscar5?._id) await dispatch(putActivoToppings(id))
  if(buscar6?._id) await dispatch(putActivoBebidas(id))
  if(buscar7?._id) await dispatch(putActivoPostres(id))
  if(buscar8?._id) await dispatch(putActivoMenu(id))
  
  localStorage.removeItem("imagenPut")
  localStorage.removeItem("imagenClod")
  return history(-1)
}
  const {activo} = buscar1||buscar2||buscar3||buscar4||buscar5||buscar6||buscar7||buscar8
  //console.log(buscar1?._id)

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
    if(imagenInput){
      setInput({
        ...input,
        [e.target.name]: e.target.value,
        image:JSON.parse(localStorage.getItem('imagenPut'))
      })
    }else{
      setInput({
        ...input,
        [e.target.name]: e.target.value,
       
      })
    }
   
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
      localStorage.removeItem("imagenPut")
      localStorage.removeItem("imagenClod")
      return history("/admin_productos")
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
      return history("/admin_productos")
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
      return history("/admin_productos")
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
      return history("/admin_productos")
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
      return history("/admin_productos")
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
      return history("/admin_productos")
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
      return history("/admin_productos")
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
      return history("/admin_productos")
    }
  }
  let [imagenInput, setImagenInput] = useState([])
  	
	const cloudinary = async (files) =>
	{

		const formData = new FormData();
		formData.append("file", files[0]);
		formData.append("upload_preset", "qji2i4gs");

		let response = await axios.post("https://api.cloudinary.com/v1_1/deqbqghhq/image/upload", formData)
		setImagenInput(response.data.url)
    localStorage.setItem('imagenPut', JSON.stringify(response.data.url))

	};

  return (
 
      <div id="container">
            <NavBar/>

            <div class="row">

                <div class="col-2" id="sideBar">
                    <div class="col" id="mainButtonContentAdmin">
                        <Link id="butonSideBarAdmin" to="/admin_ordenes">
                            <i id="butonOrders" class="bi bi-clipboard-check-fill"> Ordenes</i>
                        </Link>
                    </div>

                    <div class="col" id="mainButtonContentAdmin">
                        <Link id="butonSideBarAdmin" to="/admin_usuarios">
                            <i id="butonOrders" class="bi bi-people-fill"> Usuarios</i>
                        </Link>
                    </div>
                    <div class="col" id="mainButtonContentAdmin">
                        <Link id="butonSideBarAdmin" to="/admin_productos">
                            <i id="butonOrders" class="bi bi-file-earmark-plus-fill"> Productos</i>
                        </Link>
                    </div>



                </div>

                <div class="col-10" id="adminContent">
                    <div class="row" id="searchBarAdmin">
                        <div class="col" id="adminTittle">ADMIN</div>
                    </div>

      


        {/* /----------------------------- INICIO EDIT ----------------------------------/ */}
      
      <h1 id="titleUsuariosRegistrados">Editá tu productos!</h1>
      <div id="estadoVentaButonContent">
      <button id="estadoVentaButon" onClick={putActivoTodo}>Habilitar/Deshabilitar</button>
      </div>
      <form id="usuarioDetailMain" onSubmit={handleSubmit}>
         {/**FORMULARIO PARA EDITAR BASES/COMPLEMENTOS/SALSAS/TOPPING/ETC */}
        
        <div>
          <label>Habilitado:{activo === true?"A la venta":"No esta a la venta"}</label>
        <div id="marcoProductEdit">
          <label>Nombre: </label><input type="text" value={input.name} placeholder={buscar1?.name ? buscar1.name : buscar2?.name ? buscar2.name : buscar3?.name ? buscar3.name : buscar4?.name ? buscar4.name : buscar5?.name ? buscar5.name : buscar6?.name ? buscar6.name : buscar7?.name ? buscar7.name : buscar8?.name ? buscar8.name : input.name} name="name" onChange={handleChange} />
        </div>
          <label >Imagen: </label><img className="imgPutBases"  src={buscar1?.image ? buscar1.image : buscar2?.image ? buscar2.image : buscar3?.image ? buscar3.image : buscar4?.image ? buscar4.image : buscar5?.image ? buscar5.image : buscar6?.image ? buscar6.image : buscar7?.image ? buscar7.image : buscar8?.image ? buscar8.image : input.image} alt='' />
          <input type="url" defaulValue={JSON.parse(localStorage.getItem('imagenPut'))||input.image} placeholder={buscar1?.image ? buscar1.image : buscar2?.image ? buscar2.image : buscar3?.image ? buscar3.image : buscar4?.image ? buscar4.image : buscar5?.image ? buscar5.image : buscar6?.image ? buscar6.image : buscar7?.image ? buscar7.image : buscar8?.image ? buscar8.image : input.image} name="image" onChange={handleChange} />
        </div>
        <div>
         <label >editar imagen: </label><input id="cloudInput" defaulValue={input.image} name="image"  type="file" onChange={event => cloudinary(event.target.files)} />
         <img className="imgPutBases" src={imagenInput} alt="" /><input type="checkbox" name="image" id="one" onChange={handleChange}/>✔
        </div>
        
        
      


        {/* <div>
          <label >Imagen(link):</label><input type="url" defaulValue={input.image} placeholder={buscar1?.image ? buscar1.image : buscar2?.image ? buscar2.image : buscar3?.image ? buscar3.image : buscar4?.image ? buscar4.image : buscar5?.image ? buscar5.image : buscar6?.image ? buscar6.image : buscar7?.image ? buscar7.image : buscar8?.image ? buscar8.image : input.image} name="image" onChange={handleChange} />
        </div> */}
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
        <div id="buttonEditConfirmContent">
        <button id="buttonEditConfirm" type='submit'>Editar producto</button>
        </div>

      </form>
        <Link id="butonCarrouselMain" to="/admin_productos">
            <i id="butonCarrousel" class="bi bi-arrow-left-circle-fill"> Volver</i>
        </Link>

      {/* /----------------------------- FIN EDIT ----------------------------------/ */}
      
    </div>

    </div>
    </div>

  )
}
