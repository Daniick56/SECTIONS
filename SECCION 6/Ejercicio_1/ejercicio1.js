//EJERCICIO NUMERO 1
/*1. Cree un programa que muestre los números naturales de 1 a n.*/

let n;

while(isNaN(n)) {
    n = parseInt(prompt("Ingresa un número para imprimir sus previos numeros naturales"));
    if (isNaN(n)) {
        alert("Ingresa un dato numérico");
    }
}
let text = ""
for (i = 1; i <= n; i++) {
    text += i + "\n"
}
alert(text);