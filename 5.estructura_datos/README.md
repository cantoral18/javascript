# EXTRUCTURA DE DATOS
## indice
- [array] (# lista array)
A parte de los tipos de datos primitivos,javascript nos proporciona los tipos de datos
complejos conocidos tambien de datos. para podetr trabajar con estos tipos de datos deberemos conocer la 
forma de represenarlo en la memoria de nuestra maquina .
javascript trabaja con dos tipos estructurados que trabajan de manera independiente o en conjunto.
son los siguientes:

## lista array
las lstas de javascript sontipo de daos estructurado que nos permite estrcturad que nos permite almacenarr dstibtos tipo de atos primitivos
separados por coma, cada tipo de da quese almacene euna lista se le conoce como elemeno as cada elemento estara separado pr una coma.

### creacion
primero debemos crear un enlace(una variable )yluego le asignmos lalista que se cree cn `corchtes[]`,los
elmentos estaran dentro  de ls corhotes separados por coma.
```js
//eso creando a lista vacia
let milista=[]
//eso creando a lista  de numeros
let numeros=[2,3,4,5,]
//eso creando a lista  de nombres
let nombre=["luis","juan"]
// crear una lista mixta
let mixta=[4,"hola",fase,["hola"]]
```
### aceeder a un elemento de array
para poder acceder a un elemento del array debemos etender que javascipt asignara  
pr ada elemento un indice que nos permitira acceder  aun elemento  en especifco este indice  es inemental
y comenzada d cer con el primer elemento, elultimo elemeo sra la cantidad 
de elements menos uso
```js
let numeros=[2,3,4,5,]
console.log(numes[3])

```
exise otra manera  de acceder als elemenos  de una lista,esto se 
logra recorriend cada elemento de una lisa  esto se logra  con un buble`for`
```js
let nombre=["cris","pedro","juan"]
for(let i=0;i<nombres,length;i++){
    console.log(nombres[i])
}
```
### metodos
ls metodos son funciones que nos ermite modificar ,crear ,actualizar
eliminar los elementos de una lista , todas las variables que almacenen 
en lista nos permitenacceder asuus metodos ponendo un punto despues 
del nombre de variable.
- metodo para recuperar la longitud de elementos que iene una lista
```js
let numeros=[2,3,4,5,]
nmeros.length
```
- metodo para agregar un elemento al final dela lista
```js
let vocales=["a"]
vocales.push("e")
```
- metodo para eliminar el utimoelemento de una lista
```js
let vocales=["a","e"]
vocales.pop()
```

### tarea averiguar que otros metodos mas usados que existen para el tratamiento de listas en javascrip
- shift: Elimina el primer elemento de un array.
```js
let vocales = ["a", "e", "i"];
vocales.shift();
```
- unshift: Agrega uno o más elementos al inicio de un array.
```js
let vocales = ["e", "i"];
vocales.unshift("a");
```
- concat: Combina dos o más arrays y devuelve un nuevo array.
```js
let vocales1 = ["a", "e"];
let vocales2 = ["i", "o"];
let todasVocales = vocales1.concat(vocales2);

```
- join: Combina todos los elementos de un array en una cadena de texto.
```js
let vocales = ["a", "e", "i"];
let cadena = vocales.join("-");

```
- splice: Modifica un array eliminando, reemplazando o agregando elementos.

```js
let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 1, 6, 7); // A partir del índice 2, elimina 1 elemento y agrega 6 y 7
console.log(numeros); // [1, 2, 6, 7, 4, 5]
```
- map: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

```js
let numeros = [1, 2, 3];
let dobles = numeros.map(function(numero) {
  return numero * 2;
});
```
- sort: Ordena los elementos de un array en su lugar.
```js
let numeros = [3, 1, 4, 2];
numeros.sort();
console.log(numeros); // [1, 2, 3, 4]
```


Resumen de los métodos más usados:
- push y pop  -> para agregar y eliminar elementos del final.
- shift y unshift   -> para agregar y eliminar elementos del inicio.
- concat, join, slice y splice  -> para manipular y combinar arrays.
- forEach, map, filter, reduce, y find  ->para recorrer y transformar arrays.
- sort y reverse -> para ordenar y cambiar el orden de los elementos.

## objetos
los objertos son tipos datos estructurados similares alas listas ,para
poder acceder aun elemento de la lista javascript les asisgnaba
indices, en este caso los objetos como unica diferencia de lass
listas nosotros podemos acignar el nombre del elemento al cual 
deseamos acceder a esto se le conoce como 
`clave valor`
cada clave :valor es un elemento de un objeto si deseamos crrear mas 
elementos tendremos que separarlos por comas
### creacion
para crear un objeto debemos encerrar los elementos en llaves `{}`
cada elementos estaran conformados po su `clave:valor`
```js
let datosAle=["ale","licla",20,"M"]
let datosAleObjetos={
    nombre:"ale",
    apellido:"licla",
    edad:20,
    sexo:"M",
    mascota:["puchi","lasi"]
    dirreccion:{
        tipoCalle:"pasaje",
        nombreCalle:"los olivos",
        numeroVivienda:589,
    },
    accion:()=>{console.log("hola soy ale")}
}
```
### aceeder a un elemento de objeto
### metodos

1. Acceso mediante notación de punto (.):
Este es el método más común y simple para acceder a las propiedades de un objeto. 
Se usa cuando conoces el nombre de la propiedad y el nombre es una palabra válida
en JavaScript (sin espacios ni caracteres especiales).

```js
objeto.propiedad

```
```js
const persona = {
    nombre: 'juis',
    edad: 23,
    ciudad: 'vmt'
};

console.log(persona.nombre);  
console.log(persona.edad);   
```
2. Acceso mediante notación de corchetes ([]):
Este método es más flexible que la notación de punto. Se usa cuando no conoces el
nombre exacto de la propiedad, o si la propiedad tiene un nombre no válido para
la notación de punto (como nombres con espacios, números, o caracteres especiales).
```js
objeto["propiedad"]

```
```js
const persona = {
    "primer nombre": 'luis',
    edad: 23,
    ciudad: 'vmt'
};

console.log(persona["primer nombre"]);  
console.log(persona["edad"]);           

```
3. Acceso con variables:
Puedes utilizar una variable dentro de los corchetes para acceder a una propiedad dinámica.
```js
const persona = {
    nombre: 'luis',
    edad: 23,
    ciudad: 'vmt'
};

const propiedad = 'edad';
console.log(persona[propiedad]); 

```
