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
    width: 50 + '%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height: '10vh'
  }

  const centerDisplay = {
    display: 'inline-block',
    justifyContent:'center',
    alignItems:'center',
    right: -100 + 'px',
    top: 10 + 'px'
  }

  return (
    <center>
      <div style={smallerWidth} className="container is-centered">
        <div className="field has-addons">
          <form>
            <div className="control">
              <input
              style={{ textAlign: 'center' }}
                className="input"
                type="text"
                id='playername'
                placeholder="Please enter player name"
              />
              <a id='submitScore' style={centerDisplay} type='submit' className='button is-rounded is-primary is-outlined is-inverted'>
                Submit
              </a>
            </div>
          </form>
        </div>
      </div>
    </center>
  )
}
