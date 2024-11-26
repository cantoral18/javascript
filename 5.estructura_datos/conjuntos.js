// // crear na lista que almacene los cinco vocales  luego qe mueste por consola
// let vocales=["a","e","i","o","u"]
// console.log(vocales)
// //accceder a la vocal "o"
// console.log(vocales[3])

// //accediendo a os elemenos con for
// for (let i=0;i<vocales.length;i++){
//     console.log(vocals [i])
// }
// console.log(vocales.length)


1//trabajo
//tengo una lista de 7 frutas 
//crear un programa que identifique si en ,mi lista existe naranja de
//existir me mostrara su indice ,de no exisir me mostrara un mensaje de error

// Lista de frutas
let frutas = ["pera", "plátano", "fresa", "uva", "naranja", "kiwi", "mango"];


let indice = frutas.indexOf("pera");


if (indice !== -1) {
    console.log("La naranja se encuentra en el índice: " + indice);
} else {
    console.log("Error.");
}

2// crear dos funciones que reciban por parametros una lista de numeros menor de lista y la otra funcion
//encontrara y devolvera el numero menor de lalista y la otra funcion encontrara y devolvera el numero mayor de la lalista.console
//ojo no usar los metodos de min y max .
// Función que encuentra el número menor en la lista
function encontrarMenor(lista) {
    let menor = lista[0]; 

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]; 
        }
    }

    return menor; 
}

function encontrarMayor(lista) {
    let mayor = lista[0]; 

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i]; 
        }
    }

    return mayor;


let listaNumeros = [45, 12, 78, 3, 56, 23, 89];

let numeroMenor = encontrarMenor(listaNumeros);
let numeroMayor = encontrarMayor(listaNumeros);

console.log("El número menor de la lista es:", numeroMenor); 
console.log("El número mayor de la lista es:", numeroMayor);


3// crear una funcion que me permita contar la cantidad de voales "a" que tengo en una lista .



function contarVocalA(lista) {
    let contador = 0;  
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === 'a' || lista[i] === 'A') {
            contador++;  
    }

    return contador;  



let listaDeLetras = ["m","a","m","a"];


let cantidadDeA = contarVocalA(listaDeLetras);
console.log("Cantidad de vocales 'a' en la lista:", cantidadDeA);  
