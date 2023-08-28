/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//Selecciono los elementos con los que voy a trabajar
const valor = document.querySelector("#card-valor");
const palosTop = document.getElementById("card-Top");
const palosBottom = document.getElementById("card-Bottom");
const boton = document.getElementById("boton");

//Creo una funcion que genere aleatoriamente nuevas cartas con diferentes simbolos y valores

const generadorDeCartas = () => {
  let valorInfo = [
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
  let palosInfo = ["♦", "♥", "♠", "♣"];

  const random = arr => Math.floor(Math.random() * arr.length);
  const valores = valorInfo[random(valorInfo)];
  const simbolo = palosInfo[random(palosInfo)];

  //Creo un condicional para que genere cambios de color segun el simbolo de la carta

  if (simbolo === "♦" || simbolo === "♥") {
    palosTop.style.color = "red";
    palosBottom.style.color = "red";
  } else {
    palosTop.style.color = "black";
    palosBottom.style.color = "black";
  }

  valor.innerHTML = valores;
  palosTop.innerHTML = simbolo;
  palosBottom.innerHTML = simbolo;
};
window.onload = () => {
  generadorDeCartas();
};

//Eveneto de "Click" para que se genere una nueva carta cuando el ususario prinche en el boton

boton.addEventListener("click", () => generadorDeCartas());

//Coloco un "SetInterval" para actualizar la carta cada 10 segundos.

setInterval(generadorDeCartas, 10000);
