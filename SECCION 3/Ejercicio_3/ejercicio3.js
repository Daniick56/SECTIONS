//EJERCICIO NUMERO 3
/*3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario*/

let numero1;
while (isNaN(numero1)) {
    numero1 = parseFloat(prompt("Ingresa el primer número"));
        if (isNaN(numero1)) {
            alert("Ingresa un valor numérico.");
        }
}
let numero2;
while (isNaN(numero2)) {
    numero2 = parseFloat(prompt("Ingresa el segundo número"));
        if (isNaN(numero2)) {
            alert("Ingresa un valor numérico.");
        }
}

if (numero1 < numero2) {
    alert(`${numero1} es menor que ${numero2}`);
}
else if (numero1 > numero2) {
    alert(`${numero1} es mayor que ${numero2}`);
}
else {
    alert(`${numero1} es igual a ${numero2}`);
}