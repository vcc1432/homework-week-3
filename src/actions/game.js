export const NEW_GAME = 'NEW_GAME'

export function newGame(randomWord) {
  return {
    type: NEW_GAME,
    payload: randomWord

  }
}





