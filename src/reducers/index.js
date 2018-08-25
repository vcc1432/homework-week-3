import { combineReducers } from 'redux'
import randomWord from './random-word'
import letterGuess from './letter-guess'

export default combineReducers({
  randomWord,
  letterGuess
})