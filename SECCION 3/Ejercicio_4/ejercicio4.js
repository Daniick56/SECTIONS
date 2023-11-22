//EJERCICIO NUMERO 4
/*4. Cree un programa que reciba tres números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.*/
let greatest;
let text = " is the greatest number.";
function promptWhile(text) {
    let input = parseFloat(prompt(text));
    while (isNaN(input)) {
        alert("Enter a numerical value.");
        input = parseFloat(prompt(text));
    }
    return input;
}

let number1 = promptWhile("Enter the first number");
let number2 = promptWhile("Enter the second number");
let number3 = promptWhile("Enter the third number");

if (number1 > number2 && number1 > number3) { 
    greatest = number1;
    alert(greatest + text);
} else if (number2 > number1 && number2 > number3) {
    greatest = number2;
    alert(greatest + text);
} else if (number3 > number2 && number3 > number1) {
    greatest = number3;
    alert(greatest + text);
} else {
    alert("The three numbers are equal.");
}
