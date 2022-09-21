import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { complements, postBases, postBebidas, postComplementos, postMenu, postPostres, postProteinas, postSalsas, postToppings } from "../action";
import BaseEdit, { BebidasEdit, ComplemetoEdit, MenuEdit, PostresEdit, ProteinaEdit, SalsasEdit, ToppingEdit } from "../components/AdminEdit";
import '../styles/CrearProducto.css';
import '../FormPut/putBases.css';
import axios from "axios";

function validate(input) {
	let errors = {}
	if (!input.name) errors.name = "Campo Obligatorio"
	// if (!(/^[a-zA-Z-\s]+$/).test(input.name)) errors.name = "No puede contener numeros ni caracteres especiales"
	if (!input.image) errors.image = "Campo Obligatorio"
	if (!input.price) errors.price = "Campo Obligatorio"
	if (!input.stock) errors.stock = "Campo Obligatorio"
	return errors
}
function validateIngredientes(ingredientes) {
	let errorsIngredientes = {}
	if (!ingredientes.name) errorsIngredientes.name = "Campo Obligatorio"
	// if (!(/^[a-zA-Z-\s]+$/).test(input.name)) errors.name = "No puede contener numeros ni caracteres especiales"
	if (!ingredientes.image) errorsIngredientes.image = "Campo Obligatorio"
	return errorsIngredientes
}
function validateMenu(menu) {
	let errorsMenu = {}
	if (!menu.name) errorsMenu.name = "Campo Obligatorio"
	if (!menu.image) errorsMenu.image = "Campo Obligatorio"
	if (!menu.topping) errorsMenu.topping = "Campo Obligatorio"
	if (!menu.base) errorsMenu.base = "Campo Obligatorio"
	if (!menu.protein) errorsMenu.protein = "Campo Obligatorio"
	if (!menu.complement) errorsMenu.complement = "Campo Obligatorio"
	if (!menu.sauce) errorsMenu.sauce = "Campo Obligatorio"
	if (!menu.price) errorsMenu.price = "Campo Obligatorio"

	return errorsMenu
}
function validateMenuBig(menuBig) {
	let errorsMenuBig = {}
	if (!menuBig.name) errorsMenuBig.name = "Campo Obligatorio"
	if (!menuBig.image) errorsMenuBig.image = "Campo Obligatorio"
	if (!menuBig.topping) errorsMenuBig.topping = "Campo Obligatorio"
	if (!menuBig.base) errorsMenuBig.base = "Campo Obligatorio"
	if (!menuBig.protein) errorsMenuBig.protein = "Campo Obligatorio"
	if (!menuBig.complement) errorsMenuBig.complement = "Campo Obligatorio"
	if (!menuBig.sauce) errorsMenuBig.sauce = "Campo Obligatorio"
	if (!menuBig.price) errorsMenuBig.price = "Campo Obligatorio"

	return errorsMenuBig
}


