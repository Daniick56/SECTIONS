//EJERCICIO NUMERO 3
/*3. Cree un programa que tome el lado de un cubo e 
imprima su volumen.*/

var side;
while (isNaN(side)) {
    side = parseFloat(prompt("Enter the side length of the cube"));
    if (isNaN(side)) {
        alert("Please enter a valid number");
    }
}

let volume = side ** 3;

alert("The volume of the cube is: " + volume);
