// // // crear na lista que almacene los cinco vocales  luego qe mueste por consola
// // let vocales=["a","e","i","o","u"]
// // console.log(vocales)
// // //accceder a la vocal "o"
// // console.log(vocales[3])

// // //accediendo a os elemenos con for
// // for (let i=0;i<vocales.length;i++){
// //     console.log(vocals [i])
// // }
// // console.log(vocales.length)


// //trabajo
// //tengo una lista de 7 frutas 
// //crear un programa que identifique si en ,mi lista existe naranja de
// //existir me mostrara su indice ,de no exisir me mostrara un mensaje de error

// // Lista de frutas
// let frutas = ["pera", "plátano", "fresa", "uva", "naranja", "kiwi", "mango"];


// let indice = frutas.indexOf("pera");


// if (indice !== -1) {
//     console.log("La naranja se encuentra en el índice: " + indice);
// } else {
//     console.log("Error.");
// }

// // crear dos funciones que reciban por parametros una lista de numeros menor de lista y la otra funcion
// //encontrara y devolvera el numero menor de lalista y la otra funcion encontrara y devolvera el numero mayor de la lalista.console
// //ojo no usar los metodos de min y max .
// // Función que encuentra el número menor en la lista
// function encontrarMenor(lista) {
//     let menor = lista[0]; 

//     for (let i = 1; i < lista.length; i++) {
//         if (lista[i] < menor) {
//             menor = lista[i]; 
//         }
//     }

//     return menor; 
// }

// function encontrarMayor(lista) {
//     let mayor = lista[0]; 

//     for (let i = 1; i < lista.length; i++) {
//         if (lista[i] > mayor) {
//             mayor = lista[i]; 
//         }
//     }

//     return mayor;


// let listaNumeros = [45, 12, 78, 3, 56, 23, 89];

// let numeroMenor = encontrarMenor(listaNumeros);
// let numeroMayor = encontrarMayor(listaNumeros);

// console.log("El número menor de la lista es:", numeroMenor); 
// console.log("El número mayor de la lista es:", numeroMayor);


// // crear una funcion que me permita contar la cantidad de voales "a" que tengo en una lista .



// function contarVocalA(lista) {
//     let contador = 0;  
    
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] === 'a' || lista[i] === 'A') {
//             contador++;  
//     }

//     return contador;  



// let listaDeLetras = ["m","a","m","a"];


// let cantidadDeA = contarVocalA(listaDeLetras);
// console.log("Cantidad de vocales 'a' en la lista:", cantidadDeA);  


// let texto="hola mundo"
// //["hola","mundo"]
// let listaTexto=texto.split("")
// console.log(ListaTexto)
// let lista =["hola","como","estas"]
// //"hola como estas"
// let nuevoTexto=lista.join(",")
// console.log(nuevoTexto)

//EJERCICIO
// tengo la siguiente url
//www.gato.com/q=marina+gold
//crea un programa que me capture solo la query
//"marina gold"

//EN UNA SOLA LINEA
// let url="www.gato.com/q=marina+gold"
// let listaUrl=url.split("=")[1].split("+".join(" "))
// console.log(listaUrl)

//PASO A PASO
// let url ="www.gato.com/q=marina+gold"
// let cortarUrl=url.split("=")
// let obtenerPrimerElemento=cortarUrl[1]
// let dividoTextoEnDos=obtenerPrimerElemento.split("+")
// let juntarTexto=divididoTextoEnDos.join(" ")

//EJEERCICIO objetos

// let datosAleObjetos={
//     nombre:"ale",
//     apellido:"licla",
//     edad:20,
//     sexo:"M",
//     mascota:["puchi","lasi"],
//     direccion:{
//         tipoCalle:"pasaje",
//         nombreCalle:"los olivos",
//         numeroVivienda:589,
//     }
    
// }
// console.log(datosAleObjeto.mascota)
// console.log(datosAleObjeto["edad"])
// console.log(datosAleObjeto.mascota[1])


// /// CREAR UNA FUNCION QUE ME GENERE UN OBJETO DE CARACTERISTICAS TECNICAS DE UNA COMPUTADORA ,EL OBJETO DEBERA TENER COMO MINIMO LOS SIGUIENTES VALORES
// //MARCA.MODELO,PROCESADOR,RAM,DISCO Y TARJETA DE VIDEO.

// const computadora=(marca,modelo,procesasor ,ram)=>{
//     return{
//         marca,      //si vamos a devolver lo mismo se popne uno solo
//         modelo,
//         procesador,
//         ram,
//     }
// }
// let objetoPc=computadora("los marcas","margarita","xeon,"100gbs")


// function Computadora(marca, modelo, procesador, ram, disco, tarjetaVideo) {
  
//     let computadora = {
//         marca: marca,
//         modelo: modelo,
//         procesador: procesador,
//         ram: ram,
//         disco: disco,
//         tarjetaDeVideo: tarjetaVideo
//     };
//     return computadora;
//   }
//   let miComputadora =Computadora('ph', 'XPS 15', 'Intel Core i7', '8GB', '500GB SSD', 'NVIDIA GeForce GTX 1650');
//   console.log(miComputadora)
//   // en este caso la clave marca existe en mi objeto por lo tanto su valor sera actualizado por intel
//   miComputadora["marca"]="ph"
//   console.log(miComputadora)
//   //En este caso la clave targeta no existe en mi objeto por lo tanto se creara un nuevo elemento con la clave tarjeta y su valor nvidia me tinesnvidia
//   miComputadora["targeta"]="nvidia me tienes envidia"
//   console.log(miComputadora)
  


  
//averiguar como eliminar un elemento de un objeto

//Sintaxis básica:
delete objeto.propiedad;
delete objeto["propiedad"];

//Ejemplo 1: Usando la notación de punto
let persona = {
    nombre: "tania",
    edad: 23,
    ciudad: "grau"
};

delete persona.edad; // Elimina la propiedad 'edad' del objeto 'persona'

console.log(persona); 

//Ejemplo 2: Usando la notación de corchetes
let persona = {
    nombre: "tania",
    edad: 23,
    ciudad: "grau"
};

delete persona["ciudad"]; // Elimina la propiedad 'ciudad' del objeto 'persona'

console.log(persona);

