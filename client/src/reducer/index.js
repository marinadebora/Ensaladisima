/* import { saladsBig } from "../action" */

const initialState = {
  salads: [],
  saladsBig: [],
  bases: [],
  proteins: [],
  complements: [],
  sauces: [],
  toppings: [],
  beverages: [],
  desserts: [],
  menu: [],
  pedidoBebidas: [],
  usuarios: [],
  pedidos: [],
  userId: {},
  comentarios: [],
  historial:[],
  allhistorial:[],
  mediana:{},
  grande:{},
  totalG:[],
  totalM:[],
  allUsuarios: {},
  detail: [],
  historialDetail:{},
  ensBLS:[],
  filtroHistorial:[],
  saladsFilter: [],
  saladsBigFilter: [],
  basesFilter: [],
  proteinsFilter: [],
  complementsFilter: [],
  saucesFilter: [],
  toppingsFilter: [],
  beveragesFilter: [],
  dessertsFilter: [],
  menuFilter: [],
}


function rootReducer(state = initialState, action) {
    
  switch (action.type) {
    case "USUARIOS":
      return {
        ...state,
        usuarios: action.payload,
        allUsuarios: action.payload
      }
    case "VACIAR_U":
      return {
        ...state,
        usuarios: []
      }
    case 'SALADS':
      const filterSalads=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        salads:action.payload ,
        saladsFilter:filterSalads
      }
    case "SALADS_BIG":
      const filterSaladsBig=action.payload?.filter(e=>e.activo===true)

      return {
        ...state,
        saladsBig:action.payload ,
        saladsBigFilter:filterSaladsBig
      }
    case 'BASES':
      const filterBases=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        bases:action.payload ,
        basesFilter: filterBases
      }
    case 'PROTEINS':
      const filterProteins=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        proteins:action.payload,
        proteinsFilter: filterProteins
      }
    case 'COMPLEMENTS':
      const filterComplements=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        complements: action.payload,
        complementsFilter:filterComplements
      }
    case 'SAUCES':
      const filterSauces=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        sauces: action.payload,
        sauceFilter:filterSauces
      }
    case 'TOPPINGS':
      const filterToppings=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        toppings: action.payload,
        toppingsFilter:filterToppings
      }
    case 'BEVERAGES':
      const filterBeverages=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        beverages: action.payload,
        beveragesFilter:filterBeverages
      }
    case 'DESSERTS':
      const filterDesserts=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        desserts: action.payload,
        dessertsFilter:filterDesserts
      }
    case "MENU":
      const filterMenu=action.payload?.filter(e=>e.activo===true)
      return {
        ...state,
        menu: action.payload,
        menuFilter:filterMenu
      }
    case 'PEDIDO_BEBIDAS':
      return {
        ...state,
      }
    case 'PEDIDO_POSTRES':
      return {
        ...state,
      }
    case 'PEDIDO_ENSALADAM':
      return {
        ...state,
      }
    case 'PEDIDO_ENSALADAG':
      return {
        ...state,
      }
    case 'PEDIDO_MENU':
      return {
        ...state,
      }
    case 'PEDIDO_MENU_BIG':
      return {
        ...state,
      }
    case "POST_REGISTRO":
      return {
        ...state
      }
    case "POST_LOGEO":
      return {
        ...state
      }
    case "PEDIDOS":
      return {
        ...state,
        pedidos: action.payload
      }
    case "ELIMINAR_DEL_PEDIDO":
      return {
        ...state
      }
    case "AGREGAR_AL_PEDIDO":
      return {
        ...state
      }
    case "MENU_MDIANO":
      return {
        ...state
      }
    case "MENU_GRANDE":
      return {
        ...state
      }
    case "PEDIDO_DE_BEBIDAS":
      return {
        ...state
      }
    case "PEDIDO_DE_POSTRES":
      return {
        ...state
      }
    case "SALAD_M_USER":
      return {
        ...state
      }
    case "SALAD_G_USER":
      return {
        ...state
      }
    case 'CARGA_LOCAL':
      return {
        ...state
      }
    case 'CARGAR_PEDIDO_DEL_LOCAL':
      return {
        ...state
      }
    
    case "BUSCAR_USUARIO":
      return {
        ...state,
        usuarios: action.payload ? action.payload : []
      }
    case 'USUARIO_ID':
      return {
        ...state,
        detail: action.payload
      }
    case 'PUT_ADMIN':
      return {
        ...state,
        detail: action.payload
      }
    case 'PUT_ACTIVO':
      return {
        ...state,
        detail: action.payload
      }


    case 'EDITAR_COMENTARIOS':
      return {
        ...state,
      }
      case 'REVIEW':
        const filterComentarios=action.payload?.filter(e=>e.activo===true)
  
      return {
        ...state,
        comentarios: filterComentarios

      }
    case 'HISTORIAL_COMPRA':
      //console.log(state.historial)
      return {
        ...state,
        historial: action.payload,
        allhistorial: action.payload,
      }
      case "MEDIANA":
        let ensaladaMediana=state.totalM?state.totalM:[]
        localStorage.setItem('ensaladaM', JSON.stringify([...ensaladaMediana,action.payload]))

        return {
          ...state,
          mediana:action.payload,
          totalM:[...ensaladaMediana,action.payload]
        }
      case "GRANDE":
        let ensaladaGrande= state.totalG?state.totalG:[]
        localStorage.setItem('ensaladaG', JSON.stringify([...ensaladaGrande,action.payload]))
        return {
          ...state,
          grande:action.payload,
          totalG:[...ensaladaGrande,action.payload]
        }
        case "HISTORIAL_ID":
          
          return{
            ...state,
            historialDetail:action.payload
          }
        case 'MODIFICAR_PEDIDO':
          return {
            ...state,
          }
        case "PEDIDO_DELIVERY_PUT":
          return {
            ...state
          }
          case 'FITRO_HISTORIAL':
      const estadoTotal =state.allhistorial
      const filterH= action.payload==='pending'?estadoTotal.filter(e=>e.pending===true):
      action.payload==='processing'?estadoTotal.filter(e=>e.processing===true):
      action.payload==='received'?estadoTotal.filter(e=>e.received===true):
      action.payload==='canceled'? estadoTotal.filter(e=>e.canceled===true):
      action.payload==='sinFiltro'&& estadoTotal


      return{
        ...state,
        historial:filterH,
        filtroHistorial:filterH
      }
     case 'FILTRO_PRECIO':
      const estadoHorder=state.filtroHistorial
      const filtroMes=action.payload==='menor'?estadoHorder?.filter(e=>e.totalPayable<50):
      action.payload==='medio'?estadoHorder?.filter(e=>e.totalPayable>50&&e.totalPayable<100):
      action.payload==='mayor'?estadoHorder?.filter(e=>e.totalPayable>100):
      action.payload==='sinFiltro'&&estadoHorder
      return{
        ...state,
        historial:filtroMes
      }  
    default:
      return {
        state
      }
  }
}


export default rootReducer;