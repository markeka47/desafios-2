let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

let btn = document.querySelector('#console');
let btn2 = document.querySelector('#alerta');
let btn3 = document.querySelector('#prompt');
let btn4 = document.querySelector('#soma');

function consoleLog() {
  console.log('Botão Pressionado!');
}

function alerta() {
  alert('Eu amo JS!');
}

function perguntaCidade() {
  let cidadeBrasil = prompt('Uma cidade no Brasil?');
  alert(`Estive em ${cidadeBrasil} e pensei em você!!!`);
}

function somanumero() {
  let numero1 = prompt('Entre com um número inteiro');
  let numero2 = prompt('Entre com um segundo número inteiro');
  let resultado = parseInt(numero1) + parseInt(numero2);
  alert(`A soma dos númers é ${resultado}.`);
}

btn.addEventListener('click', consoleLog);
btn2.addEventListener('click', alerta);
btn3.addEventListener('click', perguntaCidade);
btn4.addEventListener('click', somanumero);



// function dobrarNumero(numerod) {
//   let resultado = numerod * 2;
//   return resultado;
// }

// function calcularMedia(numero1, numero2, numero3) {
//   let media = (numero1 + numero2 + numero3) / 3;
//   return media;
// }

// function encontrarMaior(numero1, numero2) { 
//   if (numero1 > numero2) 
//   { return numero1; } else { return numero2; } 
// }

// function olanome() {
//   let nome = prompt('Qual é o seu nome');
//   console.log(`Olá, ${nome}!`);
// }

// function olamundo() {
//   console.log('Olá mundo...');
// }

// olanome();
// olamundo();

