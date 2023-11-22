//EJERCICIO NUMERO 2
/*2. Cree un programa que lea dos números y muestre su producto, 
su cociente, su módulo, su suma y su resta.*/

let number1;
while (isNaN(number1)) {
    number1 = parseFloat(prompt("Enter number 1"));
    if (isNaN(number1)) {
        alert("Please enter a numerical value");
    }
}

let number2;
while (isNaN(number2)) {
    number2 = parseFloat(prompt("Enter number 2"));
    if (isNaN(number2)) {
        alert("Please enter a numerical value");
    }
}

let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient;
let remainder;

if (number2 !== 0) {
    quotient = number1 / number2;
    remainder = number1 % number2;
} else {
    alert("Cannot divide by zero.");
}

alert("Sum: " + sum + "\nDifference: " + difference + "\nProduct: " + product + "\nQuotient: " + quotient + "\nRemainder: " + remainder);
