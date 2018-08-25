import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (<div>
    <h1>Welcome to Hangman!</h1>
    <h2>Do you think you can beat the computer?</h2>
    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hangman_game.jpg/360px-Hangman_game.jpg'} alt={'hangman'} />

    <h3>Rules:</h3>
      <ul>
        <li>the computer selects a random word</li>
        <li>You have to guess the letters of the word</li>
        <li>If you are correct, the letter will be shown</li>
        <li>If you are wrong, you will lose a guess</li>
        <li> You have a total of <b>six</b> guesses </li>
        <li> If you have used all your guesses without guessing the correct word, you lose!</li>
      </ul>
    <h2> Are you ready?</h2>
    <button><Link to={`/hangman`}>Start playing!</Link></button>
  </div>)
}