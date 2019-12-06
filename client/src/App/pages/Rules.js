import React from 'react';
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import LinkToLevel from '../components/LinkToLevel'

export default function Rules() {

  const style = {
    color: 'white'
  }

  return (

    <Layout>
      <div className='buttons is-centered'>
        <p className="control">
          <LinkToLevel >
            <button className='button is-rounded is-primary is-outlined is-inverted'>Play Now</button>
          </LinkToLevel>
        </p>
        <p className="control">
          <Link to={'./scoreboard'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>Scoreboard</button>
          </Link>
        </p>
      </div>
      <div style={style} className='container'>
        <h1 style={style} className='title'> Rules</h1>
        <p>Click to fire the balls! </p>
        <br />
        <p>Fire down to save up to 8 letters for the word game, or generate extra points by firing unwanted letters into the bonus holes above.</p>
        <br />
        <p>Be careful not to choose the wrong letters!</p>
      </div>
    </Layout>
  )
}
