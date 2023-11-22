//EJERCICIO NUMERO 3
/*3. Cree un programa que lea el monto de un préstamo y el plazo en meses, 
y muestre al usuario el valor las
cuotas mensuales pagando un interés fijo del 2.7% mensual.*/

let amount;
while (isNaN(amount)) {
    amount = parseFloat(prompt("Please enter the amount to be paid"));
    if (isNaN(amount)) {
         alert("Enter a valid number");
    }
}

let term;
while (isNaN(term)) {
    term = parseFloat(prompt("Please enter the term in months"));
        if (isNaN(term)) {
            alert("Please enter a valid number");
        }
}

let installments = amount / term * 1.27;
installments = installments.toFixed(2);

alert("The value of monthly installments, paying a fixed interest of 2.7%, is: " + installments + " pesos.");
