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

## objetos

### creacion
### aceeder a un elemento de objeto
### metodos

