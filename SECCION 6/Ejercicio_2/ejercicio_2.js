//EJERCICIO NUMERO 2
/* Cree un programa que calcula la suma de los primeros n números naturales.*/

let n;

while (isNaN(n)) {
    n = parseInt(prompt("Enter a number to print its first natural numbers"));
    if (isNaN(n)) {
        alert("Enter a numerical value");
    }
}

let text = "";
for (let i = 1; i <= n; i++) {
    text += i + "\n";
}
alert(text);
