//EJERCICIO NUMERO 3

/*5. Cree un programa que tome el valor de un producto e 
imprima su precio final si éste tiene siempre un
descuento del 10%.*/

let price;
while (isNaN(price)) {
    price = parseFloat(prompt("Enter the price of the product"));
    if (isNaN(price)) {
        alert("Enter a valid price");
    }
}

let discount = price * 0.9;
alert("The price with a 10% discount is: " + discount);
