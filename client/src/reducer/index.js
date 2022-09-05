const initialState = {
  salads: [],
  bases: [],
  proteins:[],
  complements:[],
  sauces:[],
  toppings:[],
  beverages:[],
  desserts:[],
  pedido:[],
  usuarios:[]
}


function rootReducer( state = initialState, action )
{
  switch (action.type) {
    case "USUARIOS":
      return{
        ...state,
        usuarios: action.payload
      }
    case 'SALADS':
      return {
        ...state,
        salads: action.payload
      }
    case 'BASES':
      return {
        ...state,
        bases: action.payload
      }
    case 'PROTEINS':
      return {
        ...state,
        proteins: action.payload
      }
      case 'COMPLEMENTS':
        return {
          ...state,
          complements: action.payload
        }
      case 'SAUCES':
        return{
          ...state,
          sauces:action.payload
        }
        case 'TOPPINGS':
        return{
          ...state,
          toppings:action.payload
        }
        case 'BEVERAGES':
          return{
            ...state,
            beverages:action.payload
          }
        case 'DESSERTS':
          return{
            ...state,
            desserts:action.payload
           }
        case 'POST_PEDIDO':
          return {
            ...state,
            pedido: action.payload
          }
        case "POST_REGISTRO":
          return{
            ...state
          }
        case "POST_LOGEO":
          return{
            ...state
          }     
        default:
         return {
          state
        }
  }
}


export default rootReducer;