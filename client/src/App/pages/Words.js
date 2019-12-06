import React, { useState } from "react"
import Layout from "../components/Layout"
import { Link } from 'react-router-dom'
import LinkToLevel from '../components/LinkToLevel'
import Extreme from "../components/Extreme"

export default function Words() {

  return (
    <Layout>
      <div className='buttons is-centered'>
        <p className="control">
          <Link to={'./'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>Home</button>
          </Link>
        </p>
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
      <Extreme />
    </Layout>
  )
}
