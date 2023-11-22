//EJERCICIO NUMERO 3
/*3. Cree un programa que lea el monto de un préstamo y el plazo en meses, 
y muestre al usuario el valor las
cuotas mensuales pagando un interés fijo del 2.7% mensual.*/

var monto;
while (isNaN(monto)) {
    monto = parseFloat(prompt("Ingrese por favor el monto a pagar"));
    if (isNaN(monto)) {
         alert("Ingrese un numero válido");
    }
}
var plazo;
while (isNaN(plazo)) {
    plazo = parseFloat(prompt("Por favor ingresa el plazo en Meses"));
        if (isNaN(plazo)) {
            alert("Por favor ingresa un numero válido");
        }
}

let cuotas = monto / plazo * 1.27;
cuotas = cuotas.toFixed(2);

alert("El valor las cuotas mensuales pagando un interés fijo del 2.7% son de: " + cuotas + " pesos.");
