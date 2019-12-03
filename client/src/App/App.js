import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MemoryRouter } from 'react-router'
import './App.css';
import Home from './pages/Home';
import SkillGame from './pages/SkillGame';
import SmartGame from './pages/SmartGame';
import Scores from './pages/Scores';
import Leaderboard from './pages/Leaderboard';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const App = () => (
      <div>

      <header>
        <h1> Word  Ball  <div id='extream'> X-TREME </div> </h1>
      </header>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/skillgame' component={SkillGame}/>
          <Route path='/smartgame' component={SmartGame}/>
          <Route path='/score' component={Scores}/>
          <Route path='/leaderboard' component={Leaderboard}/>
        </Switch>
        <div id="bankedletters" value=""></div>
        <div id="skillscore" value=""></div>
        <div id="smartscore" value=""></div>

        <footer>
          <a href="http://www.github.com/Yasmineral/wordball" target="_blank">Visit the WordBall project on Github</a>
        </footer>

      </div>

    )
    return (
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
  }
}

export default App;
