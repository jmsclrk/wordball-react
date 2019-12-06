import React, { useState } from "react";
import ScoreBoard from "../components/ScoreBoard";
import { Link } from 'react-router-dom'
import LinkToLevel from '../components/LinkToLevel'
import Layout from "../components/Layout";

export default function LeaderBoard() {

  const [data, setData] = useState(null)

  function getList() {
    return fetch('/api/getLeaderboard')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('scores fetched: ', responseJson)
        setData(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
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
          <Link to={'./'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>Home</button>
          </Link>
        </p>
      </div>
      <ScoreBoard title='Scoreboard' data={data} />
    </Layout>
  )
}
