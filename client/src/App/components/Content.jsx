import React from 'react'

export default function Content(props) {

  return (
    <div className='section has-text-centered'>
      {props.children}
    </div>
  )
}