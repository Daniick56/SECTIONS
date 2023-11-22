//EJERCICIO NUMERO 4
/*4. Cree un programa que tome el precio de un producto e 
imprima su precio final al consumidor con un IVA de 19%.*/

let precioBase;
    while (isNaN(precioBase)) {
        precioBase = parseFloat(prompt("Introduce el precio base del producto"));
        if (isNaN(precioBase)){
            alert("Introduce un precio válido");
        }
    }

let iva;
while(isNaN(iva)) {
    iva = parseFloat(prompt("Ingresa el IVA actual de tu país (%)"));
        if (isNaN(iva)) {
            alert("por favor ingresa un valor numérico");
        }
}

let conversion = iva * 0.01 + 1.0;
let precioFinal = precioBase * conversion;

alert("El precio del producto mas el iva actual del " + iva + " % es de: " + precioFinal);