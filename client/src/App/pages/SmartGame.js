import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Letter from '../../model/letter'
import { DEFAULT_TIMER } from '../../model/config'
import {withRouter} from 'react-router-dom';


class SmartGame extends Component {
  constructor(props) {
    super(props);
    this.state = { smartGame: {
      playerLetters: $("#bankedletters").attr('value').split(''),
      score: 0,
      possibleWords:[],
      validWords: []
    }};
  }

  componentDidMount() {
    const game = this.state.smartGame
    const letterGetReq = game.playerLetters.join('').toLowerCase()
    if(letterGetReq.length<3) {
      gameOver()
    }

    const timeInterval = setInterval(countdown, 1000)
    let timeLeft = DEFAULT_TIMER
    $("#navnext").hide()
    const letters = new Letter()

    function countdown() {
      $('#score').text('Current Score: ' + game.score)
    if (timeLeft === 0) {
      clearInterval(timeInterval)
      gameOver()
      } else {
        $('#timer').text(timeLeft + ' seconds remaining')
        timeLeft--
      }
    }
    countdown()

    $.get(`https://jsonp.afeld.me/?url=http://anagramica.com/all/:${letterGetReq}`, function(data) {
        game.possibleWords = data.all.filter((w) => { if (w.length > 2) { return true } }).map((w) => {
          return w.toUpperCase()
        })
    });

    generateLetterButtons()

    let wordInput = ''
    $('#typearea').text(wordInput)

    $('#clearbutton').click(() => {
      clearTextInput()
    })

    $('[class*="letterbutton-on"]').click((event) => {
      if (event.currentTarget.className === "letterbutton-off") { return }
      wordInput += event.currentTarget.innerHTML
      event.currentTarget.className = "letterbutton-off"
      $('#typearea').text(wordInput)
      verifyWord()
      $('#validwordslist').html(game.validWords.join(' - '))
    })

    function verifyWord () {
      if (!game.validWords.includes(wordInput) && game.possibleWords.includes(wordInput)) {
        game.validWords.push(wordInput)
        savePoints()
        clearTextInput()
      }
    }

    function generateLetterButtons () {
      const buttonHTML = game.playerLetters.map((letter) => {
        const score = letters.getScore(letter)
        return `<button class="letterbutton-on${score}" value="${score}">${letter}</button>`
      })
      $('#letterkeys').html(buttonHTML.join('\n'))
    }

    function clearTextInput () {
      wordInput = ''
      $('#typearea').text(wordInput)
      $('.letterbutton-off').each((_index, button) => {
        $(button).attr('class', `letterbutton-on${button.value}`)
      })
    }

    function savePoints () {
      wordInput.split('').forEach((char) => {
        game.score += letters.getScore(char)
      })
      $('#score').text('Current Score: ' + game.score)
    }

    function gameOver() {
      $("#smartscore").attr('value', game.score)
      $("#navnext").trigger( "click" );
    }
  }

  render() {
    return (
    <div className="App">
      <div id="smartapp">
      <span class="details" align="center" ><div id="timer"></div></span> <span class="details"><div id="score"></div></span>
        <center>
          <div id='gamediv'>
            <div id="validwords">
              <u>WORDS</u>
              <span id="validwordslist"></span>
            </div>
            <div id="typebox">
              <b><span id="typearea"></span></b><span className="blinking-cursor">_</span>
            </div>
            <div id="letterkeys">
            </div>
            <div id="clearword">
              <button id="clearbutton">CLEAR</button>
            </div>
          </div>
        </center>
      </div>
      <Link to={'./score'}>
        <button variant="raised" id="navnext">
            SCORES
        </button>
      </Link>
    </div>
    );
  }
}
export default withRouter(SmartGame);
