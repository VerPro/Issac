'use strict';
// robůtek Issac
//přeložit proměnné do aj
//Nechat vyskočit varovné okénko, pokud user nezadává number
let cisloNaKtereMyslim = Math.round(Math.random() * 100);
let cislo = Number(prompt('Uhádni, na které číslo od 0 do 100 myslím'));

if (cislo === cisloNaKtereMyslim) {
  console.log('Ano, myslím na číslo ' + cisloNaKtereMyslim + '!');
} else {
  console.log(
    'Ne, toto není číslo, na které myslím. Myslím na číslo ' +
      cisloNaKtereMyslim,
  );
}

/*Hádací stroj SWITCH 

let cislo_na_ktere_myslim =  Math.round(Math.random()*100);
let cislo=Number(prompt("Uhádni, na které číslo od 0 do 100 myslím"));

switch(cislo){
  case(cislo_na_ktere_myslim):
  console.log("Ano, myslím na číslo "+cislo_na_ktere_myslim+"!")
  break;


default:
  console.log("Ne, toto není číslo, na které myslím. Myslím na číslo "+cislo_na_ktere_myslim)
}
*/
