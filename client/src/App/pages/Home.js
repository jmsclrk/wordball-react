import React from 'react';
import { levelList } from '../../model/config'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'

export default function Home() {

  function getWord() {
    return levelList[Math.floor(Math.random()*levelList.length)];
  }

  return (
    <Layout>
      <div className='buttons is-centered'>
        <p className="control">
          <Link to={{
            pathname: './skillgame',
            levelWord: { name: getWord() }
          }}>
            <button id='playbutton' className='button is-rounded is-primary is-inverted is-outlined'>Random Level</button>
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
        <p className="control">
          <Link to={'./smartgame'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>SmartGame Backdoor</button>
          </Link>
        </p>



      </div>
    </Layout>
  )
}
