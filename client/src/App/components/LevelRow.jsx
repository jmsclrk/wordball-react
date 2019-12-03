import React from 'react'

export default function LevelRow(props) {

  return (
    <tr>
      <td>{props.levelId}</td>
      <td>{props.score}</td>
      <td>{props.highScore}</td>
    </tr>
  )
}