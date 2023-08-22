/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let palos = [1, 2, 3, 4];

window.onload = function() {
  let numAleatorio = Math.floor(Math.random() * numeros.length);
  let palosAleatorio = Math.floor(Math.random() * palos.length);

  console.log(numeros[numAleatorio] + palos[palosAleatorio]);
};
