import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import WBVideo from './../../assets/wordball-video-tutorial.mp4'

export default function Rules() {

  return (
    <div id="video-buttons-div" className="container">
      <p id="home-p" className="control">
        <Link id="home-link" to={'./'}>
          <button className='button is-rounded is-primary is-outlined is-inverted'>Home</button>
        </Link>
      </p>
      <div id="video-player-div" className="video-wrapper">
        <ReactPlayer className="react-player" url={WBVideo} playing />
      </div>
    </div>
  )
}
