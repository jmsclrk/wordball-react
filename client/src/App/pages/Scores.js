import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Scores extends Component {
  render() {
    return (
    <div className="App">
      <div id="gameover">
        <center>
          <h1>Final Scores</h1>
          <h3>Skill: 5</h3>
          <h3>Smart: 15</h3>
          <h2>Total: 20</h2>
          </center>
      </div>
      <Link to={'./'}>
        <button variant="raised">
            NEXT LEVEL
        </button>
      </Link>
    </div>
    );
  }
}
export default Scores;
