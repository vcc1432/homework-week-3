import { MAKE_GUESS } from '../actions/game'


const reducer = (state = ["Hello"], action = {}) => {
    switch (action.type) {
      case MAKE_GUESS:
      return [...state, action.payload]
    default:
      return state
    }
  }
  
  export default reducer



