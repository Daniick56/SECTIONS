//EJERCICIO NUMERO 2
/*2. Cree un programa que lea un número y muestre si éste es par o impar*/

let num;
while (isNaN(num)) {
    num = parseFloat(prompt("Ingresa el primer número"));
        if (isNaN(num)) {
            alert("Ingresa un valor numérico.");
        }
}

if (num % 2 == 0) {
    alert("El número es par.");
}
else if (num % 2 != 0) {
    alert("El número es impar");
}