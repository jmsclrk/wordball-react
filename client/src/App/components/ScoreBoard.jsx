import React, { useState, useEffect } from 'react'
import HighScore from './HighScore'
import Layout from './Layout'
import { Link } from 'react-router-dom'


export default function ScoreBoard(props) {

  const tableStyle = {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }

  const [getScores, setScores] = useState(null)

  function getList() {
    return fetch('/api/getLeaderboard')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('scores fetched: ', responseJson)
        setScores(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getList()
  }, [])


  function buildHTML(highScores) {
    if (Array.isArray(highScores)) {
      return highScores.map((highScore, index) => {
        return <HighScore key={index} className='tbody' playerName={highScore.name} skillScore={highScore.skillScore} smartScore={highScore.smartScore} total={highScore.total} />
      })
    }
  }

  function getTitle() {
    if (props.title) { return props.title }
    return 'Scoreboard'
  }

  return (

    <center>
      <div className='level-item has-text-centered'>
        <div className='table-container is-centered'>
          <table style={tableStyle} className='table is-outline is-striped is-hoverable is-centered is-fullwidth'>
            <thead >
              <tr >
                {/* <th>Avatar</th> */}
                <th style={tableStyle} >Player Name</th>
                <th style={tableStyle} className='has-text-right'>Balls Score</th>
                <th style={tableStyle} className='has-text-right'>Words Score</th>
                <th style={tableStyle} className='has-text-right'>Total</th>
              </tr>
            </thead>
            <tbody>
              {buildHTML(getScores)}
            </tbody>
          </table>
        </div>
      </div>
    </center>

  )
}
