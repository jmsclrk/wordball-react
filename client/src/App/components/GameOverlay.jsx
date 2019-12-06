import React from 'react'
import { CANVAS_WIDTH } from '../../model/config'

export default function GameOverlay(props) {

  const margin = CANVAS_WIDTH * 0.48

  const overlayStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    top: props.top,
    right: props.right,
    marginLeft: margin,
    marginRight: margin,
  }

  return (
    <div style={overlayStyle}>
      <center>
        <span className="details" align="center" >
          <span id="timer"></span>
          <span id="score"></span>
        </span>
      </center>
    </div>

  )
}
