import React from 'react'

export default function Button(props) {
  return (
    <button className='button is-rounded is-primary is-outlined is-inverted'>
      {props.children}
    </button>
  )
}