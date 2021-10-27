// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Info:
// L'alert non si chiude in automatico. Dovete chiuderla voi a mano cliccando su ok.

//comincio dalle prime cose, credo funzione generatore numeri random, la metto dentro a un ciclo per farne 5, pusho i numeri in un array e creo alert con dentro i numeri generati


//presa e adattata da w3school

/**
 * 
 *mi stampa un numero random da 1 a 100
 * @returns numero random da 1 a 100
 */
function randomNumbGen100 () 
    {
        return Math.floor(Math.random() * 100 + 1);
    }


//array vuoto per inserirci numeri che genererò
let numberList = []; 


//ciclo questa funzione per farla 5 volte e la pusho nell'array

for(let i=0; i < 5; i++){
    let thisNumber = randomNumbGen100();
    numberList.push(` ${thisNumber}`);
}
console.log(numberList);

// faccio l'alert

alert(`Memorizza i numeri che vedi, ti verrano richiesti dopo 30 secondi:
${numberList}`)

//questo è il timer per la riunione con Chiara

setTimeout(function(){ alert("RIUNIONE SU ZOOM"); }, 600000);