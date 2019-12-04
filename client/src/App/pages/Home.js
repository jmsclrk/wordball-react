import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'

export default function Home() {
  return (

    <div className="App">
    <center>
      <div id="gamediv">
      <h1>Welcome To Wordball</h1>
      {/* Link to List.js */}
      <Link to={'./skillgame'}>
        <button variant="raised" class='button'> PLAY </button>
      </Link>
      <Link to={'./leaderboard'}>
        <button variant="raised" class='button'>LEADERBOARD</button>
      </Link>
      </div>
    </Layout>
  );
}
