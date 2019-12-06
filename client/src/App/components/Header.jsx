import React from 'react'
import { Link } from 'react-router-dom'
import { GiThunderball } from "react-icons/gi";

export default function Header(props) {

  const style = {
    padding: 0,
    font: 50 + 'rem',
    fontFamily: 'Faster One',
    color: 'white'
  }

  function buttonClicked() {

  }

  return (

    <div style={style} className='section has-text-centered is-wide' >
      <div className='level'>
        <div className='level-item has-text-centered'>
          <div style={style} className='is-size-1'>
            <p style={style}>WordBall</p>
            <p><Link style={style} to={'./extreme'}>
              <span ><GiThunderball size={50} /></span>
            </Link>
              XTREME</p>
          </div>
        </div>
      </div>
    </div >
  )
}