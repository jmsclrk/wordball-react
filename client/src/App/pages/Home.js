import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Welcome To Wordball</h1>
      {/* Link to List.js */}
      <Link to={'./skillgame'}>
        <button variant="raised" class='navbuttons'>
            PLAY
        </button>
      </Link>
      <Link to={'./leaderboard'}>
        <button variant="raised" class='navbuttons'>
            LEADERBOARD
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;
