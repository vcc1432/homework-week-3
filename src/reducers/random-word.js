import { NEW_GAME } from '../actions/game'


const reducer = (state = "", action = {}) => {
    switch (action.type) {
      case NEW_GAME:
        return [...state, action.payload]
    default:
      return state
    }
  }
  
  export default reducer