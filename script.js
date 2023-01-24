'use strict';

// ---------------------DOM ELEMENTS----------------------------
const btnRules = document.getElementById('btn--rules');
const btnPlay = document.getElementById('btn--play');
const btnCover1 = document.querySelector('.cover1');
const btnCover2 = document.querySelector('.cover2');
const btnCloseMOdal = document
  .querySelector('.close-modal')
  .addEventListener('click', closeModal);
const btnCloseGame = document
  .querySelector('.close-game')
  .addEventListener('click', closeModal);
const modalRulesEl = document.getElementById('modal--rules');
const modalGameEl = document.getElementById('modal--game');
const YouLost = document.getElementById('youLost');
const overlayEl = document.querySelector('.overlay');
const catOverlay = document.querySelector('.cat-overlay');
let catPic = document.querySelector('.cat--pic');
let displayScore = document.getElementById('displayScore');
let displayHighscore = document.querySelector('.highscore');

const btnEasy = document
  .getElementById('easy')
  .addEventListener('click', function () {
    difficulty = 3000;
    console.log(difficulty);
  });
const btnNormal = document
  .getElementById('normal')
  .addEventListener('click', function () {
    difficulty = 2000;
    console.log(difficulty);
  });
const btnHard = document
  .getElementById('hard')
  .addEventListener('click', function () {
    difficulty = 1000;
    console.log(difficulty);
  });
const btnNightmare = document
  .getElementById('nightmare')
  .addEventListener('click', function () {
    difficulty = 500;
    console.log(difficulty);
  });

overlayEl.addEventListener('click', closeModal);

//---------------------RULES AND PLAY BUTTONS-------------------------------------------------
btnRules.addEventListener('click', openRules);
btnPlay.addEventListener('click', function () {
  if (!playing) {
    playing = true;
    looking = true;
    setTimeout(playGame, difficulty);
  }
});

//-----------------------------------INITIAL VARIABLES-----------------------------------
let LostAudio = new Audio('sounds/perdeu.mp3');
let VictoryAudio = new Audio('sounds/catvictory.mp3');
let difficulty = 2000;
let looking = true;
let playing = false;
let score = 0;
var interval;
let highscore = 0;
overlayEl.classList.add('hidden');

// ------------------------------COVER BUTTONS-----------------------------
btnCover1.addEventListener('click', function () {
  catOverlay.classList.toggle('hidden');
  looking = !looking;
  console.log(looking);
});

btnCover2.addEventListener('click', function () {
  catOverlay.classList.toggle('hidden');
  looking = !looking;
  console.log(looking);
  if (looking && playing && score < 9) {
    youLose();
  }
});

//----------------------------------FUNCTIONS------------------------------------------
function openRules() {
  modalRulesEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
}

function closeModal() {
  looking = false;
  playing = false;
  console.log('clicked');
  modalRulesEl.classList.add('hidden');
  modalGameEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  window.clearInterval(interval);
  catOverlay.classList.add('hidden');
  VictoryAudio.pause();
}

function playGame() {
  score = 0.0;
  YouLost.classList.add('hidden');
  YouLost.innerHTML = 'PERDEU !';
  console.log(looking, playing);
  changeCatPic();
  if (!looking && playing) {
    modalGameEl.classList.remove('hidden');
    setTimer();
  }

  if (looking) {
    youLose();
    displayScore.innerHTML = 'Score: 0.00';
  }
}

function youLose() {
  playing = false;
  modalGameEl.classList.remove('hidden');
  YouLost.classList.remove('hidden');
  LostAudio.play();
}

function setTimer() {
  var start = new Date().getTime();

  if (!looking) {
    interval = window.setInterval(function () {
      var time = new Date().getTime() - start;
      // score = Math.floor(time / 1000);
      score = time / 1000;
      if (score >= 9 || looking) {
        window.clearInterval(interval);
        displayScore.innerHTML = 'Score: ' + score;

        if (score > highscore) {
          highscore = score;
          displayHighscore.innerHTML = 'HIGH SCORE: ' + highscore;
        }
        if (score >= 9) {
          catPic.src = `img/catvictory.gif`;
          VictoryAudio.play();
          catOverlay.classList.toggle('hidden');
          YouLost.classList.remove('hidden');
          YouLost.innerHTML = 'GANHOU !';
          displayScore.innerHTML = 'Score: 9.000';
          displayHighscore.innerHTML = 'HIGH SCORE: 9.000';
          highscore = 9.0;
        }
      }
      console.log(score);
    });
  }
}

function changeCatPic() {
  let catNumber = Math.trunc(Math.random() * 11 + 1);
  catPic.src = `img/cat-${catNumber}.jpg`;
  console.log(catNumber);
}
