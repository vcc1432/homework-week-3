import * as React from 'react'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import { wordList } from '../lib/game'
import AddGuessForm from './AddGuessForm'



class GamePageContainer extends React.PureComponent {
  componentDidMount() {
    const randomWord = () => {
      return wordList[Math.floor(Math.random() * wordList.length)]
      }
      this.props.newGame(randomWord())
      this.props.makeGuess("G") 
      this.props.makeGuess("H") 
      this.props.makeGuess("E") 
  }



  render() {
    console.log(this.props)
      return (<div>
        Hello
        
      </div>)
    }
  }


const mapStateToProps = (state) => (
  { 
    randomWord: state.randomWord,
    letterGuess: state.letterGuess
  })

export default connect(mapStateToProps, { newGame, makeGuess })(GamePageContainer)