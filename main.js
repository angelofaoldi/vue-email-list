/* 

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail

generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.


AXIOS
https://axios-http.com/docs/intro 

*/

// FUNZIONE PER GENERARE MAIL CASUALE

function casualMail() {
    const dominio = ['gmail.com', 'yahoo.com', 'outlook.com'];
    const dominioRandom = dominio[Math.floor(Math.random() * dominio.lenght)];
    const account = Math.random().toString(36).substring(7); // Genera una stringa casuale
    return `${account}@${dominioRandom}`;
}

console.log(casualMail);

// GENERARE 10 MAIL CASUALI

const emailList = document.getElementById('email-list');
// colleghiamo un elemento HTML al JS

// con il ciclo for stabiliamo un numero di 10 emails
for (let i = 0; i < 10; i++) {

    // passiamo la funzione alla costante randomEmail
    const randomEmail = casualMail();

    // crea un list item nella <ul id="email-list">
    const li = document.createElement('li');

    // aggiungiamo in ogni <li> una mail random
    li.textContent = randomEmail;
    emailList.appendChild(li);
}





