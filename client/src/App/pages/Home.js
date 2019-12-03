import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LevelTable from '../components/LevelTable'


class Home extends Component {
  render() {
    return (


    <div className="App">
    <center>
      <div id="gamediv">
      <h1>Welcome To Wordball</h1>
      {/* Link to List.js */}
      <Link to={'./skillgame'}>
        <button variant="raised" class='button'>
            PLAY
        </button>
      </Link>
      <Link to={'./leaderboard'}>
        <button variant="raised" class='button'>
            LEADERBOARD
        </button>
      </Link>
      </div>
        <LevelTable/>
      </center>
    </div>
    );
  }
}
export default Home;
