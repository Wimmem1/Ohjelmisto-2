const uusi__lista = [1, 2, 3, 6,] // Tässä esimerkki listasta //

uusi__lista.sort((a,b) => a-b) // Miten "Sortataan lista oikeaan järjestykseen pineimmästä suurimpaan"


// Tssä esimerkki miten tehdään funktioita js


// ns. anonyymi funktio
const minunFunktio = function () {
    return "Kissa kettu pöllö";

};

minunFunktio();

const arvo = minunFunktio();

console.log(arvo);


// ns. nimetyt funktiot

function hienofunktio() {
    return Math.random() * 100;

}

console.log(hienofunktio());

// Tässä esimerkki while true loopista


while (true) {
    console.log(hienofunktio())
};