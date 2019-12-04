import React from 'react'
import { Link } from 'react-router-dom'
import { GiThunderball } from "react-icons/gi";

export default function Header(props) {

  const style = {
    font: 10 + 'em',
    fontFamily: 'Faster One',
    color: 'white'
  }

  return (
    <Link to={'./'}>
      <div className='section has-text-centered is-wide' >
        <div className='container'>
          <div style={style} className='subtitle is-size-1'>
            <p>WordBall</p>
            <p><GiThunderball /> XTREME</p>
          </div>
        </div>
      </div>
    </Link>
  )
}