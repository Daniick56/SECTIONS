//EJERCICIO NUMERO 4
/*4. Cree un programa que reciba tres números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.*/
let mayor;
let text = " es el número mayor.";
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
let numero3;
while (isNaN(numero3)) {
    numero3 = parseFloat(prompt("Ingresa el tercer número"));
        if (isNaN(numero3)) {
            alert("Ingresa un valor numérico.");
        }
}

if (numero1 > numero2 && numero1 > numero3) { 
        mayor = numero1
        alert(`${mayor}${text}`);
    }
    else if (numero2 > numero1 && numero2 > numero3) {
        mayor = numero2
        alert(`${mayor}${text}`);
    }
    else if (numero3 > numero2 && numero3 > numero1) {
        mayor = numero3
        alert(`${mayor}${text}`);
    }
    else {
        alert("Los tres números son iguales.");
    }
