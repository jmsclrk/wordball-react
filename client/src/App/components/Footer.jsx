import React from 'react'
import { GoMarkGithub } from "react-icons/go";

export default function Footer(props) {

  const linkStyle = {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }

  const paddingStyle = {
    paddingRight: 1 + 'em'
  }

  const styleFooter = {
    position: 'relative',
    bottom: 0,
    width: 100 + '%'
  }

  return (
    <div style={styleFooter} className='section has-text-centered'>
      <a style={linkStyle} className='button is-primary is-outline is-inverted' href="http://www.github.com/Yasmineral/wordball" target="_blank" rel='noopener noreferrer'> <span style={paddingStyle}>Visit us on Github</span><br /><GoMarkGithub /> </a>
    </div >
  )
}