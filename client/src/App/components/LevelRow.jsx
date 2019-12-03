import React from 'react'
import Score from './Score'

function LevelRow(props) {

  return (
    <tr>
      <td>{props.levelId}</td>
      <td>{props.score}</td>
      <td>{props.highScore}</td>
    </tr>
  )
}