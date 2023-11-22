//EJERCICIO NUMERO 2
/*2. Cree un programa que tome el radio de un círculo 
e imprima su área y perímetro.*/

const pi = 3.1416;
var radius;
while (isNaN(radius)) {
    radius = parseFloat(prompt("Enter the Radius"));
    if (isNaN(radius)) {
        alert("Enter a valid number");
    }
}

let area = radius * radius * pi;
let circumference = 2 * pi * radius;
let diameter = circumference / pi;
let perimeter = pi * diameter;

alert("The area is: " + area + "\nThe perimeter is: " + perimeter);
