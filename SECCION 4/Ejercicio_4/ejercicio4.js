//EJERCICIO NUMERO 4
/*4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no.*/

function primo() {
    let num = parseInt(prompt("Ingresa un número entre 1 y 15"));

    if (isNaN(num) || num < 1 || num > 15) {
                alert("Ingresa un valor numérico dentro del rango.");
                location.reload();
                return false;
            }
    if (num <=1) {
        alert(`${num} NO es un número primo.`);
        return false;
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            alert(`${num} NO es un número primo.`);
            return false;
        }
    }

    alert(`${num} es un número primo.`);
    return true;
}

primo();
