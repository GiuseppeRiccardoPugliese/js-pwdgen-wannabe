/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23. */


//Chiedi di inserire all'utente il suo NOME
const userName = (prompt("Per favore, inserisci il tuo nome"));

//Chiedi di inserire all'utente il suo COGNOME
const userSurname = (prompt("Per favore, inserisci il tuo cognome"));

//Chiedi di inserire all'utente il suo COLORE PREFERITO
const userPrefColor = (prompt("Per favore, inserisci il tuo colore preferito"));

//Output basato su input dell'utente
document.getElementById("output").innerHTML = `${userName}${userSurname}${userPrefColor}23`;

//Variabile per il numero 23
const numero = 23;

//Output basato su input dell'utente
//document.getElementById("output").innerHTML = userName + userSurname + userPrefColor + numero;