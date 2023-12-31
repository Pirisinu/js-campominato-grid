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
/* FUNZIONI GENERALI */
//INIT FUNCTION
function init(){

  for (let i = 1; i <= 100; i++) {

    const square = createBox(i);
    square.addEventListener('click', function(){
      console.log(square.id)
      this.classList.toggle('clicked');
      if(evenControl(square.id)=== 'even'){
        this.classList.toggle('even');
      }else{
        this.classList.toggle('odd');
      }
    });
    squareContainer.append(square);
  }

}

//BTN START FUNCTION
function btnStart(){
  //creiamo il bottone in html
  const btn = document.createElement('button');
  //ci scrivo sopra
  btn.innerHTML= 'Start';
  //Aggiungo un evento al click per far iniziare il gioco
  btn.addEventListener('click', function(){
    difficultyChoice.classList.add('d-none');
    this.classList.add('d-none');
    init();
  });

  return btn;
}

//RANDOM NUM GENERATOR FUNCTION
function randomNum(min, max){
 return Math.floor(Math.random() * (max - min +1) + min);
}

//EVEN CONTROLL FUNCTION
function evenControl(id){
  if(!(id % 2 == 0)) return 'even';
  return 'odd';
}
//ELEMENT GENERATOR FUNCTION
function createBox(index){
  const square = document.createElement('div');
  square.classList.add('square', 'easy');
  square.innerHTML = `<span>${index}</span>`;
  square.id = index;

  return square;
}
//RESET FUNCTION
function reset(){
  squareContainer.innerHTML = '';
  const initButton = btnStart();
  squareContainer.append(initButton)
  difficultyChoice.classList.remove('d-none');
}