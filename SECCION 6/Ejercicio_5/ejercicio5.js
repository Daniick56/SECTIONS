//EJERCICIO NUMERO 3
/*Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el
programa se detendrá, de lo contrario continuará ejecutándose.*/


function leaveProgram() {
    let input;
    while (input != "s") {
        input = prompt("Deseas salir del programa? (S/N)").toLowerCase();
        if (input != "s") {
            alert("Usted no ha salido del programa");
        }  
    }
    alert("Usted ha salido del programa.");
}

leaveProgram();