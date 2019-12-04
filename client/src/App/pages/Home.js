import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'

export default function Home() {

  return (
    <Layout>
      <div className='buttons is-centered'>
        <p className="control">
          <Link to={'./skillgame'}>
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
    </Layout >
  )
}
