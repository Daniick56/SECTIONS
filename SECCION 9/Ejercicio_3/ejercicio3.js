//EJERCICIO NUMERO 3
/*3. Cree un programa que tome el lado de un cubo e 
imprima su volumen.*/

var lado;
    while(isNaN(lado)) {
        lado = parseFloat(prompt("Ingrese el lado del cubo"));
            if (isNaN(lado)) {
                alert("Por favor ingresa un numero válido");
            }
    }
let volumen = lado ** 3;

alert("El volumen del cubo es: " + volumen);