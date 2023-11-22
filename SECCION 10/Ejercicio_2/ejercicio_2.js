//EJERCICIO NUMERO 2
/*2. Cree un programa que tome el radio de un círculo 
e imprima su área y perímetro.*/

const pi = 3.1416
var radio;
    while(isNaN(radio)) {
        radio = parseFloat(prompt("Ingresa el Radio"));
            if(isNaN(radio)) {
                alert("Ingrese un numero válido");
            }
        }
let area = radio * radio * pi;
let circunferencia = 2 * pi * radio;
let diametro = circunferencia / pi;
let perimetro = pi * diametro;

alert("El área es: " + area + "\nEl perímetro es: " + perimetro);
