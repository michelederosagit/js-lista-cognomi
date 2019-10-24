var usrcognome, position;

// Chiedi all’utente il cognome,
usrcognome = prompt("Inserisci il tuo cognome");
console.log(usrcognome);
// inseriscilo in un array con altri cognomi
var cognomi = ["Cirillo","De Rosa","Scognamiglio","Vitiello"];
// console.log(cognomi);
cognomi.push(usrcognome);
console.log(cognomi);

// e stampa la lista ordinata alfabeticamente.
cognomi.sort();

var contenuto;
for (var i = 0; i < cognomi.length; i++){
    contenuto = document.getElementById('mio_id').innerHTML;

    document.getElementById('mio_id').innerHTML = contenuto + "<li>" +  cognomi[i] + "</li>";
    console.log(contenuto);
}

// Scrivi anche la posizione della lista in cui il nuovo utente si trova
position = parseInt(cognomi.indexOf(usrcognome)) + 1;
document.getElementById("numero").innerHTML = "Il tuo cognome è al numero: " + position;