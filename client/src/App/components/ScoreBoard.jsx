import React, { useState, useEffect } from 'react'
import HighScore from './HighScore'
import Layout from './Layout'

export default function ScoreBoard(props) {

  const [getScores, setScores] = useState(null)
  var list = []



  function getList () {
    console.log('requested')
    fetch('/api/getLeaderboard')
    .then(res => list = res.json())
    .then(list => console.log(list))
    .then(setScores(list))
    .then(console.log(getScores))
  }

  function buildHTML(highScores) {
    if (Array.isArray(highScores)) {
      return highScores.map((highScore, index) => {
        console.log(highScore)
        return <HighScore key={index} className='tbody' playerName={highScore.name} skillScore={highScore.skillscore} smartScore={highScore.smartscore} />
      })
    }
  }

  function getTitle() {
    if (props.title) { return props.title }
    return 'Scoreboard'
  }

  return (

    <Layout className='section'>
      <div className='container is-centered'>
        <h3>{getTitle()}</h3>
        <table className='table is-striped is-hoverable is-centered'>
          <thead></thead>
          <tbody>
            <tr >
              <th>Avatar</th>
              <th>Player Name</th>
              <th>Balls Score</th>
              <th>Words Score</th>
              <th>Total</th>
            </tr>
            {getList().then(buildHTML(getScores))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
