import React, { Component } from 'react';
import { MAX_LETTERS, DEFAULT_TIMER, CANVAS_WIDTH, CANVAS_HEIGHT } from '../../model/config'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../../style/skillgame.css'
import Letter from '../../model/letter'
import Ball from '../../model/ball'
import Hole from '../../model/hole'
import Level from '../../model/level'
import Game from '../../model/SkillGame'
import Seed from '../../model/seeds'
import LayoutGame from '../components/LayoutGame'
import GameOverlay from '../components/GameOverlay'


class SkillGame extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.seed = new Seed(props.location.levelWord.name)
    const level = new Level(this.seed, MAX_LETTERS)
    this.state = { game: new Game(level) }
  }

  componentDidMount() {
    $("#navnext").hide()
    $("#skillscore").hide()
    $("#smartscore").hide()
    const letter = new Letter()
    const game = this.state.game
    const radius = 15
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const canvas2 = document.getElementById('canvas2')
    const ctx2 = canvas2.getContext('2d')
    const timeInterval = setInterval(countdown, 1000)
    let interval
    $("#score").show()
    let timeLeft
    var xVal
    if (process.env.NODE_ENV === 'production') {
      xVal = null
      timeLeft = DEFAULT_TIMER
    } else {
      xVal = 250
      timeLeft = 45
    }

    function countdown() {
      if (timeLeft === 0) {
        game.forceGameOver()
        clearInterval(timeInterval)
      } else {
        $('#timer').text(timeLeft + ' seconds remaining | ')
        timeLeft--
      }
    }

    countdown()

    game.letters.forEach(letter => game.balls.push(new Ball(750, radius, letter, canvas)))
    var ball = game.balls[0]

    interval = setInterval(draw, 10)

    let x2
    let y2

    function inBounds(y) {
      if (y < 600) {
        return false
      }
      return true
    }



      $('#canvas').bind('mousemove', function (e) {
        const offset = $(this).offset()
        x2 = e.pageX - offset.left
        y2 = e.pageY - offset.top
        $('#canvas').mousedown(function (canvas) {
          x2 = e.pageX - offset.left
          y2 = e.pageY - offset.top
        $('#canvas').mouseup(function (canvas) {
          if (inBounds(y2)) { ball.giveVelocity(ball.xPos, ball.yPos, x2, y2) }
        })
      })
    })


    function draw() {
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 3

      $('#score').text('Current Score: ' + game.score)
      fillBalls()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = "bold 15pt Arial";
      game.checkBallDone(ball)
      game.isBallinScoreHole(ball)
      game.isBallinWordHole(ball)
      game.isBallInTheAbyss(ball)
      checkGameOver()
      drawRectangle()
      drawHoles(game.holeArray)
      if (ball.isDone === true) {
        ball = game.currentBall()
      } else {
        drawBall(ball)
      }
      ctx.fillText('Foul Line!', 200, 620)
      ctx.strokeStyle= 'white'
      ctx.beginPath();
      ctx.moveTo(0, 600);
      ctx.lineTo(500, 600);
      ctx.stroke();
    }
    function drawHoles(array) {
      array.forEach(function drawHole(item) {
        ctx.fillStyle = 'black'
        ctx.beginPath()
        ctx.arc(item.xPos, item.yPos, item.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
        ctx.fillStyle = 'white'
        ctx.fillText('x' + item.score, item.xPos - 9, item.yPos+5)
      })
    }
    function drawPath(ctx, colour, x1, y1, x2, y2) {
      ctx.strokeStyle = colour
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.lineWidth = 2
    }

    function fillBalls() {
      ctx2.strokeStyle = 'white'
      ctx2.lineWidth = 3
      const radius = game.balls[0].radius
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
      var y = 920
      game.balls.forEach(function (item) {
        if (item.isClicked === false) {
          ctx2.beginPath()
          ctx2.strokeStyle = item.colour
          ctx2.arc(canvas2.width / 2, y, radius, 0, 2 * Math.PI)
          ctx2.stroke()
          y -= 40
        }
      })
    }
    function drawRectangle() {
      const radius = game.balls[0].radius
      var x = game.tLeftCorner[0] + radius
      ctx.beginPath()
      ctx.lineWidth = 3
      ctx.rect(game.tLeftCorner[0], game.tRightCorner[1], game.tRightCorner[0] - game.tLeftCorner[0], game.bRightCorner[1] - game.tLeftCorner[1])
      ctx.stroke()
      ctx.fillStyle = 'black'
      ctx.fill()
      game.word.forEach(function (item) {
        ctx.fillStyle = letter.getColour(item)
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.arc(x, game.tRightCorner[1] + 35, radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
        ctx.fillStyle = 'white'
        ctx.fillText(item, x - 10, game.tRightCorner[1] + 41)
        x += radius * 2
      })

    }
    function drawBall(ball) {
      ball.position()
      const x = ball.xPos
      const y = ball.yPos
      if (inBounds(y2) && ball.isClicked === false) {
        drawPath(ctx, ball.colour, ball.xPos, ball.yPos, x2, y2)
      }
      ctx.strokeStyle = ball.colour
      ctx.beginPath()
      ctx.arc(x, y, ball.radius, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.fillText(ball.letter, x + -7, y -1 + ball.radius/2)
    }
    function checkGameOver() {
      if (game.isGameOver() === true) {
        timeLeft = 0
        clearInterval(interval)
        $("#bankedletters").attr('value', game.word.join(''))
        $("#skillscore").attr('value', game.score)
        $("#navnext").trigger("click");
      }
    }
  }

  render() {
    return (
      <LayoutGame>
      <div className='container is-centered' id="skillapp">
        <GameOverlay top="35px" right='40px'/>
        <canvas id="canvas" width={CANVAS_WIDTH} height={CANVAS_HEIGHT}></canvas>
        <canvas id="canvas2" width="50" height={CANVAS_HEIGHT}></canvas>

        <Link to={'./smartgame'}>
          <button className='button is-primary is-inverted is-outline' id="navnext">
            next
        </button>
        </Link>
      </div>
      </LayoutGame>

    );
  }
}
export default SkillGame;
