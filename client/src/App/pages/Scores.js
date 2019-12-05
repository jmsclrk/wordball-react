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
      <center>
      <div className="container is-centered">
      <div>
        <input id="playername" className="input" type="text" placeholder="Save your name on the high score table"></input>
      </div>
      <br />
      <div className='button is-primary is-outline is-inverted'>
        <button id="scoresubmit" className="button is-primary is-inverted is-outline">Confirm</button>
      </div>
      </div>
              <br />
                      <br />
        <div className="container is-centered">
          <div className='container is-centered' id="gameover">
            <Link to={'./'}>
              <button className='button is-primary is-outline is-inverted' >
                Next Level
            </button>
              <br />
                <br />
            </Link>
            <table className='table is-centered'>
            <thead>
              <tr>
                <th>Smart Score</th>
                <th>Skil Score</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><span id="smartpoints"></span></td>
                <td><span id="skillpoints"></span></td>
                <td><span id="total"></span></td>
              </tr>
              </tbody>
            </table>
            <br />
            <center>
            <div>

            </div>
            </center>
          </div>
        </div>
        </center>
      </Layout>
    )
  }
}
