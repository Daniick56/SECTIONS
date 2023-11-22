//EJERCICIO NUMERO 2
/* Cree un programa que calcula la suma de los primeros n números naturales.*/

let n;

while(isNaN(n)) {
    n = parseInt(prompt("Ingresa un número para imprimir sus primeros números naturales"));
    if (isNaN(n)) {
        alert("Ingresa un dato numérico");
    }
}
let text = ""
for (i = 1; i <= n; i++) {
    text += i + "\n"
}
alert(text);