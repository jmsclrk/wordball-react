import React from 'react'

export default function EndGame(props) {

  const tableStyle = {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }

  console.log('props:', props)

  return (
    <center>
      <div className='table-container is-centered'>
        <table style={tableStyle} className='table is-centered'>
          <thead>
            <tr>
              <th className='has-text-center' style={tableStyle} >Skill Score</th>
              <th className='has-text-center' style={tableStyle} >Smart Score</th>
              <th className='has-text-center' style={tableStyle} >Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='has-text-right'>{props.skillScore}</td>
              <td className='has-text-right'>{props.smartScore}</td>
              <td className='has-text-right'>{props.skillScore + props.smartScore}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  )
}