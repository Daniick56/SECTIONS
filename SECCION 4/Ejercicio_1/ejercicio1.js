//EJERCICIO NUMERO 1
/*1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no.*/
let suma;
let angulo1;
while (isNaN(angulo1)) {
    angulo1 = parseFloat(prompt("Ingresa el primer número"));
        if (isNaN(angulo1)) {
            alert("Ingresa un valor numérico.");
        }
}
let angulo2;
while (isNaN(angulo2)) {
    angulo2 = parseFloat(prompt("Ingresa el segundo número"));
        if (isNaN(angulo2)) {
            alert("Ingresa un valor numérico.");
        }
}
let angulo3;
while (isNaN(angulo3)) {
    angulo3 = parseFloat(prompt("Ingresa el tercer número"));
        if (isNaN(angulo3)) {
            alert("Ingresa un valor numérico.");
        }
}

suma = angulo1 + angulo2 + angulo3;
if (suma == 180) {
    alert("Sí es un triángulo.");
}
else {
    alert("No es un triángulo.");
}