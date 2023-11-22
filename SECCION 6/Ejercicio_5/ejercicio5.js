//EJERCICIO NUMERO 3
/*Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el
programa se detendrá, de lo contrario continuará ejecutándose.*/


function leaveProgram() {
    let input;
    while (input !== "s") {
        input = prompt("Do you want to exit the program? (Y/N)").toLowerCase();
        if (input !== "s") {
            alert("You have not exited the program");
        }
    }
    alert("You have exited the program.");
}

leaveProgram();
