//EJERCICIO NUMERO 1
/*1. Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
edad o no*/

let age;
while (isNaN(age)) {
    age = parseInt(prompt("Enter your age"));
    if (isNaN(age)) {
        alert("Enter a numerical value");
    }
}

if (age < 18) {
    alert("You are under 18 years old.");
} else {
    alert("You are 18 years old or older.");
}
