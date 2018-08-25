import * as React from 'react'
import { connect } from 'react-redux'
import { newGame, makeGuess, resetGame } from '../actions/game'
import { showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished, randomWord } from '../actions/game-logic'

import AddGuessForm from './AddGuessForm'


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

    if (wrongGuessLimit(word,guess)) {
      alert("You lose!")
    } else if (isWinner(word,guess)){
      alert("You win!")
    }
    
    if (gameFinished(word, guess)) {
      this.props.resetGame()
      this.props.newGame(randomWord())
    }
  }


  render() {
    //console.log(this.props.randomWord)
    //console.log(this.props.letterGuess)
    console.log(this.props)
      return (<div>
        Hello
        <p>{showGuess(this.props.randomWord, this.props.letterGuess)}</p>
        <AddGuessForm makeGuess={this.props.makeGuess} />
        <p>Wrong guesses: {wrongGuessCount(this.props.randomWord, this.props.letterGuess)}</p>
        <button>New game</button>
      </div>)
    }
  }


const mapStateToProps = (state) => (
  { 
    randomWord: state.randomWord,
    letterGuess: state.letterGuess
  })

export default connect(mapStateToProps, { newGame, makeGuess, resetGame })(GamePageContainer)