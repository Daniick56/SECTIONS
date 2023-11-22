//EJERCICIO NUMERO 3
/*3. Cree un programa que calcule el promedio de tres notas para n estudiantes.*/
let n;

while (isNaN(n)) {
    n = parseInt(prompt("Ingresa el número de estudiantes"));
    if (isNaN(n)) {
        alert("Ingresa un valor numérico");
    }
}

for (let i = 1; i <= n; i++) {
    let nota1, nota2, nota3, promedio;
        while (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
             nota1 = parseFloat(prompt(`Ingresa la nota 1 para el estudiante ${i}`));
             nota2 = parseFloat(prompt(`Ingresa la nota 2 para el estudiante ${i}`));
             nota3 = parseFloat(prompt(`Ingresa la nota 3 para el estudiante ${i}`));

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert("Ingresa un valor numérico");
        }
    }
    promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

    alert(`El promedio del estudiante ${i} es ${promedio}`);
}
