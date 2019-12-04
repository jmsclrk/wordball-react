import React from 'react'
import { GoMarkGithub } from "react-icons/go";

export default function Footer(props) {

  return (
    <div className='section has-text-centered'>
      <footer className='has-text-white'>
        <a className='button is-primary is-outline is-inverted' href="http://www.github.com/Yasmineral/wordball" target="_blank" rel='noopener noreferrer'> Github <GoMarkGithub /> </a>
      </footer>
    </div>
  )
}