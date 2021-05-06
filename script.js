'use strict';
//Nechat vyskočit varovné okénko, pokud user nezadává number
const buttonGuessElm = document.querySelector('#buttonGuess');
const resultElm = document.querySelector('.result');
const buttonAgain = document.querySelector('#again');

let numberIssac = Math.round(Math.random() * 100);
let numberUser = document.querySelector('#inputGuessNumber');

buttonAgainFunction = () => {
  const aElm = document.createElement('a');
  aElm.textContent = 'Hraj se mnou znovu';
  aElm.classList.add('buttonAgain');
  aElm.setAttribute('href', 'index.html');
  aElm.appendChild(buttonAgain);
};

const guessNumber = (numberUser) => {
  if (numberIssac === numberUser) {
    resultElm.textContent = `Ano, myslím na číslo ${numberIssac}!`;
  } else {
    resultElm.textContent = `Ne, ${numberUser} není číslo, na které myslím. Myslím na číslo ${numberIssac}.`;
    buttonAgainFunction();
    numberUser.setAttribute('value', '');
  }
};

buttonGuessElm.addEventListener('click', guessNumber);
