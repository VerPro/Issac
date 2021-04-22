'use strict';
//Nechat vyskočit varovné okénko, pokud user nezadává number

const buttonGuessElm = document.querySelector('#buttonGuess');
const resultElm = document.querySelector('result');

let numberIssac = Math.round(Math.random() * 100);
let numberUser = document.querySelector('#inputGuessNumber');

const guessNumber = () => {
  if (numberIssac === numberUser) {
    console.log(`Ano, myslím na číslo ${numberIssac}!`);
  } else {
    console.log(
      `Ne, toto není číslo, na které myslím. Myslím na číslo ${numberIssac}.`,
    );
  }
};

buttonGuessElm.addEventListener('click', guessNumber);
