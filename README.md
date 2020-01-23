# ⚽️ 🏀 🏈 ⚾️ 🎱 Wordball 🎱 ⚾️ 🏈 🏀 ⚽️ #
## Summary ##

A fun game written completely in Javascript using the MERN stack.

WORDBALL is a physics based word-game where you throw letter balls into a score-hole or a word-hole. Letter balls you fire into score holes give you *skill points*. Letter balls you save into the rectangular letter bank are used in the next round to create words which give you *smart points*. Test your 🧠 and your 🎯with WORDBALL!

[PLAY HERE](https://wordballxtreme.herokuapp.com/)

#### WORDBALL WAS CREATED BY: ####
- https://github.com/Yasmineral
- https://github.com/jmhc22
- https://github.com/JDtheGeek
- https://github.com/jlonsdale

## Setup ##

First, clone this repository. Then:

```bash
> npm install

> npm run unit-tests #to run unit tests

> npm run dev #to concurrently run the express server and react app
> npm run cypress:open #run in second command line window to access integration tests
```
#### Tech Stack ####
- Language: JavaScript (ES6)
- Backend Server: Express.js
- Database: MongoDB
- Frontend: jQuery, React
- Third party API: http://www.anagramica.com/api

#### Dependencies ####
body-parser, ejs, express, mongodb, react-icons, bulma, jquery, react, yarn

devDependencies:
cypress, concurrently, eslint, jest, nodemon, nyc, babel

## Requirements ##
* A user can choose whether to bank letters or use them to score points in a skill round powered by a physics engine.
* A user can use their banked letters to spell out as many words as possible in a word round.
* A user can save their name and score to an arcade style leaderboard.

## Tests ##

#### Technologies ####

Jest - unit tests written for key parts of the game.

Cypress - whilst integration tests aren't as common when testing games/gameplay, we decided we would attempt to write some tests using jest to challenge ourselves. We successfully managed to make jest test the gameplay by playing both rounds of the game.

INITIAL REPOSITORY: https://github.com/Yasmineral/wordball
