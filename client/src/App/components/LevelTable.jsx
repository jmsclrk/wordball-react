import React from 'react'
import LevelRow from './LevelRow'

function LevelTable () {
  return (
    <table>
      <tr>
        <th>Level</th>
        <th>Your Score</th>
        <th>High Score</th>
      </tr>
      <LevelRow levelId='1' score='100' highScore='110'/>
      <LevelRow levelId='2' score='100' highScore='110'/>
      <LevelRow levelId='3' score='100' highScore='110'/>
      <LevelRow levelId='4' score='100' highScore='110'/>
    </table>
  )
}