export default function CrearProduto() {
	const dispatch = useDispatch()
	// const navigate = useNavigate()
	const seleccionar = ["base", "complemento", "proteina", "topping", "salsas", "postre", "bebidas", "menu","menuBig"];
	const seleccionarEdit = ["baseEdit", "complementoEdit", "proteinaEdit", "toppingEdit", "salsasEdit", "postreEdit", "bebidasEdit", "menuEdit"];
	const [select, setSelect] = useState("");
	const [selectEdit, setSelectEdit] = useState("");
	let { id } = useParams()
	const [input, setInput] = useState({
		name: "",
		image: "",
		price: "",
		stock: ""
	})
	console.log(input)
	const [ingredientes, setIngredientes] = useState({ name: "", image: "" })
	const [menu, setMenu] = useState({
		name: "",
		image: "",
		base: "",
		protein: "",
		complement: "",
		sauce: "",
		topping: "",
		price:""
	})
	const [menuBig, setMenuBig] = useState({
		name: "",
		image: "",
		base: "",
		protein: "",
		complement: "",
		sauce: "",
		topping: "",
		price:""
	})
	const [errorsMenu, setErrorsMenu] = useState({})
	const [errorsMenuBig, setErrorsMenuBig] = useState({})
	const [errors, setErrors] = useState({})
	const [errorsIngredientes, setErrorsIngredientes] = useState({})
	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
			image: imagenInput
		})
		setErrors(validate({
			...input,
			[e.target.name]: e.target.value
		}))
	}
	function handleChangeIngredientes(e) {
		setIngredientes({
			...ingredientes,
			[e.target.name]: e.target.value,
			image: imagenIngredientes
		})
		setErrorsIngredientes(validateIngredientes({
			...ingredientes,
			[e.target.name]: e.target.value
		}))
	}
	function handleChangeMenu(e) {
		setMenu({
			...menu,
			[e.target.name]: e.target.value,
			image: imagenMenu
		})
		setErrorsMenu(validateMenu({
			...menu,
			[e.target.name]: e.target.value
		}))
	}
	function handleChangeMenuBig(e) {
		setMenuBig({
			...menuBig,
			[e.target.name]: e.target.value,
			image: imagenMenu
		})
		setErrorsMenuBig(validateMenuBig({
			...menuBig,
			[e.target.name]: e.target.value
		}))
	}
	function handleSubmit(e) {
		e.preventDefault()
		if (select === "bebidas") {
			if (errors.name || errors.price || errors.stock || !input.name) {
				alert("No se pudo crear la Bebida, por favor completa los campos")
			} else {
				dispatch(postBebidas(input))
				alert("Bebida creada")
				setInput({
					name: "",
					image: "",
					price: "",
					stock: ""
				})
			}

		} else if (select === "postre") {
			if (errors.name || errors.image || errors.price || errors.stock || !input.name) {
				alert("No se pudo crear el Postre, por favor completa los campos")
			} else {
				dispatch(postPostres(input))
				alert("Postre Creado")
				setInput({
					name: "",
					image: "",
					price: "",
					stock: ""
				})
			}

		} else if (select === "base") {
			if (errorsIngredientes.name || !ingredientes.name) {
				alert("No se pudo crear la Base,por favor completa los campos")
			} else {
				dispatch(postBases(ingredientes))
				alert("Base Creada")
				setIngredientes({
					name: "",
					image: ""
				})
			}
		} else if (select === "complemento") {
			if (errorsIngredientes.name || !ingredientes.name) {
				alert("No se pudo crear el Complemento, por favor completa los campos")
			} else {
				dispatch(postComplementos(ingredientes))
				alert("Complemento Creado")
				setIngredientes({
					name: "",
					image: ""
				})
			}
		} else if (select === "proteina") {
			if (errorsIngredientes.name || !ingredientes.name) {
				alert("No se pudo crear la Proteina, por favor completa los campos")
			} else {
				dispatch(postProteinas(ingredientes))
				alert("Proteina Creada")
				setIngredientes({
					name: "",
					image: ""
				})
			}
		} else if (select === "topping") {
			if (errorsIngredientes.name || !ingredientes.name) {
				alert("No se pudo crear el Topping, por favor completa los campos")
			} else {
				dispatch(postToppings(ingredientes))
				alert("Topping Creado")
				setIngredientes({
					name: "",
					image: ""
				})
			}
		} else if (select === "salsas") {
			if (errorsIngredientes.name || !ingredientes.name) {
				alert("No se pudo crear la Salsa, por favor completa los campos")
			} else {
				dispatch(postSalsas(ingredientes))
				alert("Salsa Creada")
				setIngredientes({
					name: "",
					image: ""
				})
			}
		} else if (select === "menu") {
			if (errorsMenu.name || errorsMenu.base || errorsMenu.protein || errorsMenu.complement || errorsMenu.sauce || errorsMenu.topping ||errorsMenu.price|| !menu.name) {
				alert("No se pudo crear el Menu, por favor completa los campos")
			} else {
				dispatch(postMenu(menu))
				alert("Menu Creado")
				setMenu({
					name: "",
					image: "",
					base: "",
					protein: "",
					complement: "",
					sauce: "",
					topping: "",
					price:""
				})
			}
		}
		else if (select === "menuBig") {
			if (errorsMenuBig.name || errorsMenuBig.base || errorsMenuBig.protein || errorsMenuBig.complement || errorsMenuBig.sauce || errorsMenuBig.topping ||errorsMenuBig.price|| !menuBig.name) {
				alert("No se pudo crear el MenuBig, por favor completa los campos")
			} else {
				dispatch(postMenu(menuBig))
				alert("MenuBig Creado")
				setMenuBig({
					name: "",
					image: "",
					base: "",
					protein: "",
					complement: "",
					sauce: "",
					topping: "",
					price:""
				})
			}
		}

	}

	function hanldeOnChangeSelect(e) {
		setSelect(e.target.value)
	}

	function hanldeOnChangeSelectEdit(e) {
		setSelectEdit(e.target.value)
	}
	useEffect(() => {
		dispatch(complements(id))
	}, [dispatch, id])


	let [imagenInput, setImagenInput] = useState([])
	let [imagenMenu, setImagenMenu] = useState([])
	let [imagenIngredientes, setImagenIngredientes] = useState([])

	const cloudinary = async (files) => {

		const formData = new FormData();
		formData.append("file", files[0]);
		formData.append("upload_preset", "qji2i4gs");

		let response = await axios.post("https://api.cloudinary.com/v1_1/deqbqghhq/image/upload", formData)
		setImagenInput(response.data.url)
		setImagenMenu(response.data.url)
		setImagenIngredientes(response.data.url)

	};
	return (
		<div style={{width:"100%",justifyContent:"center",alignContent:"center",display:"flow"}}>

			<form id="formEdit" onSubmit={handleSubmit}>
				{/**SELECT PARA CREAR PRODUCTOS */}

				<div style={{display:"flow", flexWrap:"wrap",justifyContent:"space-evenly",textAlign:"center",width:"100%"}}>
					
					{/**SELECT PARA EDITAR PRODUCTOS */}
					<div id="SelectCrearEdit1">
						<select onChange={hanldeOnChangeSelectEdit}>
							<option value="">Seleccioná para Editar</option>
							{seleccionarEdit.map(e => {
								return (
									<option>
										{e}
									</option>
								)
							})}
						</select>
						<div>

							{/**RENDERIZADO DE LAS CARDS */}
							{
								selectEdit === "baseEdit" ? (<BaseEdit />) :
									selectEdit === "complementoEdit" ? (<ComplemetoEdit />) :
										selectEdit === "salsasEdit" ? (<SalsasEdit />) :
											selectEdit === "proteinaEdit" ? (<ProteinaEdit />) :
												selectEdit === "toppingEdit" ? (<ToppingEdit />) :
													selectEdit === "bebidasEdit" ? (<BebidasEdit />) :
														selectEdit === "postreEdit" ? (<PostresEdit />) :
															selectEdit === "menuEdit" ? (<MenuEdit />) : ""


							}
						</div>
					</div>
					</div>
					</form>

					<form style={{width:"40%"}}  id="formCrear" onSubmit={handleSubmit}> 
						<div style={{display:"flow",justifyContent:"space-evenly",textAlign:"center"}}>
					<div>
					
					<div id="SelectCrearEdit">
						<select onChange={hanldeOnChangeSelect}>
							<option value="">Seleccioná para Crear</option>
							{seleccionar.map(e => {
								return (
									<option>
										{e}
									</option>
								)
							})}
						</select>
						<div id="usuarioDetailMain1Content">
					{/**FORMULARIO PARA CREAR BEBIDAS */}
					{
						// select === "" ? (<h2 id="formSubtitle">selecciona el parametr</h2>) :
						select === "bebidas" ? (<div id="usuarioDetailMain1">
							<div>

								
								<label>Nombre: </label><input type="text" value={input.name} name="name" onChange={handleChange} />
								{errors.name && <p>{errors.name}</p>}
							</div>
							<div>
								<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
								<img className="imgenCloud" src={input.image} alt="" />
							</div>
							<div>
								<label>Price: </label><input type="number" value={input.price} name="price" onChange={handleChange} />
								{errors.price && <p>{errors.price}</p>}
							</div>
							<div>
								<label>Stock: </label><input type="number" value={input.stock} name="stock" onChange={handleChange} />
								{errors.stock && <p>{errors.stock}</p>}
							</div>

							<button class="buttonFormAdmin" type='submit'>Crear Bebida</button>
						</div>) :


							select === "postre" ? (<div id="usuarioDetailMain1"><div>
								{/**FORMULARIO PARA CREAR POSTRES */}
								<label>Nombre: </label><input type="text" value={input.name} name="name" onChange={handleChange} />
								{errors.name && <p>{errors.name}</p>}
							</div>
								<div>
									<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
									<img className="imgenCloud" src={input.image} alt="" />
								</div>
								<div>
									<label>Price: </label><input type="number" value={input.price} name="price" onChange={handleChange} />
									{errors.price && <p>{errors.price}</p>}
								</div>
								<div>
									<label>Stock: </label><input type="number" value={input.stock} name="stock" onChange={handleChange} />
									{errors.stock && <p>{errors.stock}</p>}
								</div>

								<button class="buttonFormAdmin" type='submit'>Crear Postre</button></div>) :

								select === "base" ? (<div id="usuarioDetailMain1">
									{/**FORMULARIO PARA CREAR BASES */}
									<div>
										<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
										<img className="imgenCloud" src={ingredientes.image} alt="" />
									</div>
									<div>
										<label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
										{errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
									</div>

									<button class="buttonFormAdmin" type='submit'>Crear Base</button>
								</div>) :


									select === "complemento" ? (<div id="usuarioDetailMain1">
										{/**FORMULARIO PARA CREAR COMPLEMENTOS */}
										<div>
											<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
											<img className="imgenCloud" src={ingredientes.image} alt="" />
										</div>
										<div>
											<label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
											{errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
										</div>

										<button class="buttonFormAdmin" type='submit'>Crear Complemento</button>
									</div>) :


										select === "proteina" ? (<div id="usuarioDetailMain1">
											{/**FORMULARIO PARA CREAR PROTEINAS */}
											<div>
												<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
												<img className="imgenCloud" src={ingredientes.image} alt="" />
											</div>
											<div>
												<label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
												{errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
											</div>

											<button class="buttonFormAdmin" type='submit'>Crear Proteina</button>
										</div>) :


											select === "topping" ? (<div id="usuarioDetailMain1"> 
												{/**FORMULARIO PARA CREAR TOPPING */}
												<div>
													<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
													<img className="imgenCloud" src={ingredientes.image} alt="" />
												</div>
												<div>
													<label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
													{errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
												</div>

												<button class="buttonFormAdmin" type='submit'>Crear Topping</button>
											</div>) :


												select === "salsas" ? (<div id="usuarioDetailMain1">
													{/**FORMULARIO PARA CREAR SALSAS */}

													<div>
														<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
														<img className="imgenCloud" src={ingredientes.image} alt="" />
													</div>
													<div>
														<label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
														{errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
													</div>
													<button class="buttonFormAdmin" type='submit'>Crear Salsas</button>
												</div>) :


													select === "menu" ? (<div id="usuarioDetailMain1">
														{/**FORMULARIO PARA CREAR MENU */}
														<div>
															<label>Nombre: </label><input type="text" value={menu.name} name="name" onChange={handleChangeMenu} />
															{errorsMenu.name && <p>{errorsMenu.name}</p>}
														</div>
														<div>
															<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
															<img className="imgenCloud" src={menu.image} alt="" />
														</div>

														<div>
															<label >Base:</label><input type="text" value={menu.base} name="base" onChange={handleChangeMenu} />
															{errorsMenu.base && <p>{errorsMenu.base}</p>}
														</div>
														<div>
															<label >Protein:</label><input type="text" value={menu.protein} name="protein" onChange={handleChangeMenu} />
															{errorsMenu.protein && <p>{errorsMenu.protein}</p>}
														</div>
														<div>
															<label >Complement:</label><input type="text" value={menu.complement} name="complement" onChange={handleChangeMenu} />
															{errorsMenu.complement && <p>{errorsMenu.complement}</p>}
														</div>
														<div>
															<label >Sauce:</label><input type="text" value={menu.sauce} name="sauce" onChange={handleChangeMenu} />
															{errorsMenu.sauce && <p>{errorsMenu.sauce}</p>}
														</div>
														<div>
															<label >Topping:</label><input type="text" value={menu.topping} name="topping" onChange={handleChangeMenu} />
															{errorsMenu.topping && <p>{errorsMenu.topping}</p>}
														</div>
														<div>
															<label >Precio:</label><input type="number" value={menu.price} name="price" onChange={handleChangeMenu} />
															{errorsMenu.price && <p>{errorsMenu.price}</p>}
														</div>


														<button class="buttonFormAdmin" type='submit'>Crear Menu</button>
													</div>) :
													select === "menuBig" ? (<div id="usuarioDetailMain1">
														{/**FORMULARIO PARA CREAR MENU */}
														<div>
															<label>Nombre: </label><input type="text" value={menuBig.name} name="name" onChange={handleChangeMenuBig} />
															{errorsMenuBig.name && <p>{errorsMenuBig.name}</p>}
														</div>
														<div>
															<label >Imagen: </label><input type="file" onChange={event => cloudinary(event.target.files)} />
															<img className="imgenCloud" src={menuBig.image} alt="" />
														</div>

														<div>
															<label >Base:</label><input type="text" value={menuBig.base} name="base" onChange={handleChangeMenuBig} />
															{errorsMenuBig.base && <p>{errorsMenuBig.base}</p>}
														</div>
														<div>
															<label >Protein:</label><input type="text" value={menuBig.protein} name="protein" onChange={handleChangeMenuBig} />
															{errorsMenuBig.protein && <p>{errorsMenuBig.protein}</p>}
														</div>
														<div>
															<label >Complement:</label><input type="text" value={menuBig.complement} name="complement" onChange={handleChangeMenuBig} />
															{errorsMenuBig.complement && <p>{errorsMenuBig.complement}</p>}
														</div>
														<div>
															<label >Sauce:</label><input type="text" value={menuBig.sauce} name="sauce" onChange={handleChangeMenuBig} />
															{errorsMenuBig.sauce && <p>{errorsMenuBig.sauce}</p>}
														</div>
														<div>
															<label >Topping:</label><input type="text" value={menuBig.topping} name="topping" onChange={handleChangeMenuBig} />
															{errorsMenuBig.topping && <p>{errorsMenuBig.topping}</p>}
														</div>
														<div>
															<label >Precio:</label><input type="number" value={menuBig.price} name="price" onChange={handleChangeMenuBig} />
															{errorsMenuBig.price && <p>{errorsMenuBig.price}</p>}
														</div>


														<button class="buttonFormAdmin" type='submit'>Crear MenuBig</button>
													</div>):<></>
						// (<div><h2>Selecciona el parametro que vas a crear</h2></div>)



					}
					</div>
					</div>
					
					<div>
					
				</div>
					</div>
				{/* </div> */}
				
				</div>
			</form>


		</div>
	)
}