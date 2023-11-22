//EJERCICIO NUMERO 1
/*1. Cree un programa que muestre los números naturales de 1 a n.*/

let n;

while (isNaN(n)) {
    n = parseInt(prompt("Enter a number to print its previous natural numbers"));
    if (isNaN(n)) {
        alert("Enter a numerical value");
    }
}

let text = "";
for (let i = 1; i <= n; i++) {
    text += i + "\n";
}
alert(text);
