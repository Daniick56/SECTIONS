//EJERCICIO NUMERO 4
/*4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no.*/

function isPrime() {
    let num = parseInt(prompt("Enter a number between 1 and 15"));

    if (isNaN(num) || num < 1 || num > 15) {
        alert("Enter a numerical value within the range.");
        location.reload();
        return false;
    }
    if (num <= 1) {
        alert(`${num} is NOT a prime number.`);
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            alert(`${num} is NOT a prime number.`);
            return false;
        }
    }

    alert(`${num} is a prime number.`);
    return true;
}

isPrime();
