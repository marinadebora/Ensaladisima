import axios from 'axios'


//ruta get de todos los usuarios
export function usuarios()
{
	return async function(dispatch){
		try{
			const usuarios = await axios("/usuarios")
			return dispatch({
				type:"USUARIOS",
				payload:usuarios.data
			})
		}catch(error){
			console.log({message:error.message})
		}
	}
}

//ruta get de las ensaldas de la casa
export function salads() {
	return async function (dispatch) {
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

//ruta get de las bases para las ensalada armadas por el usuario
export function bases() {
	return async function (dispatch) {
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
export function proteins() {
	return async function (dispatch) {
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
export function complements() {
	return async function (dispatch) {
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
export function sauces() {
	return async function (dispatch) {
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
export function toppings() {
	return async function (dispatch) {
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
export function beverages() {
	return async function (dispatch) {
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
export function Menu() {
	return async function (dispatch) {
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



//ruta get de los postres 
export function desserts() {
	return async function (dispatch) {
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
export function pedidoBebidas(payload) {
	return async function (dispatch) {
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
export function pedidoPostres(payload) {
	return async function (dispatch) {
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
export function pedidoEnsaladaM(payload) {
	return async function (dispatch) {
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
export function pedidoEnsaladaG(payload) {
	return async function (dispatch) {
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
export function pedidoMenu(payload) {
	return async function (dispatch) {
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
export function pedidoBig(payload) {
	return async function (dispatch) {
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
export const postBases = (payload) => async () => {
	let json = await axios.post("/bases", payload);
	return json;
}

// ruta post de Proteinas
export const postProteinas = (payload) => async () => {
	let json = await axios.post("/proteins", payload);
	return json;
}
//ruta post de Salsas
export const postSalsas = (payload) => async () => {
	let json = await axios.post("/salsas", payload);
	return json;
}

//ruta post de Complementos
export const postComplementos= (payload) => async () => {
	let json = await axios.post("/complements", payload);
	return json;
}

export const postToppings =(payload)=> async ()=> {
	const json = await axios.post("/toppings",payload);
	return json;
}
// ruta post de Bebidas
export const postBebidas = (payload) => async ()=>{
	const json = await axios.post("/bebidas",payload);
	return json ;
}
// ruta post de postre
export const postPostres = (payload)=> async ()=>{
	const json = await axios.post("/postres",payload);
	return json;
}
// ruta post de menu
export const postMenu = (payload)=> async ()=>{
	const json = await axios.post("/menus",payload);
	return json;
}
// ruta post big
// export const postBig = (payload)=> async ()=>{
// 	const json = await axios.post("/ensaladabig",payload);
// 	return json;
// }

//ruta put de bases
export const putBases=(_id,payload)=>async (dispatch)=>{
	try {
	   let json= await axios.put(`/bases/${_id}`,payload)
	   return dispatch(
		 {type:"PUT_BASES",payload:json.data})
	   
	   } catch (error) {
	  alert(`el ID: ${_id} no existe`)
	}
  }
  //ruta put de menu
  export const putMenu=(_id,payload)=>async (dispatch)=>{
	try {
	   let json= await axios.put(`/menus/${_id}`,payload)
	   return dispatch(
		 {type:"PUT_MENU",payload:json.data})
	   
	   } catch (error) {
	  alert(`el ID: ${_id} no existe`)
	}
  }
   //ruta put de Complemento
   export const putComplemento=(_id,payload)=>async (dispatch)=>{
	try {
	   let json= await axios.put(`/complements/${_id}`,payload)
	   return dispatch(
		 {type:"PUT_COMPLEMENTOS",payload:json.data})
	   
	   } catch (error) {
	  alert(`el ID: ${_id} no existe`)
	}
  }
  //ruta put de Salsas
  export const putSalsas=(_id,payload)=>async (dispatch)=>{
	try {
	   let json= await axios.put(`/salsas/${_id}`,payload)
	   return dispatch(
		 {type:"PUT_SALSAS",payload:json.data})
	   
	   } catch (error) {
	  alert(`el ID: ${_id} no existe`)
	}
  }
  //ruta put de Topping
  export const putTopping=(_id,payload)=>async (dispatch)=>{
	try {
	   let json= await axios.put(`/toppings/${_id}`,payload)
	   return dispatch(
		 {type:"PUT_TOPPINGS",payload:json.data})
	   
	   } catch (error) {
	  alert(`el ID: ${_id} no existe`)
	}
  }
   //ruta put de Proteinas
   export const putProteinas=(_id,payload)=>async (dispatch)=>{
	try {
	   let json= await axios.put(`/proteins/${_id}`,payload)
	   return dispatch(
		 {type:"PUT_PROTEINAS",payload:json.data})
	   
	   } catch (error) {
	  alert(`el ID: ${_id} no existe`)
	}
  }
     //ruta put de Bebidas
	 export const putBebidas=(_id,payload)=>async (dispatch)=>{
		try {
		   let json= await axios.put(`/bebidas/${_id}`,payload)
		   return dispatch(
			 {type:"PUT_BEBIDAS",payload:json.data})
		   
		   } catch (error) {
		  alert(`el ID: ${_id} no existe`)
		}
	  }
	   //ruta put de Postres
	 export const putPostres=(_id,payload)=>async (dispatch)=>{
		try {
		   let json= await axios.put(`/postres/${_id}`,payload)
		   return dispatch(
			 {type:"PUT_POSTRES",payload:json.data})
		   
		   } catch (error) {
		  alert(`el ID: ${_id} no existe`)
		}
	  }



export function PostRegistroUsuario(payload){
	return async function(dispatch){
		try{
			const registrado = await axios.post("/registro", payload);
			return dispatch({
				type:"POST_REGISTRO",
				payload: registrado
			})
		}catch(error){
			console.log({message:error.message})
		}
	}
}

export function PostLogeoUsuario(payload){
	return async function(dispatch){
		try{
			const logueado = await axios.post("/autenticar",payload)
			return dispatch({
				type:"POST_LOGEO",
				payload:logueado
			})
		}catch(error){
			console.log({message:error.message})
		}
	}
}
