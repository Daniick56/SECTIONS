//EJERCICIO NUMERO 3
/*3. Cree un programa que lea un número y muestre si éste es divisible entre cinco o no.*/let num;
while (isNaN(num)) {
    num = parseFloat(prompt("Ingresa el primer número"));
        if (isNaN(num)) {
            alert("Ingresa un valor numérico.");
        }
}

if (num % 5 == 0) {
    alert("El número sí es divisible por 5.");
}
else if (num % 5 != 0) {
    alert("El número no es divisible por 5.");
}