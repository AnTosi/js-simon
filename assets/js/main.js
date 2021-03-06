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
let randomNumbers = []; 
//array vuoto per inserci numeri da prompt
let userNumbers = [];
//array vuoto numeri indovinati
let correctNumbers = [];
//array vuoto numeri sbagliati, non era richiesto ma è per metterlo nel messaggio finale
let forgottenNumbers = [];


//ciclo questa funzione per farla 5 volte e la pusho nell'array

for(let i=0; i < 5; i++){
    let thisNumber = randomNumbGen100();
    randomNumbers.push(parseInt(thisNumber));
}
console.log(randomNumbers);

// faccio l'alert

alert(`Memorizza i numeri che vedi, ti verrano richiesti dopo 30 secondi:
${randomNumbers}`)


//ora mi serve setTimeout con dentro i prompt per chiedere di inserire il numero, essendo 5 provo a metterli in un ciclo. I numeri che inserisce l'utente li pusho in un array e poi con foreach controllo se ogni numero è incluso nell'array dei numeri random, se sì pusho il risultato in un terzo array e nella stampa della risposta con length vedo quanti ne ha indovinati

//metto 3000 invece che 30000 mila per fare le prove sennò smatto ad aspettare 30 secondi ogni volta
const prompter = setTimeout(function (){
    insertNumbers()}, 3000);
// checkNumbers(userNumbers, randomNumbers);
// printResult(correctNumbers);
// setTimeout(checkNumbers(randomNumbers, userNumbers), 40000);
// setTimeout(printResult(correctNumbers), 43000)


//ora devo fare funzione insertNumbers, che dovrà cheidere 5 numeri con prompt:

function insertNumbers (){
    for (let i=0; i < 5; i++) {
        let userNumber = prompt(`Inserisci uno dei numeri che hai visto precedentemente`);
        userNumbers.push(parseInt(userNumber));
    }
    console.log(userNumbers);
    checkNumbers(userNumbers, randomNumbers);
    printResult(correctNumbers);
    // (checkNumbers(userNumbers, randomNumbers));
    // (printResult(correctNumbers));
}

function checkNumbers (userNumbers, randomNumbers) {
    randomNumbers.forEach(number => {
        if (userNumbers.includes(number)) {
            correctNumbers.push(number);
        } else {
            forgottenNumbers.push(number)
        }
    });
    console.log(`ti sei ricordato ${correctNumbers}`);
    console.log(`hai dimenticato ${forgottenNumbers}`);
}




// ora funzione print result per stampare a schermo il risultato


/**
 * Stampa a schermo i risultati corretti e il loro quantitativo
 * @param {array} correctNumbersArray array dei risultati corretti che vogliamo stampare
 */
function printResult (correctNumbersArray) {
    document.querySelector("h1").innerHTML = `Ti sei ricordato ${correctNumbersArray.length} numeri: ${correctNumbersArray.join(", ")}. Non ti sei ricordato ${forgottenNumbers.join(", ")}.`
}


//questo è il timer per la riunione con Chiara
//che ovviamente non è servito perché ogni volta che premevo ctrl+s ripartiva, e quindi è uscito dopo 10 minuti dall'inizio della riunione XD

// setTimeout(function(){ alert("RIUNIONE SU ZOOM"); }, 600000);

//non so perché col prompt non mi funziona il settimeout, provo con un altro sistema
//ovvero, inserisco il numero in uno spazio, al click dell'invio prendo il valore e lo pusho nell'array
// for (let i = 0; i < 5; i++) {
// document.querySelector("button").addEventListener("click", function(){
//     let thisNumber = document.querySelector("input").value;
    
//     userNumbers.push(thisNumber);
//     console.log(userNumbers);
// }
