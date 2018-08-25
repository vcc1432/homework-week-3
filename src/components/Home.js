import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (<div>
    <h1>Lets play HANGMAN!</h1>
    <p>Welcome to the game. Do you think you can beat the computer?</p>
    <button><Link to={`/hangman`}>Start playing!</Link></button>
  </div>)
}