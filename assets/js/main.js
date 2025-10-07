// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3
// stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Loop che va da 1 a 100
for (let i = 1; i <= 100; i++) {
	// Inizializzo una variabile stringa di appoggio
	let message = "";
	// Se il resto di i % 3 è 0 allora aggiungo Fizz alla variabile stringa
	if (i % 3 === 0) {
		message += "Fizz";
	}
	// Se il resto di i % 5 è 0 allora aggiungo Buzz alla variabile stringa
	if (i % 5 === 0) {
		message += "Buzz";
	}
	// Stampo la stringa e l'indice
	if (message.length === 0) {
		console.log(i);
	} else {
		console.log(message);
	}
}

// Soluzione alternativa

// Loop che va da 1 a 100
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		// Se il numero è divisibile per 3 e per 5 stampo "FizzBuzz"
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		// Sennò se il numero è divisibile per 3 stampo "Fizz"
		console.log("Fizz");
	} else if (i % 5 === 0) {
		// Sennò se il numero è divisibile per 5 stampo "Buzz"
		console.log("Buzz");
	} else {
		// Sennò stampo il numero
		console.log(i);
	}
}
