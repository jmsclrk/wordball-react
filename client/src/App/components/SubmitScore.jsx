import React, { useState } from 'react'
import $ from 'jquery'

export default function SubmitScore(props) {

  const [name, setName] = useState('')

  function postData() {
    const scoreData = {
      name: name,
      smartScore: props.smartscore,
      skillScore: props.skillscore,
      total: (props.smartScore + props.skillScore)
    }
    $.post('/api/getLeaderboard', scoreData)
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    postData()
    $('#scoreboard').trigger('click')
  }

  return (
    <div className="container is-centered">
      <div className="field has-addons">
        <form onSubmit={handleSubmit}>

          <div className="control">
            <input
              value={name}
              onChange={handleNameChange}
              className="input"
              type="text"
              placeholder="Find a repository"
            />
          </div>
          <div className="control">
            <a type='submit' className="button is-outlined">
              Submit
           </a>
          </div>
        </form>
      </div>

      <form className="has-text-centered" onSubmit={handleSubmit}>
        <div className="field has-addons-centered">
          <div className="control">
            <input
              value={name}
              onChange={handleNameChange}
              name='nickname'
              autoComplete='off'
              className="input "
              type="text"
              placeholder="Enter your Nickname" />
          </div>
          <div className='control'>
            <a
              type='submit'
              className="button is-inverted is-outlined">
              Submit
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}