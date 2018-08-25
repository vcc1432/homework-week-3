export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

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
  


  export const showGuess = (word, guesses) => {
    return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
  }

  export const wrongGuessCount = (word, guesses) => {
    return guesses.filter(guess => word.indexOf(guess) < 0).length
  }