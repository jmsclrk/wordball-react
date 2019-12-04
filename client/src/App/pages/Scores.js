import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'
import $ from 'jquery';

export default class Scores extends Component {

  componentDidMount() {
    const smartscore = Number($("#smartscore").attr('value'))
    const skillscore = Number($("#skillscore").attr('value'))
    $("#skillpoints").text(skillscore)
    $("#smartpoints").text(smartscore)
    $("#total").text(smartscore + skillscore)
    $("#bankedletters").attr('value', '')
    $("#skillscore").attr('value', '')
    $("#smartscore").attr('value', '')

    $('#scoresubmit').click(() => {
      const data = {
        name: $('#playername').val(),
        smartscore: smartscore,
        skillscore: skillscore,
        total: smartscore + skillscore
      }
      $.post('/api/getLeaderboard', data )
    })
  }



  render() {
    return (
      <Layout className='section'>
        <div className="container is-centered">
          <div className='container is-centered' id="gameover">
            <Link to={'./'}>
              <button className='button is-primary is-outline is-inverted' >
                Next Level
            </button>
            </Link>
            <h2>Final Scores</h2>
            <table className='table is-centered'>
              <tr>
                <th>Smart Score</th>
                <th>Skil Score</th>
                <th>Total</th>
              </tr>
              <tr>
                <td><span id="smartpoints"></span></td>
                <td><span id="skillpoints"></span></td>
                <td><span id="total"></span></td>
              </tr>
            </table>
            <br />
            <div className="is-centered field has-addons">
              <div className="control">
                <input id="playername" className="input" type="text" placeholder="Save your name on the high score table"></input>
              </div>
              <div className="control">
                <button id="scoresubmit" className="button is-primary is-inverted is-outline">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
