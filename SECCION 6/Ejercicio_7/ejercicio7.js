//EJERCICIO NUMERO 3

/*Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se
introduzca el cero.
*/

function promptWhile(text) {
    let input = parseFloat(prompt(text));
    while (isNaN(input)) {
        alert("Ingrese un número válido");
        input = parseFloat(prompt(text));
    }
    return input;
}

let numbers [];
for (i = 1; i <= 50; i++) {
    numbers.push(promptWhile(`Ingresa el número ${i}`))
}

