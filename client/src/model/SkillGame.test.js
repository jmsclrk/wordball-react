import SkillGame from './skillGame';

import Ball from './ball';
jest.mock('./ball');

const level = {
  letters:['t','e','s','t'],
}

const letters = ['t','e','s','t']

const game = new SkillGame(level)
letters.forEach(letter => game.balls.push(new Ball()))

it('Has the right number of balls', () => {
  expect(game.balls.length).toBe(4)
});

it('Starts with score = 0', () => {
  expect(game.score).toBe(0)
});

it('Starts with word = []', () => {
  expect(game.word.length).toBe(0)
});

it('forces game over', () => {
  expect(game.isGameOver()).toNotBeTruthy
  game.forceGameOver()
  expect(game.isGameOver()).toBeTruthy
});

it('Starts with counter = 0', () => {
  const game = new SkillGame(level)
  letters.forEach(letter => game.balls.push(new Ball()))
  expect(game.counter).toBe(0)
});

it('increase counter by 1', () => {
  const game = new SkillGame(level)
  letters.forEach(letter => game.balls.push(new Ball()))
  game.increaseCounter()
  expect(game.counter).toBe(1)
});

it('returns a currentBall', () => {
  const game = new SkillGame(level)
  const ball = new Ball()
  letters.forEach(letter => game.balls.push(ball))
  game.increaseCounter()
  expect(game.currentBall()).toBe(ball)
});

it('tests if a ball is in abyss', () => {
  const game = new SkillGame(level)
  const ball = new Ball()
  ball.yPos=-100
  ball.xPos=250
  ball.radius=10
  game.isBallInTheAbyss(ball)
  expect(game.counter).toBe(1)
});


it('tests if a ball is in wordhole', () => {
  const game = new SkillGame(level)
  const ball = new Ball()
  ball.yPos=820
  ball.xPos=250
  ball.radius=10
  game.isBallinWordHole(ball)
  expect(game.counter).toBe(1)
});

// it('tests if a ball is in scorehole', () => {
//   const game = new SkillGame(level)
//   const ball = new Ball()
//   game.holeArray = [{xPos:100,yPos:250,radius:10}]
//   ball.yPos=100
//   ball.xPos=250
//   ball.radius=10
//   game.isBallinScoreHole(ball)
//   expect(game.counter).toBe(1)
// });
