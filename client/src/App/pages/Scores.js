import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'
import LinkToLevel from '../components/LinkToLevel'
import $ from 'jquery';
import EndGame from '../components/EndGame';
import SubmitScore from '../components/SubmitScore';

export default function Scores(props) {

  const [smartScore, setSmartScore] = useState(null)
  const [skillScore, setSkillScore] = useState(null)



  useEffect(() => {
    setSmartScore(Number($("#smartscore").attr('value')))
    setSkillScore(Number($("#skillscore").attr('value')))
  })

  return (
    <Layout>
      <div className='buttons is-centered'>
        <p className="control">
          <Link to={'./'}>
            <button className='button is-rounded is-primary is-outlined is-inverted'>Back Home</button>
          </Link>
        </p>
        <p className="control">
          <LinkToLevel >
            <button className='button is-rounded is-primary is-outlined is-inverted'>Play Again</button>
          </LinkToLevel>
        </p>
        <p className="control">
          <Link to={'./scoreboard'}>
            <button id='scoreboard' className='button is-rounded is-primary is-outlined is-inverted'>Scoreboard</button>
          </Link>
        </p>
      </div>
      <EndGame skillScore={skillScore} smartScore={smartScore} />
      <br />
      <SubmitScore skillScore={skillScore} smartScore={smartScore} />
    </Layout>
  )
}
