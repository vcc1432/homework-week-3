import * as React from 'react'
import { randomWord } from '../actions/game-logic'


export default class ResetButton extends React.PureComponent {
    
handleClick = () => {
    this.props.resetGame()
    this.props.newGame(randomWord())
     }
  
render() {
    return (<div>
      <button onClick={this.handleClick}>Start new game</button>
    </div>)
  }
}