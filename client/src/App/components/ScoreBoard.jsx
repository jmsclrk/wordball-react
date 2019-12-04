import React, { useState, useEffect } from 'react'
import HighScore from './HighScore'
import Layout from './Layout'

export default function ScoreBoard(props) {

  const titleStyle = {
    // fontFamily: 'Faster One',
    color: 'white'
  }

  const [getScores, setScores] = useState(null)

  function getList() {
    return fetch('/api/getLeaderboard')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
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
        return <HighScore key={index} className='tbody' playerName={highScore.playerName} skillScore={highScore.skillScore} smartScore={highScore.smartScore} />
      })
    }
  }

  function getTitle() {
    if (props.title) { return props.title }
    return 'Scoreboard'
  }

  return (

    <Layout >
      <div className='table-container is-centered'>
        <h3 style={titleStyle} className='subtitle is-medium is-white'>{getTitle()}</h3>
        <table className='table is-outline is-striped is-hoverable is-centered is-fullwidth'>
          <thead>
            <tr >
              {/* <th>Avatar</th> */}
              <th>Player Name</th>
              <th>Balls Score</th>
              <th>Words Score</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {buildHTML(getScores)}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}