import * as React from 'react'
import { connect } from 'react-redux'
import { newGame, makeGuess, resetGame } from '../actions/game'
import { showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished, randomWord } from '../actions/game-logic'
import AddGuessForm from './AddGuessForm'
import ResetButton from './ResetButton'


class GamePageContainer extends React.PureComponent {
  componentDidMount() {
    this.props.newGame(randomWord())
  }

  componentDidUpdate() {
    const word = this.props.randomWord
    const guess = this.props.letterGuess
    console.log(wrongGuessLimit(word, guess))
    console.log(isWinner(word, guess))
    console.log(gameFinished(word, guess))

 
    
  //   if (gameFinished(word, guess)) {
  //     this.props.resetGame()
  //     this.props.newGame(randomWord())
  //   }
  }


  render() {
    //console.log(this.props.randomWord)
    //console.log(this.props.letterGuess)
    console.log(this.props)
      return (<div>
        <h1>Lets play hangman....</h1>
        <p>{showGuess(this.props.randomWord, this.props.letterGuess)}</p>
        <AddGuessForm makeGuess={this.props.makeGuess} />
        <p>Wrong guesses: {wrongGuessCount(this.props.randomWord, this.props.letterGuess)}</p>
        <h2>{wrongGuessLimit(this.props.randomWord, this.props.letterGuess) ? "You lose!" : ''}</h2>
        <h2>{isWinner(this.props.randomWord, this.props.letterGuess) ? "You win!" : ''}</h2>
        <p>{gameFinished(this.props.randomWord, this.props.letterGuess) ? "The game is finished. Click the button to start a new game!" : ''}</p>
        <ResetButton 
          resetGame={this.props.resetGame} 
          newGame={this.props.newGame} 
          />
      </div>)
    }
  }


const mapStateToProps = (state) => (
  { 
    randomWord: state.randomWord,
    letterGuess: state.letterGuess
  })

export default connect(mapStateToProps, { newGame, makeGuess, resetGame })(GamePageContainer)