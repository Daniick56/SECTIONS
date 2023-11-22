//EJERCICIO NUMERO 4
/*4. Cree un programa que dado un número entero n, calcule su factorial(n!).*/

let n;
while (isNaN(n)) {
    n = parseInt(prompt("Ingresa un número para calcular su factorial"));
        if (isNaN(n)) {
            alert("Ingresa un valor numérico");
        }
}
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    //Es lo mismo que decir result = result * i;
    }
    return result;
}
alert(factorial(n));