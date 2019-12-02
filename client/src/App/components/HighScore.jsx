import React from 'react'

export default function HighScore(props) {

  const scoreStyle = {
    // ADD CSS
  }

  const profileImageStyle = {
    maxheight: 50 + 'px',
  }

  function replaceMissing(prop, returnIfMissing) {
    if (prop) {
      return prop
    } else {
      return returnIfMissing
    }
  }

  const playerPicture = () => {
    const imageSrc = replaceMissing(props.picture, 'client/public/default-profile-picture.jpg')
    return (<img src={imageSrc} alt="Default player image" style='{profileImageStyle}' ></img>)
  }

  const playerName = () => {
    return replaceMissing(props.playerName, 'The Mysterious Stranger')
  }

  const smartScore = () => {
    return replaceMissing(props.smartScore, 0)
  }

  const skillScore = () => {
    return replaceMissing(props.skillScore, 0)
  }

  const totalScore = () => {
    return (smartScore() + skillScore())
  }


  return (
    <tr key={playerName()} className='highscore' style={scoreStyle}>
      <td>{playerPicture()}</td>
      <td>{playerName()}</td>
      <td>{smartScore()}</td>
      <td>{skillScore()}</td>
      <td>{totalScore()}</td>
    </tr>
  )
}