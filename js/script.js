// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random 
// (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma
// dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// palidroma

// var stringa = prompt("Inserisci la parola che vuoi verificare che sia palidroma.");

// var risultato = palidroma(stringa);

// if (risultato == "true"){
//     document.getElementById("parola").innerHTML = "La parola " + stringa + " è palidroma";
// } else {
//     document.getElementById("parola").innerHTML = "La parola " + stringa + " non è palidroma";

// }

// // funzioni

// function palidroma(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// pari o dispari

var scelta = prompt("Pari o Dispari?");

var n = prompt ("Inserisci un numero da 1 a 5");

var r = Math.floor(Math.random() * 6) + 1;
console.log(r)

var ris = operazione(r, n);

if ((somma % 2 == 0 && scelta == "Pari") || (somma % 2 != 0 && scelta == "Dispari")) {
    document.getElementById("somma").innerHTML = "HAI VINTO!";
} else {
    document.getElementById("somma").innerHTML = "HAI PERSO...";
}

//funzioni

function operazione(random, number){

    var somma = random + number;
    return somma;

}