// EJERCICIO
//Crear una funcion  que me  de  un saludo de bienvenida
// function saludado(){
//     console.log("Bienvenidos")}

// let saludo=function(){
//     console.log("bienvenido")
// }

//ejemplo binding 
//lo que hace es subir  las funciones declarativas ala cabecera de mi archivo
console.log(despedida())

//en el caso de funcion como valor o funciones flecha el binding solo eleva 
//al principio del archivo la declaracion del enlace o variable mas no
// el valor por eso  en estos casos debemos ejecutar las funciones despues de haberlo creado
let saludo=()=>{return "hola"}
console.log(saluso())

//en el caso de la funcion declarativa el ninding 
//eleva toda la funcion al principio del archivo por
//eso podemos ejecutar la funcion desde cualquier parte del archivo icluso antes que sea creaada
function despedida(){
    return "adios mundo"
}