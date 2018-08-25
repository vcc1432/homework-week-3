import * as React from 'react'
import { connect } from 'react-redux'
import { newGame, makeGuess, showGuess, wrongGuessCount } from '../actions/game'
import { wordList } from '../lib/game'
import AddGuessForm from './AddGuessForm'


class GamePageContainer extends React.PureComponent {
  componentDidMount() {
    const randomWord = () => {
      return wordList[Math.floor(Math.random() * wordList.length)]
      }
      this.props.newGame(randomWord())
      // this.props.makeGuess("guess") 
  }

  render() {
    console.log(this.props.randomWord)
    console.log(this.props.letterGuess)
      return (<div>
        Hello
        <p>{showGuess(this.props.randomWord, this.props.letterGuess)}</p>
        <p>{wrongGuessCount(this.props.randomWord, this.props.letterGuess)}</p>
        <AddGuessForm makeGuess={this.props.makeGuess} />
      </div>)
    }
  }


const mapStateToProps = (state) => (
  { 
    randomWord: state.randomWord,
    letterGuess: state.letterGuess
  })

export default connect(mapStateToProps, { newGame, makeGuess })(GamePageContainer)