// EJERCICIO
//Crear una funcion  que me  de  un saludo de bienvenida
// function saludado(){
//     console.log("Bienvenidos")}

// let saludo=function(){
//     console.log("bienvenido")
// }

//ejemplo binding 
//lo que hace es subir  las funciones declarativas ala cabecera de mi archivo
// console.log(despedida())

// //en el caso de funcion como valor o funciones flecha el binding solo eleva 
// //al principio del archivo la declaracion del enlace o variable mas no
// // el valor por eso  en estos casos debemos ejecutar las funciones despues de haberlo creado
// let saludo=()=>{return "hola"}
// console.log(saluso())

// //en el caso de la funcion declarativa el ninding 
// //eleva toda la funcion al principio del archivo por
// //eso podemos ejecutar la funcion desde cualquier parte del archivo icluso antes que sea creaada
// function despedida(){
//     return "adios mundo"
// }

// //EJERCICIO :crear una funcion que tenda o almacena una variable
//  contador y podamos con funciones realiza la suma mas uno deesta
//   variavble y la resta mas uno de la misma 
// variable ademas de poder tener una funcion que me permita acceder
//  ala valor actual y poder mostrarlo
// function contador() {
//     //variable local
//     let contador=0
//     function incre() {
//         return contador++  
//     }
//     function decre() {
//         return contador-- 
//     }
//     function valueCount() {
//         console.log(contador)
        
//     }
//     return{
//         valueCount,
//         incre,
//         decre
//     }
// }
// let count1=contador()
// count1.valueCount()
// for(let i=0;i<5;i++){
//     count1.incre()
// }
// count1.valueCount()

// let count2=contador()
// for(let i=0;i<5;i++){
//     count2.decre()
// }
// count2.valueCount()

//EJEMPLO de prototype 

function contador(nombre){
    this.count=0
    this.nombre=nombre
}
contador.prototype={
    incremento:function(){
        this.count++
    },
    decremento:function(){
        this.count--
    },
    mostraDatos:function(){
        return `${this.count},${this.nombre}`
    }
}
//instanciar mi funcion
let contadorUno=new contador("el primo")
console.log(contradorUno.mostraDatos())
contadorUno.incremento()
contadorUno.incremento()
console.log(contadorUno.mostraDatos())