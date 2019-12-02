import React, { useState, useEffect } from 'react'
import HighScore from './HighScore'

export default function ScoreBoard(props) {

  const [getScores, setScores] = useState(null)

  const tableStyle = {
    // ADD CSS
    display: 'table-cell',
  }


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
        <HighScore key={index} playerName={highScore.playerName} skillScore={highScore.skillScore} smartScore={highScore.smartScore} />
      })
    }
  }

  return (
    <div class='container'>
      <h2>{props.title}</h2>
      <table className='tableStyle'>
        <tr>
          <th></th>
          <th>Player Name</th>
          <th>Balls Score</th>
          <th>Words Score</th>
          <th>Total</th>
        </tr>
        {buildHTML(getScores)}
      </table>
      <h3>Debug Data:</h3>
      <div>{getScores}</div>
    </div>
  )
}