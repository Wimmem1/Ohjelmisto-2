// Tehtävä 1. 

console.log("I'm printing to console!");

///////////////////////////////////////////////////////

// Tehtävä 2


const name = prompt("Kirjoita nimesi:");

console.log(`Hei! ${name}`);

// Extraa pritnttaa nimen html sivulle

const tervehdys1 = document.getElementById("tervehdys"); // Etsitään elementti HTML-sivulta, jonka id on "tervehdys"

// Sitten sijoitetaan annettu nimi sen sisälle:

tervehdys1.textContent = `Hei! ${name}`; // Tässä sisällytetään tervehdys1 muuttujan sisään tekstiä

// Tehtävä 3

const numero1t = prompt("Anna kokonaisluku:");
const numero2t = prompt("Anna kokonaisluku:");
const numero3t  = prompt("Anna kokonaisluku:"); // Tässä annetut luvut ovat stringejä ja ne pitää muuttaa int muotoon
const numero1 = parseInt(numero1t) // Tässä esimerkki siitä kun str, muutetaan int mutoon
const numero2 = parseInt(numero2t)
const numero3 = parseInt(numero3t)


const yhtenlaskettu = numero1 + numero2 + numero3;
const yhtenlaskettu2 = document.getElementById("yhteenlaskettu"); // Etsitään elementti HTML-sivulta, jonka id on "yhteenlaskettu"
yhtenlaskettu2.textContent = `Kokonaislukujen summa: ${yhtenlaskettu}`; // Tässä printataan lukujen summa nettisivulle.

// Tehtävä 4

// Tässä arvotaan minkä tuvan oppilas saa

const randint = Math.floor(Math.random() * 6) + 1;

