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


