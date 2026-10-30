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

const numero1 = prompt()