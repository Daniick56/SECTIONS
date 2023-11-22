//EJERCICIO NUMERO 2
/*2. Cree un programa que lea un número y muestre si éste es par o impar*/

let number;
while (isNaN(number)) {
    number = parseFloat(prompt("Enter the number"));
    if (isNaN(number)) {
        alert("Enter a numerical value.");
    }
}

if (number % 2 === 0) {
    alert("The number is even.");
} else if (number % 2 !== 0) {
    alert("The number is odd.");
}
