import React from 'react'

export default HighScore(props){

  const scoreStyle = {
    // ADD CSS
  }

  const profileImageStyle = {
    maxheight: 50 + 'px',
  }

  const playerPicture = () {
    if (props.picture) {
      return <img src="{props.picture}" alt="Picture of player" style='profileImageStyle' ></img>
    } else {
      return <img src="client/public/default-profile-picture.jpg" alt="Default player image" style='profileImageStyle'></img>
    }
  }

  const playerName = () {
    if (props.playerName) {
      return <h3>props.playerName</h3>
    } else {
      return <h3>The Mysterious Stranger</h3>
    }
  }


  return (
    <tr key={props.playerName} className='highscore' style={scoreStyle}>
      <td>{playerPicture()}</td>
      <td>{playerName()}</td>
      <td>{props.skillscore}</td>
      <td>{props.smartscore}</td>
      <td>{props.smartscore + props.skillscore}</td>
    </tr>
  )
}