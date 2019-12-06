import React from 'react'
import { Link } from 'react-router-dom';


export default function HighScore(props) {

  const scoreStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }

  function replaceMissing(prop, returnIfMissing) {
    if (prop) {
      return prop
    } else {
      return returnIfMissing
    }
  }

  function playerPicture() {
    const imageSrc = replaceMissing(props.picture, require('../../assets/default-profile-picture.jpg'))
    return (
      <figure className='image is-48x48'>
        <img className='is-rounded' src={imageSrc} alt="Default player" ></img>
      </figure>
    )
  }

  function playerName() {
    return replaceMissing(props.playerName, 'The Mysterious Stranger')
  }

  function smartScore() {
    return replaceMissing(props.smartScore, 0)
  }

  function skillScore() {
    return replaceMissing(props.skillScore, 0)
  }

  function totalScore() {
    return replaceMissing(props.total, 0)
  }


  return (
    <tr key={playerName()} className='highscore' style={scoreStyle}>
      {/* <td>{playerPicture()}</td> */}
      <td>{playerName()}</td>
      <td className='has-text-right'>{skillScore()}</td>
      <td className='has-text-right'>{smartScore()}</td>
      <td className='has-text-right'>{totalScore()}</td>
    </tr>
  )
}
