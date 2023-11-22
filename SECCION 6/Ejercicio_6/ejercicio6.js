//EJERCICIO NUMERO 4
/*Cree un programa que calcule el promedio de 10 números*/


// Function that only allows the user to input a number
function promptWhile(text) {
    let input = parseInt(prompt(text));
    while (isNaN(input)) {
        alert("Enter a numerical value.");
        input = parseInt(prompt(text));
    }
    return input;
}

// Counter that, for each iteration, adds the user-inputted number to the array
let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(promptWhile(`Enter number ${i}`));
}

// Function that stores the result of the sum of all the entered numbers by iterating through the array,
// and then divides the result by the number of elements in the array.
function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let result = average(numbers);
console.log(result);
