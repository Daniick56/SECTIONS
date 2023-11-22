//EJERCICIO NUMERO 1
//1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario dentro
//de tantos años como el usuario indique.

function userAge() {
    const age = parseFloat(prompt("Enter your age"));
    if (!age) {
        alert("Enter a valid number");
        return;
    } else if (age > 100) {
        alert("The number is not within the range");
        return;
    }

    const birthYear = 2023 - age;
    let targetYear = parseFloat(prompt("Enter the year for which you want to calculate your age."));
    if (!targetYear) {
        alert("Enter a valid year");
        return;
    }

    let ageInTargetYear = targetYear - birthYear;
    alert("Your age in the year " + targetYear + " will be " + ageInTargetYear + " years old.");
}

userAge();