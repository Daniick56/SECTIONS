//EJERCICIO NUMERO 3

/*Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se
introduzca el cero.
*/

function promptWhile(text) {
    let input = parseFloat(prompt(text));
    while (isNaN(input)) {
        alert("Enter a numerical value");
        input = parseFloat(prompt(text));
    }
    return input;
}

let numbers = [];
let currentNumber;

do {
    currentNumber = promptWhile("Enter a number to calculate the average. (Enter 0 to finish)");
    if (currentNumber !== 0) {
        numbers.push(currentNumber);
    }
}
while (currentNumber !== 0)

function average (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let result = average(numbers);
console.log(`The average of the numbers are ${result}`);