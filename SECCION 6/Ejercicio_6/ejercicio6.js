//EJERCICIO NUMERO 4
/*Cree un programa que calcule el promedio de 10 números*/


//funcion que no permiter al usuario la entrada de otro dato diferente a un numero
function promptWhile(text) {
    let input = parseInt(prompt(text));
    while (isNaN(input)) {
        alert("Ingresa un dato numérico.");
        input = prompt(text);
    }
    return input;
}

//contador que por cada suma que haga ingresa en el array el numero introducido por el usuario
let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(promptWhile(`Ingresa el número ${i}`));
}

//funcion que almacena el resutado de la suma de todos los numeros ingresados por medio de 
//un contador que pasa por cada posicion de el array, el resultado es dividido por la cantidad de numeros en el arreglo.
function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}


let result = average(numbers);
console.log(result);