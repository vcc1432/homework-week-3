import { wordList } from '../lib/game'

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
  
  export const drawHangman = (word,guesses) => {
    switch(wrongGuessCount(word, guesses)) {
           
    case 1:
      return 'https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png'

    case 2:
      return 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png'
    
    case 3:
      return 'https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png'   
      
    case 4:
      return 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png'
    
    case 5:
      return 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png'

    case 6: 
      return 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png'

    default:
      return 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png'  
    }
  }

  