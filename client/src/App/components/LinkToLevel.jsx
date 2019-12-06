import React from 'react';
import { MAX_LETTERS, levelList } from '../../model/config'
import { Link } from 'react-router-dom';
import Seed from '../../model/seed'
import Level from '../../model/level'
import Game from '../../model/SkillGame'

export default function LinkToLevel(props) {

  function getWord() {
    return levelList[Math.floor(Math.random() * levelList.length)];
  }

  const getSeed = () => {
    if (props.word) {
      return new Seed(props.word)
    } else {
      return new Seed(getWord())
    }
  }

  const getLevel = () => {
    return new Level(getSeed(), MAX_LETTERS)
  }

  const getGame = () => {
    return new Game(getLevel())
  }

  return (
    <Link to={{
      pathname: './skillgame',
      playGame: getGame(),
    }}>
      {props.children}
    </Link>
  )
}
