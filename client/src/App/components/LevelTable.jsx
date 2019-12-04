import React from 'react'
import LevelRow from './LevelRow'


export default function LevelTable() {

  return (
    <div className='level-item has-text-centered'>
      <div className='table-container is-centered'>
        <table className='table is-outline is-striped is-hoverable is-centered is-fullwidth'>
          <thead>
            <tr>
              <th>Level</th>
              {/* <th>Your Score</th> */}
              <th>High Score</th>
            </tr>
          </thead>
          <tbody>
            <LevelRow levelId='1' score='100' highScore='110' />
            <LevelRow levelId='2' score='100' highScore='110' />
            <LevelRow levelId='3' score='100' highScore='110' />
            <LevelRow levelId='4' score='100' highScore='110' />
          </tbody>
        </table>
      </div>
    </div>
  )
}

