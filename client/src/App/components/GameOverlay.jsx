import React from 'react'

export default function GameOverlay(props) {

  const overlayStyle = {
    position: 'relative',
    textAlign: 'center',
    top: props.top,
    right: props.right
  }

  return (
    <div style={overlayStyle}>
      <span className="details" align="center" >
        <span id="timer"></span>
        <span id="score"></span>
      </span>
    </div>
  )
}
