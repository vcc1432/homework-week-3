export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
export const RESET_GAME = 'RESET_GAME'

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

export function resetGame() {
    return {
      type: RESET_GAME
  }
}
  
