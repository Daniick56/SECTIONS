//EJERCICIO NUMERO 4
/*6. Cree un programa que lea una cantidad e imprima un 
porcentaje a calcular requerido sobre esa cantidad.*/

let cantidad;
    while (isNaN(cantidad)) {
        cantidad = parseFloat(prompt("Introduce la cantidad"));
        if (isNaN(cantidad)) {
            alert("Introduce un número válido");
        }
    }
    
let porcentaje;
    while (isNaN(porcentaje)) {
        porcentaje = parseFloat(prompt("Introduce el porcentaje a calcular"));
        if (isNaN(porcentaje)) {
            alert("Introduce un número válido");
        }
    }

    const resultado = (cantidad * porcentaje) / 100;

    alert(`El ${porcentaje}% de ${cantidad} es igual a ${resultado}`);