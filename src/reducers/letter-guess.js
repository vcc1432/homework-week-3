import { MAKE_GUESS, RESET_GAME } from '../actions/game'

const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case MAKE_GUESS:
        return [...state, action.payload]
      case RESET_GAME:
        return initialState
    default:
      return state
    }
  }
  
  export default reducer



