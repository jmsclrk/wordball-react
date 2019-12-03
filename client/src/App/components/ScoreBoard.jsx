import React, { useState, useEffect } from 'react'
import HighScore from './HighScore'


export default function ScoreBoard(props) {

  const [getScores, setScores] = useState(null)

  function getList() {
    fetch('/api/getLeaderboard')
      .then(res => res.json())
      .then(list => setScores(list))
  }

  useEffect(() => {
    getList()
  }, [])


  function buildHTML(highScores) {
    if (Array.isArray(highScores)) {
      return highScores.map((highScore, index) => {
        return <HighScore key={index} className='tbody' playerName={highScore.playerName} skillScore={highScore.skillScore} smartScore={highScore.smartScore} />
      })
    }
  }

  function getTitle() {
    if (props.title) { return props.title }
    return 'Scoreboard'
  }

  return (
    <div className='container'>
      <table className='table is-striped'>
        <thead><h3>{getTitle()}</h3>
        </thead>
        <tbody>
          <tr >
            <th>Avatar</th>
            <th>Player Name</th>
            <th>Balls Score</th>
            <th>Words Score</th>
            <th>Total</th>
          </tr>
          {buildHTML(getScores)}
        </tbody>
      </table>
    </div>
  )
}