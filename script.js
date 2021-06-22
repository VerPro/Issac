'use strict';
const buttonGuessElm = document.querySelector('#buttonGuess');
const resultElm = document.querySelector('.result');
const buttonAgain = document.querySelector('#again');

let numberIssac = Math.round(Math.random() * 100);
let numberUserElm = document.querySelector('#inputGuessNumber');

const buttonAgainFunction = () => {
  const aElm = document.createElement('a');
  aElm.textContent = 'Hraj se mnou znovu';
  aElm.classList.add('buttonAgain');
  aElm.setAttribute('href', 'index.html');
  buttonAgain.appendChild(aElm);
};

const guessNumber = () => {
  const numberUser = Number(numberUserElm.value);
  if (numberIssac === numberUser) {
    resultElm.textContent = `Ano, myslím na číslo  ${numberIssac}!`;
  } else {
    resultElm.textContent = `Ne, ${numberUser} není číslo, na které myslím. Myslím na číslo ${numberIssac}.`;
  }

  buttonAgainFunction();
  buttonGuessElm.setAttribute('disabled', 'true');
};

buttonGuessElm.addEventListener('click', guessNumber);
