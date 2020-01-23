# Makers Final Project - Wordball Xtreme #
## Summary ##

A fun game written completely in Javascript using the MERN stack.

[PLAY HERE](https://wordballxtreme.herokuapp.com/)

## Setup ##

First, clone this repository. Then:

```bash
> npm install

> npm run unit-tests #to run unit tests

> npm run dev #to concurrently run the express server and react app
> npm run cypress:open #run in second command line window to access integration tests
```
#### Dependencies ####
* body-parser
* ejs
* express
* mongodb
* react-icons
* bulma
* jquery
* react
* yarn

devDependencies:
* cypress
* concurrently
* eslint
* jest
* nodemon
* nyc
* babel

## Requirements ##
* A user can choose whether to bank letters or use them to score points in a skill round powered by a physics engine.
* A user can use their banked letters to spell out as many words as possible in a word round.
* A user can save their name and score to an arcade style leaderboard.

## Tests ##

### Technologies ###

Jest - unit tests written for key parts of the game.

Cypress - whilst integration tests aren't as common when testing games/gameplay, we decided we would attempt to write some tests using jest to challenge ourselves. We successfully managed to make jest test the gameplay by playing both rounds of the game.
