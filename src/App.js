import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import GamePageContainer from './components/GamePageContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/hangman" component={GamePageContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
