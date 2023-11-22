//EJERCICIO NUMERO 3
/*3. Cree un programa que calcule el promedio de tres notas para n estudiantes.*/
let n;

while (isNaN(n)) {
    n = parseInt(prompt("Enter the number of students"));
    if (isNaN(n)) {
        alert("Enter a numerical value");
    }
}

for (let i = 1; i <= n; i++) {
    let grade1, grade2, grade3, average;
    while (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
        grade1 = parseFloat(prompt(`Enter grade 1 for student ${i}`));
        grade2 = parseFloat(prompt(`Enter grade 2 for student ${i}`));
        grade3 = parseFloat(prompt(`Enter grade 3 for student ${i}`));

        if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
            alert("Enter a numerical value");
        }
    }
    average = ((grade1 + grade2 + grade3) / 3).toFixed(1);

    alert(`The average grade for student ${i} is ${average}`);
}