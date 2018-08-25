import { wordList } from '../lib/game'



export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
export const RESET = 'RESET'

export function newGame(randomWord) {
  return {
    type: NEW_GAME,
    payload: randomWord

  }
}

export function makeGuess(guess) {
    return {
      type: MAKE_GUESS,
      payload: guess
    }
  }

export function reset() {
    return {
      type: RESET,
      payload: {
          randomWord: '',
          guess: []
    }
  }
}
  
  export const randomWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  }

  export const showGuess = (word, guesses) => {
    return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
  }

  export const wrongGuessCount = (word, guesses) => {
    return guesses.filter(guess => word.indexOf(guess) < 0).length
  }

  export const wrongGuessLimit = (word, guesses) => {
    return guesses.filter(guess => word.indexOf(guess) < 0).length >= 6
  }
  
  export const isWinner = (word, guesses) => {
    return showGuess(word, guesses) === word.split('').join(' ')
  }
  
  export const gameFinished = (word, guesses) => {
    return (wrongGuessLimit(word, guesses) || isWinner(word, guesses))
  }
  