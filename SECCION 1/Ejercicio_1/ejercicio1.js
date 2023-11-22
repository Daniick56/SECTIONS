//EJERCICIO NUMERO 1
//1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario dentro
//de tantos años como el usuario indique.
function añosUsuario () {
const edad = parseFloat(prompt("Ingrese su edad"));
        if (!edad) 
        {
            alert("Ingresa un numero válido");
            return ;
        }
            else if (edad > 100) 
        {
            alert("El numero no se encuentra dentro del rango");
            return;
        }

const fechaNacimiento = 2023 - edad;
let fechaInput = parseFloat(prompt("Indica el año para el cual quieres calcular tu edad."));
        if (!fechaInput) {
            alert("Ingresa un año valido");
            return;
        }
let output = fechaInput - fechaNacimiento;
    alert("Su edad en el año " + fechaInput + " será de " + output + " años de edad.");
}
añosUsuario();
