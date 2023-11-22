//EJERCICIO NUMERO 1
/*1. Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
edad o no*/

let edad;
while (isNaN(edad)) {
    edad = parseInt(prompt("Ingresa tu edad"));
        if (isNaN(edad)) {
            alert("Ingresa un dato numérico");
        }
}

if (edad < 18) {
    alert("Usted es menor de edad.");
}
else {
    alert("Usted es mayor de edad.");
}