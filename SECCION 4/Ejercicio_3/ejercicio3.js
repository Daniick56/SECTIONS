//EJERCICIO NUMERO 3
/*3. Cree un programa que lea un número y muestre si éste es divisible entre cinco o no.*/let num;
let number;
while (isNaN(number)) {
    number = parseFloat(prompt("Enter the number"));
    if (isNaN(number)) {
        alert("Enter a numerical value.");
    }
}

if (number % 5 === 0) {
    alert("The number is divisible by 5.");
} else {
    alert("The number is not divisible by 5.");
}
