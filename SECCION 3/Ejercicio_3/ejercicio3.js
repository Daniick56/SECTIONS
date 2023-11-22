//EJERCICIO NUMERO 3
/*3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario*/

let number1;
while (isNaN(number1)) {
    number1 = parseFloat(prompt("Enter the first number"));
    if (isNaN(number1)) {
        alert("Enter a numerical value.");
    }
}

let number2;
while (isNaN(number2)) {
    number2 = parseFloat(prompt("Enter the second number"));
    if (isNaN(number2)) {
        alert("Enter a numerical value.");
    }
}

if (number1 < number2) {
    alert(`${number1} is less than ${number2}`);
} else if (number1 > number2) {
    alert(`${number1} is greater than ${number2}`);
} else {
    alert(`${number1} is equal to ${number2}`);
}
