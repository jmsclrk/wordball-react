import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MemoryRouter } from 'react-router'
import './App.css';
import Home from './pages/Home';
import SkillGame from './pages/SkillGame';
import SmartGame from './pages/SmartGame';
import Scores from './pages/Scores';
// import Leaderboard from './pages/Leaderboard';
import ScoreBoard from './pages/ScoreBoard';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/skillgame' component={SkillGame} />
          <Route path='/smartgame' component={SmartGame} />
          <Route path='/score' component={Scores} />
          <Route path='/leaderboard' component={ScoreBoard} />
        </Switch>
        <div id="bankedletters" value=""></div>
        <div id="skillscore" value=""></div>
        <div id="smartscore" value=""></div>
      </div>

    )
    return (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  }
}

export default App;
