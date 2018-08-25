import { MAKE_GUESS } from '../actions/game'
import { RESET } from '../actions/game'



const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case MAKE_GUESS:
      return [...state, action.payload]
      case RESET:
      return [...state, action.payload]
    default:
      return state
    }
  }
  
  export default reducer



