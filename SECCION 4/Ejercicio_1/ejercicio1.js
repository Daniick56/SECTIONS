//EJERCICIO NUMERO 1
/*1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no.*/
let sum;

function promptWhile(text) {
    let input = parseFloat(prompt(text));
    while (isNaN(input)) {
        alert("Enter a numerical value.");
        input = parseFloat(prompt(text));
    }
    return input;
}

let angle1 = promptWhile("Enter the first interior angle of the triangle");
let angle2 = promptWhile("Enter the second interior angle of the triangle");
let angle3 = promptWhile("Enter the third interior angle of the triangle");

sum = angle1 + angle2 + angle3;
if (sum === 180) {
    alert("It is a triangle.");
} else {
    alert("It is not a triangle.");
}
