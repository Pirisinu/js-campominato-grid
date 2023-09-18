 /* 
**Svolgimento**

1. Richiamo i vari elementi dall'html 
2. Mi vado a creare varie funzioni
  - (1)Funzione di init() programma
  - (2)Funzione bottone di avvio
  - (3)Funzione generatore random di numeri
  - (4)Funzione coloratore di classe con parametro (pari o dispari)
  - (5)Funzione generatrice di div
  - (6)Funzione reset
 */

const squareContainer = document.querySelector('.container');
const difficultyChoice = document.querySelector('.difficulty-choice');
reset()
//FUNZIONI GENERALI

//INIT FUNCTION
function init(){

}
//BTN START FUNCTION
function btnStart(){
  //creiamo il bottone in html
 const btn = document.createElement('button');
 //ci scrivo sopra
 btn.innerHTML= 'Start';

 return btn;
}
//RANDOM NUM GENERATOR FUNCTION
function randomNum(){

}
//EVEN CONTROLL FUNCTION
function evenControll(){

}
//ELEMENT GENERATOR FUNCTION
function createElement(){

}
//RESET FUNCTION
function reset(){
  squareContainer.innerHTML = '';
  const initButton = btnStart();
  squareContainer.append(initButton)
  difficultyChoice.classList.remove('d-none');
}