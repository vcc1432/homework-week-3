import { showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished, drawHangman} from '../actions/game-logic'
import * as React from 'react'

export default function GamePage(props) {
  const word = props.randomWord
  const guess = props.letterGuess
  
  return (
    <div>
      <h1>Lets play hangman....</h1>
      <img src={drawHangman(word, guess)} alt="hangman"/>
      <h1>{showGuess(word, guess)}</h1>
      <h2>Wrong guesses: {wrongGuessCount(word, guess)}</h2>
      <h2>{wrongGuessLimit(word, guess) ? "You lose!" : ''}</h2>
      <h2>{isWinner(word, guess) ? "You win!" : ''}</h2>
      <h3>{gameFinished(word, guess) ? "The game is finished. Click the button to start a new game!" : ''}</h3>
    </div>)
}