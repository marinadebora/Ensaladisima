const initialState = {
  salads: [],
  bases: [],
  proteins:[],
  complements:[],
  sauces:[],
  toppings:[],
  beverages:[],
  desserts:[]
}


function rootReducer(state = initialState, action)
{
  switch (action.type) {
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
    default:
      return {
        state
      }
  }
}


export default rootReducer;