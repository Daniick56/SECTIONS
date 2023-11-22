//EJERCICIO NUMERO 4
/*4. Cree un programa que dado un número entero n, calcule su factorial(n!).*/

let n;
while (isNaN(n)) {
    n = parseInt(prompt("Enter a number to calculate its factorial"));
    if (isNaN(n)) {
        alert("Enter a numerical value");
    }
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
        // Same as saying result = result * i;
    }
    return result;
}

alert(factorial(n));
