import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SkillGame extends Component {
  render() {
    return (
    <div className="App">
      <div id="skillapp">
        <center>
          <canvas id="canvas" width="500" height="900"></canvas>
        </center>
      </div>
      <Link to={'./smartgame'}>
        <button variant="raised">
            NEXT
        </button>
      </Link>
    </div>
    );
  }
}
export default SkillGame;
