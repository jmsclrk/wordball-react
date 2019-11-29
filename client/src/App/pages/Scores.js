import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Scores extends Component {

  componentDidMount() {
    const smartscore = Number($("#smartscore").attr('value'))
    const skillscore = Number($("#skillscore").attr('value'))
    $("#skillpoints").text(skillscore)
    $("#smartpoints").text(smartscore)
    $("#total").text(smartscore + skillscore)
    $("#bankedletters").attr('value', '')
    $("#skillscore").attr('value', '')
    $("#smartscore").attr('value', '')
  }

  render() {
    return (
    <div className="App">
      <div id="gameover">
        <center>
          <h1>Final Scores</h1>
          <h3>Skill: <span id="skillpoints"></span></h3>
          <h3>Smart: <span id="smartpoints"></span></h3>
          <h2>Total: <span id="total"></span></h2>
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
