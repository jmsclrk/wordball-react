import React, { useState } from 'react'
import $ from 'jquery'

export default function SubmitScore(props) {
  const [name, setName] = useState('')
  $('#submitScore').click(() => {
    const data = {
      name: $('#playername').val(),
      smartScore: props.smartScore,
      skillScore: props.skillScore,
      total: (props.smartScore + props.skillScore)
    }
    $.post('/api/getLeaderboard', data)
    $('#scoreboard').trigger('click')
  })

  const smallerWidth = {
    width: 50 + '%'
  }

  return (
    <center>
      <div style={smallerWidth} className="container is-centered">
        <div className="field has-addons">
          <form>
            <div className="control">
              <input
                className="input"
                type="text"
                id='playername'
                placeholder="Find a repository"
              />
            </div>
            <div className="control">
              <a id='submitScore' type='submit' className="button is-outlined">
                Submit
              </a>
            </div>
          </form>
        </div>
      </div>
    </center>
  )
}