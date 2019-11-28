import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Letter from '../../model/letter'

class SmartGame extends Component {
  constructor(props) {
    super(props);
    this.state = { smartGame: { playerLetters: ['A', 'B', 'C', 'D', 'E'],
      skillPoints: 20,
      smartPoints: 0,
      possibleWords:[],
      validWords: []
    }};
  }

  componentDidMount() {
    const game = this.state.smartGame
    const letterGetReq = game.playerLetters.join('').toLowerCase()
    const letters = new Letter()
    $('#validwordslist').html('')

    $.get(`https://jsonp.afeld.me/?url=http://anagramica.com/all/:${letterGetReq}`, function(data) {
        game.possibleWords = data.all.filter((w) => { if (w.length > 2) { return true } }).map((w) => {
          return w.toUpperCase()
        })
    });

    generateLetterButtons ()
    let wordInput = ''
    $('#typearea').text(wordInput)

    $('#clearbutton').click(() => {
      clearTextInput()
    })

    $('[class*="letterbutton-on"]').click((event) => {
      console.log(event.currentTarget.className)
      if (event.currentTarget.className === "letterbutton-off") { return }
      wordInput += event.currentTarget.innerHTML
      event.currentTarget.className = "letterbutton-off"
      $('#typearea').text(wordInput)
      if (!game.validWords.includes(wordInput) && game.possibleWords.includes(wordInput)) {
        game.validWords.push(wordInput)
        savePoints()
        clearTextInput()
      }
      $('#validwordslist').html(game.validWords.join(' - '))
    })

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
        game.smartPoints += letters.getScore(char)
      })
      $('#score').text('Current Score: ' + game.smartPoints)
    }

    function gameOver() {
    }
  }

  render() {
    return (
    <div className="App">
      <div id="smartapp">
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
        <button variant="raised">
            SCORES
        </button>
      </Link>
    </div>
    );
  }
}
export default SmartGame;
