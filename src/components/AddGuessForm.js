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

    if (this.state.guess) {
     this.props.makeGuess(this.state.guess)
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