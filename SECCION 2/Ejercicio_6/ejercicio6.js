//EJERCICIO NUMERO 4
/*6. Cree un programa que lea una cantidad e imprima un 
porcentaje a calcular requerido sobre esa cantidad.*/

let amount;
while (isNaN(amount)) {
    amount = parseFloat(prompt("Enter the amount"));
    if (isNaN(amount)) {
        alert("Enter a valid number");
    }
}

let percentage;
while (isNaN(percentage)) {
    percentage = parseFloat(prompt("Enter the percentage to calculate"));
    if (isNaN(percentage)) {
        alert("Enter a valid number");
    }
}

const result = (amount * percentage) / 100;

alert(`The ${percentage}% of ${amount} is equal to ${result}`);
