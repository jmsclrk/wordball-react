import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="App">
      <h1>Welcome To Wordball</h1>
      {/* Link to List.js */}
      <Link to={'./skillgame'}>
        <button variant="raised" class='navbuttons'> PLAY </button>
      </Link>
      <Link to={'./leaderboard'}>
        <button variant="raised" class='navbuttons'>LEADERBOARD</button>
      </Link>
    </div>
  );
}
