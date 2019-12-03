import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

  return (
    <Link to={'./'}>
      <header className='container'>
        <h1> Word  Ball  <div id='extreme'> X-TREME </div> </h1>
      </header>
    </Link>
  )
}