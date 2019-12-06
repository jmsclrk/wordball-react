import React from "react";
import { Route, Switch } from 'react-router-dom';
import { MemoryRouter } from 'react-router'
import '../style/App.css';
import '../style/bulma.css'
import Home from './pages/Home';
import SkillGame from './pages/SkillGame';
import SmartGame from './pages/SmartGame';
import Scores from './pages/Scores';
import Words from './pages/Words';
import Rules from './pages/Rules';
import ScoreBoard from './pages/ScoreBoard';
import Levels from './pages/Levels';


export default function App(props) {

  const style = {
    display: 'grid',
    minHeight: 100 + 'vh',
    margin: 'auto',
    background: 'linear-gradient(318deg, #c123e2, #238be2, #d44afb)',
    backgroundSize: 600 + '%' + 600 + '%',
  }

  const App = () => (
    <div style={style}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/levels' component={Levels} />
        <Route path='/skillgame' component={SkillGame} />
        <Route path='/smartgame' component={SmartGame} />
        <Route path='/score' component={Scores} />
        <Route path='/scoreboard' component={ScoreBoard} />
        <Route path='/extreme' component={Words} />
        <Route path='/rules' component={Rules} />
      </Switch>
      <div id="bankedletters" value=""></div>
      <div id="skillscore" value=""></div>
      <div id="smartscore" value=""></div>
    </div>
  )

  return (
    <MemoryRouter>
      <App className='section' />
    </MemoryRouter>
  );
}
