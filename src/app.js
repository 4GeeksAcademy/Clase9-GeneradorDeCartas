/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let palos = ["♦", "♥", "♠", "♣"];

window.onload = () => {
  let numAleatorio = Math.floor(Math.random() * numeros.length);
  let palosAleatorio = Math.floor(Math.random() * palos.length);

  document.getElementById("cards");
};
