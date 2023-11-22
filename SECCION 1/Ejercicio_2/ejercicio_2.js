//EJERCICIO NUMERO 2
/*2. Cree un programa que lea dos números y muestre su producto, 
su cociente, su módulo, su suma y su resta.*/

var numero1;
while (isNaN(numero1)) {
	numero1 = parseFloat(prompt("Ingresa el numero 1"));
	if (isNaN(numero1)) {
	    	alert("Por favor ingresa un valor numérico");
	}
}
var numero2;
while (isNaN(numero2)) {
	numero2 = parseFloat(prompt("Ingresa el numero 2"));
	if (isNaN(numero2)) {
	    alert("Por favor ingresa un valor numérico");
	}
}
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let producto = numero1 * numero2;
let cociente ;
let modulo ;

if (numero2 !== 0) {
    cociente = numero1 / numero2;
    modulo = numero1 % numero2;
}
else {
    alert("No se puede dividir por cero.");
}


alert("Suma: " + suma + "\nResta: " + resta + "\nProducto: " + producto + "\nCociente: " + cociente + "\nMódulo: " + modulo);