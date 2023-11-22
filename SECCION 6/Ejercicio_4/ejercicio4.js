//EJERCICIO NUMERO 4
/*Cree un programa que muestre los números impares entre 1 y n*/

let n;
while (isNaN(n)) {
    n = parseInt(prompt("Ingrese el número para mostrar sus anteriores números primos."));
        if (isNaN(n)) {
            alert("Ingresa un dato numérico");
        }
}
let textOdd = "";
for (i = 1; i <= n; i++) {
    if (i % 2 === 1) {
        textOdd += `${i}\n`
    }
}
alert(textOdd);