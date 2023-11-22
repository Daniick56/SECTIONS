//EJERCICIO NUMERO 4
/*Cree un programa que muestre los números impares entre 1 y n*/

let n;
while (isNaN(n)) {
    n = parseInt(prompt("Enter the number to display its previous prime numbers."));
    if (isNaN(n)) {
        alert("Enter a numerical value");
    }
}

let textOdd = "";
for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
        textOdd += `${i}\n`;
    }
}
alert(textOdd);
