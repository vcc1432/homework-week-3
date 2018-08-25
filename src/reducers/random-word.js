import { NEW_GAME, RESET_GAME } from '../actions/game'

const initialState = ""

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case NEW_GAME:
        return action.payload
      case RESET_GAME:
      return initialState
    default:
      return state
    }
  }
  
  export default reducer