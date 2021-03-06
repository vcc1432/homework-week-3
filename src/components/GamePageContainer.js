import * as React from 'react'
import { connect } from 'react-redux'
import { newGame, makeGuess, resetGame } from '../actions/game'
import { randomWord, gameFinished } from '../actions/game-logic'
import AddGuessForm from './AddGuessForm'
import ResetButton from './ResetButton'
import GamePage from './GamePage'


class GamePageContainer extends React.PureComponent {
  componentDidMount() {
    this.props.newGame(randomWord())
  }

  render() {
    if (!gameFinished(this.props.randomWord, this.props.letterGuess)) {
      return (
      <div>
        <GamePage 
          randomWord={this.props.randomWord}
          letterGuess={this.props.letterGuess} 
        />
        <AddGuessForm makeGuess={this.props.makeGuess} />
        <ResetButton 
          resetGame={this.props.resetGame} 
          newGame={this.props.newGame} 
          />
      </div>
      )
    } else {
      return (
        <div>
          <GamePage 
            randomWord={this.props.randomWord}
            letterGuess={this.props.letterGuess} 
          />
          <ResetButton 
            resetGame={this.props.resetGame} 
            newGame={this.props.newGame} 
            />
        </div>
        )
      }
    }
  }


const mapStateToProps = (state) => (
  { 
    randomWord: state.randomWord,
    letterGuess: state.letterGuess
  })

export default connect(mapStateToProps, { newGame, makeGuess, resetGame })(GamePageContainer)