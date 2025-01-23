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
  alert(`A soma dos número é ${resultado}.`);
}

btn.addEventListener('click', consoleLog);
btn2.addEventListener('click', alerta);
btn3.addEventListener('click', perguntaCidade);
btn4.addEventListener('click', somanumero);