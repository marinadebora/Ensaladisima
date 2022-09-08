import React, { useState} from "react";
import { Link} from "react-router-dom";
import { useDispatch} from "react-redux";
import { postBases, postBebidas,postComplementos, postMenu, postPostres, postProteinas, postSalsas, postToppings } from "../action";
import '../styles/CrearProducto.css';


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

    return errorsMenu
}


export default function CrearProduto() {
    const dispatch = useDispatch()
    // const { } = useSelector(state => state)

    // const navigate = useNavigate()
    const seleccionar = ["base", "complemento", "proteina", "topping", "salsas", "postre", "bebidas", "menu"];
    const [select, setSelect] = useState("");
    // let seleccion = [];
    const [input, setInput] = useState({
        name: "",
        image: "",
        price: "",
        stock: ""
    })
    const [ingredientes, setIngredientes] = useState({ name: "", image: "" })
    const [menu, setMenu] = useState({
        name: "",
        image: "",
        base: "",
        protein: "",
        complement: "",
        sauce: "",
        topping: ""
    })
    const [errorsMenu, setErrorsMenu] = useState({})
    const [errors, setErrors] = useState({})
    const [errorsIngredientes, setErrorsIngredientes] = useState({})
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function handleChangeIngredientes(e) {
        setIngredientes({
            ...ingredientes,
            [e.target.name]: e.target.value
        })
        setErrorsIngredientes(validateIngredientes({
            ...ingredientes,
            [e.target.name]: e.target.value
        }))
    }
    function handleChangeMenu(e) {
        setMenu({
            ...menu,
            [e.target.name]: e.target.value
        })
        setErrorsMenu(validateMenu({
            ...menu,
            [e.target.name]: e.target.value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (select === "bebidas") {
            if (errors.name || errors.image || errors.price || errors.stock || !input.name || errorsIngredientes.name || errorsIngredientes.image || !ingredientes.name) {
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
            if (errors.name || errors.image || errors.price || errors.stock || !input.name || errorsIngredientes.name || errorsIngredientes.image || !ingredientes.name) {
                alert("No se pudo crear la Bebida, por favor completa los campos")
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
            if (errorsIngredientes.name || errorsIngredientes.image || !ingredientes.name) {
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
            if (errorsIngredientes.name || errorsIngredientes.image || !ingredientes.name) {
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
            if (errorsIngredientes.name || errorsIngredientes.image || !ingredientes.name) {
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
            if (errorsIngredientes.name || errorsIngredientes.image || !ingredientes.name) {
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
            if (errorsIngredientes.name || errorsIngredientes.image || !ingredientes.name) {
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
            if (errorsMenu.name || errorsMenu.image || errorsMenu.base || errorsMenu.protein || errorsMenu.complement || errorsMenu.sauce || errorsMenu.topping || !menu.name) {
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
                    topping: ""
                })
            }
        }


        // navigate("/menu")

    }

    function hanldeOnChangeSelect(e) {
        setSelect(e.target.value)
        // seleccion.push(e.target.value)
    }



    return (
        <div>
            <br />
            

            <div><Link to="/menu"><button>Volver</button></Link></div>
            <h1 id="formTitle">Que producto vas a crear?</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <select onChange={hanldeOnChangeSelect}>
                        <option value="">Seleccionar</option>
                        {seleccionar.map(e => {
                            return (
                                <option>
                                    {e}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    {
                        select === "" ? (<div><h2 id="formSubtitle">selecciona el parametro que vas a crear</h2></div>) :
                            select === "bebidas" ? (<div>
                                <div>
                                    <label>Nombre: </label><input type="text" value={input.name} name="name" onChange={handleChange} />
                                    {errors.name && <p>{errors.name}</p>}
                                </div>
                                <div>
                                    <label >Imagen(link):</label><input type="url" value={input.image} name="image" onChange={handleChange} />
                                    {errors.image && <p>{errors.image}</p>}
                                </div>
                                <div>
                                    <label>Price: </label><input type="text" value={input.price} name="price" onChange={handleChange} />
                                    {errors.price && <p>{errors.price}</p>}
                                </div>
                                <div>
                                    <label>Stock: </label><input type="text" value={input.stock} name="stock" onChange={handleChange} />
                                    {errors.stock && <p>{errors.stock}</p>}
                                </div>

                                <button class="buttonFormAdmin" type='submit'>Crear Bebida</button>
                            </div>) :
                                select === "postre" ? (<div><div>
                                    <label>Nombre: </label><input type="text" value={input.name} name="name" onChange={handleChange} />
                                    {errors.name && <p>{errors.name}</p>}
                                </div>
                                    <div>
                                        <label >Imagen(link):</label><input type="url" value={input.image} name="image" onChange={handleChange} />
                                        {errors.image && <p>{errors.image}</p>}
                                    </div>
                                    <div>
                                        <label>Price: </label><input type="text" value={input.price} name="price" onChange={handleChange} />
                                        {errors.price && <p>{errors.price}</p>}
                                    </div>
                                    <div>
                                        <label>Stock: </label><input type="text" value={input.stock} name="stock" onChange={handleChange} />
                                        {errors.stock && <p>{errors.stock}</p>}
                                    </div>

                                    <button class="buttonFormAdmin" type='submit'>Crear Postre</button></div>) :
                                    select === "base" ? (<div>
                                        <div>
                                            <label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
                                            {errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
                                        </div>
                                        <div>
                                            <label >Imagen(link):</label><input type="url" value={ingredientes.image} name="image" onChange={handleChangeIngredientes} />
                                            {errorsIngredientes.image && <p>{errorsIngredientes.image}</p>}
                                        </div>
                                        <button class="buttonFormAdmin" type='submit'>Crear Base</button>
                                    </div>) :
                                        select === "complemento" ? (<div>
                                            <div>
                                                <label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
                                                {errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
                                            </div>
                                            <div>
                                                <label >Imagen(link):</label><input type="url" value={ingredientes.image} name="image" onChange={handleChangeIngredientes} />
                                                {errorsIngredientes.image && <p>{errorsIngredientes.image}</p>}
                                            </div>
                                            <button class="buttonFormAdmin" type='submit'>Crear Complemento</button>
                                        </div>) :
                                            select === "proteina" ? (<div>
                                                <div>
                                                    <label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
                                                    {errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
                                                </div>
                                                <div>
                                                    <label >Imagen(link):</label><input type="url" value={ingredientes.image} name="image" onChange={handleChangeIngredientes} />
                                                    {errorsIngredientes.image && <p>{errorsIngredientes.image}</p>}
                                                </div>
                                                <button class="buttonFormAdmin" type='submit'>Crear Proteina</button>
                                            </div>) :
                                                select === "topping" ? (<div>
                                                    <div>
                                                        <label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
                                                        {errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
                                                    </div>
                                                    <div>
                                                        <label >Imagen(link):</label><input type="url" value={ingredientes.image} name="image" onChange={handleChangeIngredientes} />
                                                        {errorsIngredientes.image && <p>{errorsIngredientes.image}</p>}
                                                    </div>
                                                    <button class="buttonFormAdmin" type='submit'>Crear Topping</button>
                                                </div>) :
                                                    select === "salsas" ? (<div>
                                                        <div>
                                                            <label>Nombre: </label><input type="text" value={ingredientes.name} name="name" onChange={handleChangeIngredientes} />
                                                            {errorsIngredientes.name && <p>{errorsIngredientes.name}</p>}
                                                        </div>
                                                        <div>
                                                            <label >Imagen(link):</label><input type="url" value={ingredientes.image} name="image" onChange={handleChangeIngredientes} />
                                                            {errorsIngredientes.image && <p>{errorsIngredientes.image}</p>}
                                                        </div>
                                                        <button class="buttonFormAdmin" type='submit'>Crear Salsas</button>
                                                    </div>) :
                                                        select === "menu" ? (<div>
                                                            <div>
                                                                <label>Nombre: </label><input type="text" value={menu.name} name="name" onChange={handleChangeMenu} />
                                                                {errorsMenu.name && <p>{errorsMenu.name}</p>}
                                                            </div>
                                                            <div>
                                                                <label >Imagen(link):</label><input type="url" value={menu.image} name="image" onChange={handleChangeMenu} />
                                                                {errorsMenu.image && <p>{errorsMenu.image}</p>}
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


                                                            <button class="buttonFormAdmin" type='submit'>Crear Menu</button>
                                                        </div>) :
                                                            (<div><h2>Selecciona el parametro que vas a crear</h2></div>)



                    }

                </div>
            </form>
        </div>
    )
}