'use strict';

// Elementos do DOM
const btnRules = document.getElementById('btn--rules');
const btnPlay = document.getElementById('btn--play');
const btnCloseMOdal = document.querySelector('.close-modal');
const btnCloseGame = document.querySelector('.close-game');
const modalRulesEl = document.getElementById('modal--rules');
const modalGameEl = document.getElementById('modal--game');
const YouLost = document.getElementById('youLost');
const overlayEl = document.querySelector('.overlay');

let Chelliaudio = new Audio('Chelli.mp3');

// const audio = document.querySelector('Chelli');
// play.audio;
// Initial state
overlayEl.classList.add('hidden');

function openModal() {
  modalRulesEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
}

function closeModal() {
  modalRulesEl.classList.add('hidden');
  modalGameEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  console.log('clicked');
}
btnRules.addEventListener('click', openModal);
btnCloseMOdal.addEventListener('click', closeModal);
btnCloseGame.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

btnPlay.addEventListener('click', function () {
  setTimeout(playGame, 2000);
});

function playGame() {
  modalGameEl.classList.remove('hidden');
  if (!document.hidden) {
    YouLost.classList.remove('hidden');
    Chelliaudio.play();
  }
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    YouLost.classList.add('hidden');
    // modalGameYouLost.classList.remove('hidden');
    // Chelliaudio.pause();
  } else {
    if(){
    YouLost.classList.remove('hidden');
    Chelliaudio.play();
    }
  }
});
