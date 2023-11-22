//EJERCICIO NUMERO 3

/*5. Cree un programa que tome el valor de un producto e 
imprima su precio final si éste tiene siempre un
descuento del 10%.*/

let precio;
    while (isNaN(precio)) {
        precio = parseFloat(prompt("Introduce el precio del producto"));
        if (isNaN(precio)) {
            alert("Introduce un precio válido");
        }
    }

let descuento = precio * 0.9
alert("EL precio con el descuento del 10% es de: " + descuento);
