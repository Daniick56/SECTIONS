//EJERCICIO NUMERO 4
/*4. Cree un programa que tome el precio de un producto e 
imprima su precio final al consumidor con un IVA de 19%.*/

let basePrice;
while (isNaN(basePrice)) {
    basePrice = parseFloat(prompt("Enter the base price of the product"));
    if (isNaN(basePrice)) {
        alert("Enter a valid price");
    }
}

let vat;
while (isNaN(vat)) {
    vat = parseFloat(prompt("Enter the current VAT rate in your country (%)"));
    if (isNaN(vat)) {
        alert("Please enter a numerical value");
    }
}

let conversion = vat * 0.01 + 1.0;
let finalPrice = basePrice * conversion;

alert("The price of the product plus the current " + vat + "% VAT is: " + finalPrice);
