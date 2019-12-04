import React from 'react'
import { levelList } from '../../model/config'
import { Link } from 'react-router-dom';

export default function LevelRow(props) {

function getWord() {
  let index = Number(props.levelId) - 1
  return levelList[index] 
}

function startLevel() {
  return (
    <Link to={{
        pathname: './skillgame',
        levelWord: { name: getWord() }
        }}>
          {props.levelId}
    </Link>
  ) 
}


  return (
    <tr>
      <td>{startLevel()}</td>
      <td>{props.score}</td>
      <td>{props.highScore}</td>
    </tr>
  )
}