import React from 'react';
import { levelList } from '../../model/config'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'
import LinkToLevel from '../components/LinkToLevel';

export default function Home() {

  function getWord() {
    return levelList[Math.floor(Math.random() * levelList.length)];
  }

  // <p className="control">
  //   <Link to={'./levels'}>
  //     <button className='button is-rounded is-primary is-outlined is-inverted'>See Levels</button>
  //   </Link>
  // </p>

  return (
    <Layout>
      <div className='buttons is-centered'>
        <p className="control">
          <LinkToLevel word={getWord()} >
            <button className='button is-rounded is-primary is-outlined is-inverted'>Play Now</button>
          </LinkToLevel>
        </p>
        <p className="control">
          <Link to={'./scoreboard'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>Scoreboard</button>
          </Link>
        </p>
        <p className="control">
          <Link to={'./rules'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>Rules</button>
          </Link>
        </p>
      </div>
    </Layout>
  )
}
