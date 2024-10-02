//1. Comparación Directa:
let str1 = "arvark";
let str2 = "zoroaster";

if (str1 === str2) {
    console.log("Las cadenas son iguales");
} else {
    console.log("Las cadenas son diferentes");
}

//2. Comparación de Longitud:
if (str1.length === str2.length) {
    console.log("Las cadenas tienen la misma longitud");
} else {
    console.log("Las cadenas tienen longitudes diferentes");
}

//3. Comparación Lexicográfica:
if (str1 < str2) {
    console.log(`${str1} es menor que ${str2}`);
} else if (str1 > str2) {
    console.log(`${str1} es mayor que ${str2}`);
}