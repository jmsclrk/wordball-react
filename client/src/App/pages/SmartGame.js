import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";

class SmartGame extends Component {

  componentDidMount() {

      const smartGame = {
        this.playerLetters = ['A', 'B', 'C', 'D', 'E']
        this.skillPoints = skillPoints
        this.smartPoints = 0
        this.possibleWords = []
        this.validWords = []
      }
    }

    $('#clearbutton').click(() => {
      console.log('clicked')
    })
  }

  render() {
    return (
    <div className="App">
      <div id="smartapp">
        <center>
          <div id='gamediv'>
            <div id="validwords">
              <u>WORDS</u>
              <span id="validwordslist"></span>
            </div>
            <div id="typebox">
              <b><span id="typearea"></span></b><span className="blinking-cursor">_</span>
            </div>
            <div id="letterkeys">
            </div>
            <div id="clearword">
              <button id="clearbutton">CLEAR</button>
            </div>
          </div>
        </center>
      </div>
      <Link to={'./score'}>
        <button variant="raised">
            SCORES
        </button>
      </Link>
    </div>
    );
  }
}
export default SmartGame;
