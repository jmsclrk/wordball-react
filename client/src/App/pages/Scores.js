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

    <center>



    <div id='gamediv'>
      <div id="gameover">

      <Link to={'./'}>
        <button class='button' variant="raised">
          NEXT LEVEL
        </button>
      </Link>

      <table>
        <tr>
        <td colspan="3"> <h2>Final Scores</h2> </td>
        </tr>

        <tr>
        <th><h2>Smart Score</h2></th>
        <th><h2>Skil Score</h2></th>
        <th><h2>Total</h2></th>

        </tr>
        <tr>
        <th><h3><span id="smartpoints"></span></h3></th>
        <th><h3><span id="skillpoints"></span></h3></th>
        <th><h3><span id="total"></span></h3></th>
        </tr>
      </table>
      </div>
      </div>
  </center>

    </div>
    )
  }
}

export default Scores;
