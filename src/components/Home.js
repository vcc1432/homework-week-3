import * as React from 'react'
import { Link } from 'react-router-dom'


export default function Home(props) {
  return (<div>
    <h1>Lets play HANGMAN!</h1>
    <button><Link to={`/hangman`}>Start playing!</Link></button>
  </div>)
}