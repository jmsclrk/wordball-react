import React from 'react';
import { levelList } from '../../model/config'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'

export default function Home() {

  function getWord() {
    let index = 0 //TODO remove magic number
    return levelList[index]
  }

  return (
    <Layout>
      <div className='buttons is-centered'>
        <p className="control">
          <Link to={{
            pathname: './skillgame',
            levelWord: { name: getWord() }
          }}>
            <button className='button is-rounded is-primary is-inverted is-outlined'>Play Now</button>
          </Link>

        </p>
        <p className="control">
          <Link to={'./levels'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>See Levels</button>
          </Link>
        </p>
        <p className="control">
          <Link to={'./scoreboard'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>Scoreboard</button>
          </Link>
        </p>
      </div>
<<<<<<< HEAD
      </Layout>
=======
    </Layout >
>>>>>>> 4efb0874e45039cdcce366a427de1fad360cb1cb
  )
}
