import axios from 'axios'
import Swal from 'sweetalert2'

//ruta get de todos los usuarios
export function usuariosRegistrados()
{
	return async function (dispatch)
	{
		try {
			const usuarios = await axios("/usuarios")
			return dispatch({
				type: "USUARIOS",
				payload: usuarios.data
			})
		} catch (error) {
			console.log({ message: error.message })
		}
	}
}
export const vaciarUsuarios = () =>
{
	return { type: "VACIAR_U", payload: [] }
}

//ruta get de las ensaldas de la casa
export function salads()
{
	return async function (dispatch)
	{
		try {
			const salad = await axios(`/menus`)

			return dispatch({

				type: "SALADS",
				payload: salad.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de las ensaldas grande de la casa
export function saladsBig()
{
	return async function (dispatch)
	{
		try {
			const salad = await axios(`/menubig`)

			return dispatch({

				type: "SALADS_BIG",
				payload: salad.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de las bases para las ensalada armadas por el usuario
export function bases()
{
	return async function (dispatch)
	{
		try {
			const base = await axios(`/bases`)

			return dispatch({

				type: "BASES",
				payload: base.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de las proteinas para las ensalada armadas por el usuario
export function proteins()
{
	return async function (dispatch)
	{
		try {
			const protein = await axios(`/proteins`)

			return dispatch({

				type: "PROTEINS",
				payload: protein.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de los complementos para las ensalada armadas por el usuario
export function complements()
{
	return async function (dispatch)
	{
		try {
			const protein = await axios(`/complements`)

			return dispatch({

				type: "COMPLEMENTS",
				payload: protein.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de las salsas para las ensalada armadas por el usuario
export function sauces()
{
	return async function (dispatch)
	{
		try {
			const sauce = await axios(`/salsas`)

			return dispatch({

				type: "SAUCES",
				payload: sauce.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de los toppings para las ensalada armadas por el usuario
export function toppings()
{
	return async function (dispatch)
	{
		try {
			const topings = await axios(`/toppings`)

			return dispatch({

				type: "TOPPINGS",
				payload: topings.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}
//ruta get de las bebidas 
export function beverages()
{
	return async function (dispatch)
	{
		try {
			const beverage = await axios(`/bebidas`)

			return dispatch({

				type: "BEVERAGES",
				payload: beverage.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}
// ruta get de menu
export function Menu()
{
	return async function (dispatch)
	{
		try {
			const menu = await axios(`/menus`)

			return dispatch({

				type: "MENU",
				payload: menu.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}
// ruta get MenuBig
export function MenuBig()
{
	return async function (dispatch)
	{
		try {
			const menu = await axios(`/menubig`)

			return dispatch({

				type: "MENU_BIG",
				payload: menu.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}

//ruta get de los postres 
export function desserts()
{
	return async function (dispatch)
	{
		try {
			const dessert = await axios(`/postres`)

			return dispatch({

				type: "DESSERTS",
				payload: dessert.data

			})
		} catch (error) {
			console.log(error)
		}

	}
}
//ruta post de bebidas
export function pedidoBebidas(payload)
{
	return async function (dispatch)
	{
		try {
			const pedido = await axios.post(`/pedidobebida`, payload);
			return dispatch({
				type: 'PEDIDO_BEBIDAS',
				payload: pedido,
			});
		} catch (error) {
			console.log(error.message);

		}
	};
}

//ruta post de postres
export function pedidoPostres(payload)
{
	return async function (dispatch)
	{
		try {
			const pedido = await axios.post(`/pedidopostre`, payload);
			return dispatch({
				type: 'PEDIDO_POSTRES',
				payload: pedido,
			});
		} catch (error) {
			console.log(error.message);

		}
	};
}

//ruta post de ensalada mediana
export function pedidoEnsaladaM(payload)
{
	return async function (dispatch)
	{
		try {
			const pedido = await axios.post(`/ensaladamed`, payload);
			return dispatch({
				type: 'PEDIDO_ENSALADAM',
				payload: pedido,
			});
		} catch (error) {
			console.log(error.message);

		}
	};
}

//ruta post de ensalada grande
export function pedidoEnsaladaG(payload)
{
	return async function (dispatch)
	{
		try {
			const pedido = await axios.post(`/ensaladabig`, payload);
			return dispatch({
				type: 'PEDIDO_ENSALADAG',
				payload: pedido,
			});
		} catch (error) {
			console.log(error.message);

		}
	};
}

//ruta post de menu medium
export function pedidoMenu(payload)
{
	return async function (dispatch)
	{
		try {
			const pedido = await axios.post(`/pedidomenu`, payload);
			return dispatch({
				type: 'PEDIDO_MENU',
				payload: pedido,
			});
		} catch (error) {
			console.log(error.message);

		}
	};
}

//ruta post de menu big
export function pedidoBig(payload)
{
	return async function (dispatch)
	{
		try {
			const pedido = await axios.post(`/pedidomenuBig`, payload);
			return dispatch({
				type: 'PEDIDO_MENU_BIG',
				payload: pedido,
			});
		} catch (error) {
			console.log(error.message);

		}
	};
}



// ruta post de Bases
export const postBases = (payload) => async () =>
{
	let json = await axios.post("/bases", payload);
	return json;
}

// ruta post de Proteinas
export const postProteinas = (payload) => async () =>
{
	let json = await axios.post("/proteins", payload);
	return json;
}
//ruta post de Salsas
export const postSalsas = (payload) => async () =>
{
	let json = await axios.post("/salsas", payload);
	return json;
}

//ruta post de Complementos
export const postComplementos = (payload) => async () =>
{
	let json = await axios.post("/complements", payload);
	return json;
}

export const postToppings = (payload) => async () =>
{
	const json = await axios.post("/toppings", payload);
	return json;
}
// ruta post de Bebidas
export const postBebidas = (payload) => async () =>
{
	const json = await axios.post("/bebidas", payload);
	return json;
}
// ruta post de postre
export const postPostres = (payload) => async () =>
{
	const json = await axios.post("/postres", payload);
	return json;
}
// ruta post de menu
export const postMenu = (payload) => async () =>
{
	const json = await axios.post("/menus", payload);
	return json;
}
// ruta post MenuBig
export const postMenuBig = (payload) => async () =>
{
	const json = await axios.post("/menuBig", payload);
	return json;
}

//ruta put de bases
export const putBases = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/bases/${_id}`, payload)
		return dispatch(
			{ type: "PUT_BASES", payload: json.data })

	} catch (error) {
		console.log(error)
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })

	}
}
//ruta put de menu
export const putMenu = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/menus/${_id}`, payload)
		return dispatch(
			{ type: "PUT_MENU", payload: json.data })

	} catch (error) {
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })
	}
}
//ruta put de menuBig
export const putMenuBig = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/menuBig/${_id}`, payload)
		return dispatch(
			{ type: "PUT_MENU_BIG", payload: json.data })

	} catch (error) {
		console.error(error)
	}
}

//ruta put de Complemento
export const putComplemento = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/complements/${_id}`, payload)
		return dispatch(
			{ type: "PUT_COMPLEMENTOS", payload: json.data })

	} catch (error) {
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })
	}
}
//ruta put de Salsas
export const putSalsas = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/salsas/${_id}`, payload)
		return dispatch(
			{ type: "PUT_SALSAS", payload: json.data })

	} catch (error) {
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })
	}
}
//ruta put de Topping
export const putTopping = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/toppings/${_id}`, payload)
		return dispatch(
			{ type: "PUT_TOPPINGS", payload: json.data })

	} catch (error) {
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })
	}
}
//ruta put de Proteinas
export const putProteinas = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/proteins/${_id}`, payload)
		return dispatch(
			{ type: "PUT_PROTEINAS", payload: json.data })

	} catch (error) {
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })
	}
}
//ruta put de Bebidas
export const putBebidas = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/bebidas/${_id}`, payload)
		return dispatch(
			{ type: "PUT_BEBIDAS", payload: json.data })

	} catch (error) {
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })
	}
}
//ruta put de Postres
export const putPostres = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/postres/${_id}`, payload)
		return dispatch(
			{ type: "PUT_POSTRES", payload: json.data })

	} catch (error) {
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })
	}
}



export function PostRegistroUsuario(payload)
{
	return async function (dispatch)
	{
		try {
			const registrado = await axios.post("/registro", payload);
			return dispatch({
				type: "POST_REGISTRO",
				payload: registrado.data
			})
		} catch (error) {
			console.log({ message: error.message })
		}
	}
}

export function PostLogeoUsuario(payload)
{
	return async function (dispatch)
	{
		try {
			const logueado = await axios.post("/autenticar", payload)
			return dispatch({
				type: "POST_LOGEO",
				payload: logueado.data
			})
		} catch (error) {
			console.log({ message: error.message })
		}
	}
}

// me traigo todos los pedidos

export function getPedidos()
{
	return async function (dispatch)
	{
		try {
			const pedido = await axios.get("/pedidos")
			return dispatch({
				type: "PEDIDOS",
				payload: pedido.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function eliminarDelCarrito(value)
{
	return async function (dispatch)
	{
		try {
			const eliminar = await axios.put(`/eliminarDelPedido`, value)
			return dispatch({
				type: "ELIMINAR_DEL_PEDIDO",
				payload: eliminar.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function agregarAlCarrito(value)
{
	return async function (dispatch)
	{
		try {
			const agregar = await axios.put(`/agregar`, value)
			return dispatch({
				type: "AGREGAR_AL_PEDIDO",
				payload: agregar.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

// rutas para agregar del menu al carrito del usuario logueado

export function menuGrande(value)
{
	return async function (dispatch)
	{
		try {
			const agregar = await axios.post(`/pedidomenubig`, value)
			return dispatch({
				type: "MENU_GRANDE",
				payload: agregar.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function menuMediano(value)
{
	return async function (dispatch)
	{
		try {
			const agregar = await axios.post(`/pedidomenu`, value)
			return dispatch({
				type: "MENU_MDIANO",
				payload: agregar.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function pedidoBebidaLogueado(value)
{
	return async function (dispatch)
	{
		try {
			const agregar = await axios.post(`/pedidobebida`, value)
			return dispatch({
				type: "PEDIDO_DE_BEBIDAS",
				payload: agregar.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function pedidoPostreLogueado(value)
{
	return async function (dispatch)
	{
		try {
			const agregar = await axios.post(`/pedidopostre`, value)
			return dispatch({
				type: "PEDIDO_DE_POSTRES",
				payload: agregar.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}


export function saladMUser(payload)
{
	return async function (dispatch)
	{
		try {
			const saladM = await axios.post(`/ensaladamed`, payload)
			return dispatch({
				type: "SALAD_M_USER",
				payload: saladM
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function contactForm(value)
{
	return async function (dispatch)
	{
		try {
			const form = await axios.post("/contactform", value)
			console.log(form)
			return dispatch({
				type: "CONTACT_FORM",
				payload: form.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}
export function saladGUser(payload)
{
	return async function (dispatch)
	{
		try {
			const saladG = await axios.post(`/ensaladabig`, payload)
			return dispatch({
				type: "SALAD_G_USER",
				payload: saladG
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function crearLocalStorage(value)
{
	return async function (dispatch)
	{
		const cargar = await axios.post('/crearLocalStorage', value)
		return dispatch({
			type: 'CARGA_LOCAL',
			payload: cargar.data
		})
	}
}

export function putPedidocargarPedido(value)
{
	return async function (dispatch)
	{
		const cargarPedido = await axios.put('/cargarPedido', value)
		return dispatch({
			type: 'CARGAR_PEDIDO_DEL_LOCAL', payload: cargarPedido.data
		})
	}

}


//ruta Put para buscar el mail de un usuario
export const getMailUsuario = (input) => async (dispatch) =>
{
	try {
		let json = await axios.put("/email", input)
		return dispatch(
			{
				type: "MAIL_USUARIO",
				payload: json.data
			})
	} catch (error) {
		console.log(error)
	}

}

//ruta put cambio de password
export const putPassword = (_id, payload) => async (dispatch) =>
{
	try {
		let json = await axios.put(`/usuarios/${_id}`, payload)
		return dispatch(
			{ type: "PUT_PASSWORD", payload: json.data })

	} catch (error) {
		Swal.fire({ title: '🚨', text: `el ID: ${_id} no existe` })
	}
}

export function postHistorialDeCompra(_id)
{
	return async function (dispatch)
	{
		try {
			const agregar = await axios.post(`/crearHistorial`, _id)
			return dispatch({
				type: "POST_HISTORIAL",
				payload: agregar.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export const searchBar = (nombre) => async (dispatch) =>
{
	try {
		const buscar = await axios(`/usuarios?nombre=${nombre}`)
		if (nombre) {
			return dispatch(
				{
					type: "BUSCAR_USUARIO", payload: buscar.data
				}
			)
		}

	} catch (error) {
		console.log(error)
	}
}


export const usuariosId = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const buscar = await axios(`/usuario/${_id}`)
			return dispatch({
				type: "USUARIO_ID", payload: buscar.data
			})
		}

	} catch (error) {
		console.log(error)
	}
}
//ruta para cambiar de true a false el admin
export const putAdmin = (_id, payload) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/userAdmin/${_id}`, payload);
			return dispatch({
				type: "PUT_ADMIN", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}
//ruta para banear al usuario
export const putActivo = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/userActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}
//rutas para borrado logico
export const putActivoBase = (_id, payload) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/basesActivo/${_id}`, payload);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}
export const putActivoMenu = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/menusActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export const putActivoMenuB = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/menubigActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export const putActivoProteina = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/proteinsActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export const putActivoComplementos = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/complementsActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export const putActivoSalsas = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/salsasActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export const putActivoToppings = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/toppingsActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export const putActivoPostres = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/postresActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export const putActivoBebidas = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/bebidasActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}
//ruta para agregar los comentarios y la calificacion a la tienda

export function reviewCreada(payload)
{
	return async function (dispatch)
	{
		try {
			const comentario = await axios.post(`/reviewCreada`, payload)
			console.log(comentario)
			return dispatch({
				type: 'EDITAR_COMENTARIOS',
				payload: comentario
			})
		} catch (error) {
			console.log(error.message)
		}
	}
}
export function getReview()
{
	return async function (dispatch)
	{
		try {
			const comentarios = await axios("/review")
			return dispatch({
				type: "REVIEW",
				payload: comentarios.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export const putActivoReview = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/reviewActivo/${_id}`);
			return dispatch({
				type: "PUT_ACTIVO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

//ruta de historial de compra
export function historialCompra()
{
	return async function (dispatch)
	{
		try {

			const histComp = await axios(`/historial`)

			return dispatch({
				type: 'HISTORIAL_COMPRA',
				payload: histComp.data
			})
		}
		catch (error) {
			console.log(error)
		}
	}
}
export const historialId = (_id) => async (dispatch) =>
{
	try {
		const buscar = await axios(`/historials/${_id}`)
		if (_id) {
			return dispatch({
				type: "HISTORIAL_ID", payload: buscar.data
			})
		}

	} catch (error) {
		console.error(error)
	}
}

export function saladMediana(payload)
{
	return async function (dispatch)
	{
		try {
			const mediana = await axios.post(`/mediana`, payload)
			return dispatch({
				type: "MEDIANA",
				payload: mediana.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}


export function saladGrande(payload)
{
	return async function (dispatch)
	{
		try {
			const grande = await axios.post(`/grande`, payload)
			return dispatch({
				type: "GRANDE",
				payload: grande.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}

// para cambiar el estado a procesado
export const putProcesado = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/estadoProcessing/${_id}`);
			return dispatch({
				type: "PUT_PROCESADO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}

// para cambiar el estado a Recibido
export const putRecibido = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/estadoReceived/${_id}`);
			return dispatch({
				type: "PUT_RECIBIDO", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}
// para cambiar el estado a Cancelado
export const putCancelado = (_id) => async (dispatch) =>
{
	try {
		if (_id) {
			const editar = await axios.put(`/estadoCanceled/${_id}`);
			return dispatch({
				type: "PUT_Cancelado", payload: editar.data
			})
		}
	} catch (error) {
		console.error(error)
	}
}
//ruta para cargar la ensaladas que el usuario vuelve a comprar
export function modificarPedido(payload)
{
	return async function (dispatch)
	{
		try {
			const modificar = await axios.put(`/modificarpedido`, payload)
			console.log(modificar)
			return dispatch({
				type: "MODIFICAR_PEDIDO",
				payload: modificar
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function putPedidoDelivery(payload)
{
	return async function (dispatch)
	{
		try {
			const modificar = await axios.put(`/putpedidodelivery`, payload)
			return dispatch({
				type: "PEDIDO_DELIVERY_PUT",
				payload: modificar.data
			})
		} catch (error) {
			console.log(error)
		}
	}
}
//filtro por estado historial de compra admin
export function filtroHistorial(payload)
{
	return {
		type: 'FITRO_HISTORIAL',
		payload
	}
}
//filtro por rango de precio historial de compra admin
export function filtroHistorialPrecio(payload)
{
	return {
		type: 'FILTRO_PRECIO',
		payload
	}
}

export const eliminarLinia = (value) =>
{
	return async (dispatch) =>
	{
		try {
			const borrar = await axios.put('/eliminarLinia', value)
			return dispatch({ type: 'ELIMINAR_LINEA', payload: borrar.data })
		} catch (error) {
			console.log(error)
		}
	}
}