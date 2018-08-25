import * as React from 'react'

export default class AddGuessForm extends React.PureComponent {
     
  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value.toLowerCase()
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    const guess = this.state.guess

    if (guess.length === 1 && guess.match(/[a-z]/i)) {
     this.props.makeGuess(guess)
     } else {
       alert("Please enter a letter!")
     }
  }

  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Guess a letter:
          <input type="text" name="guess" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}