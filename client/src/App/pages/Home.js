import React, { useEffect, useState } from 'react';
import Bulma from 'bulma'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'

export default function Home() {

  const [levelList, setLevelList] = useState()

  function getLevels() {
    console.log('requested')
    const levels = fetch('/api/getLevelList')
      .then(response => response.json())
    console.log(levels)
    return levels
  }

  useEffect(() => {
    setLevelList(getLevels())
    console.log(levelList)
  }, [])

  return (
    <Layout>
      <div className='buttons is-centered'>
        <p className="control">
          <Link to={'./skillgame'}>
            <button className='button is-rounded is-primary is-inverted is-outlined'> Play </button>
          </Link>
        </p>
        <p className="control">
          <Link to={'./leaderboard'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>leaderboard</button>
          </Link>
        </p>
      </div>
      </center>
      </div>
      </Layout>
  )
}
