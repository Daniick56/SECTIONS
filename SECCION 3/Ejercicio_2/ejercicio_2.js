//EJERCICIO NUMERO 2
/*2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no.*/


producto = prompt("ingrese el producto").toLowerCase();

switch (producto) {
    case "lentejas":
        alert("NO IVA");
        break;
    case "arroz":
        alert("NO IVA");
        break;
    case "crema":
        alert("SI IVA");
        break;
    case "aceite":
        alert("SI IVA");
        break;
    case "vino":
        alert("SI IVA");
        break;
    default:
        alert("Ingrese un producto valido");
        break;
}