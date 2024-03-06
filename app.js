for (let i = 1; i <= 100; i++) {
    
    // 1. Alla variabile "i" assegno un valore (1) che incremento di 1 fino a che è vera la condizione ("i" deve essere minore o uguale a 100). 
    // 2. La variabile viene chiamata convenzionalmente "i" (che sta per "index").

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Con questo "console.log" mostro nella console del browser tutti i numeri che sono multipli sia di 3 sia di 5 (da notare &&). La "console.log" restituisce "FizzBuzz". 


    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Con questo "console.log" mostro nella console del browser tutti i numeri che sono multipli  di 3. La "console.log" restituisce "Fizz".

    
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Con questo "console.log" mostro nella console del browser tutti i numeri che sono multipli  di 5. La "console.log" restituisce "Buzz".


    // Con questo "console.log" mostro nella console del browser tutti gli altri numeri che non sono multipli di né di 3 né di 5.
    else {
        console.log(i);
    }
}