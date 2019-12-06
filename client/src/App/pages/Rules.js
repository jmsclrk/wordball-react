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
      <div style={style} className='container'>
        <div className='container'>
          <h1 style={style} className='title'> Rules</h1>
        </div>
        <div className='container'>
          <br />
          <p>Click to fire the balls! </p>
          <br />
          <p>Wordball Extreme is two games in one: A game of skill, and a game of mental <span>
            <a href="https://dictionary.cambridge.org/dictionary/english/acuity">acuity</a>
          </span>.</p>
          <br />
          <p>The aim of the game is to score points using the random balls. Each ball has a letter, and each letter has a value linked to the frequency that letter is found in words.</p>
          <br />
          <p>The aim is to select the best 8 letters from the random selection, and place them in the rectangular 'word-hole' at the bottom of the play area.  If you don't like a letter, you can instead discard them firing them at the 'bonus-holes' at the top of the screen, each with a difficulty modifier.</p>
          <br />
          <p>Balls are fired upon clicking or tapping the screen. The ball is aimed at the point you clicked/tapped.</p>
          <br />
          <p>You will move to the next stage when the timer runs out. If you don't save any balls, your game will be over!</p>
          <br />
          <p>On the next screen you will tasked with creating as many words as possible from the balls you saved, so hopefully you chose well!</p>
          <br />
          <p>Points are calculated based on the value of the letters, and the length of the words. Be careful not to choose the wrong letters!</p>
          <br />
          <p>Good luck!</p>
        </div>

      </div>
    </Layout>
  )
}
