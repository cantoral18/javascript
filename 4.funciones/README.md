# FUNCIONES
- [FUNCIONES](#funciones)
  - [Estructura de una función (como se crea un a función)](#estructura-de-una-función-como-se-crea-un-a-función)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y Parametros Posicioneles](#argumentos-y-parametros-posicioneles)
    - [Argumentos y Parametros Nominales](#argumentos-y-parametros-nominales)
- [ tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    -[Funciones como valor](#funciones-como-valor)

  
Las funciones en javascript son `bloques de codigo ejecutable`, alos que podemos pasar parametros y operar cion ellos.
Nos sirve para modular(Modularizar ) nuestros programas y estructurarlos en bloques que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones ,normalmente, al acabar su ejecución `devuelven un valor`,  que conseguimos con el parametro `return`

## Estructura de una función (como se crea un a función)
para crear un a función debemos realizar los siguientes pasos.
1. Hacer uso de uno de los keywork `functión`.
2. Darle un nombre ala función.
3. Crea los parametros que  recibira entre parentisis `()`
4. Crear el cuerpo de la funcion`{}`.

```js
// Funcion sin oaeametros
function miFuncion(){
    console.log("Esta es una función")
}
// Función con  un parametro
function mifuncionPrametros(a){
    console.log("tu paeametro es " ,a)
}
// Función con varios  parametro
function mifuncionPrametros(a,b){
    console.log(a+b)
}
```
**COMO EJECUTAMOS UNA FUNCION**
Para  ejecutar una función debemos hacer el llamado de la misma haciendo usounicamente de su nombre y los parametros que recibira
```js
// creando la función
function saludo(){
    console.log("hola")
}
// ejecutamos la función
saludo()

function saludo2(texto){
    console.log("hola: ",texto)
}
//ejecutar
saludo2("china")
```
> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCIÓN** - Los nimbres de las funciones deben reprecentar acciones, por lo que deben  construirse usando el `verbo` que reprecenta la acción seguido de un  `sustantivo` representara ala entidad.

```js
function crearUsuario(){

}
function enviarCorreo (){

}
```
## Tipos de Argumentos y Parametros
Es la manera de como se remplazan  los argumentos con los parametros
### Argumentos y Parametros Posicioneles
Posicioneles se les llama por que los argumetos  tomaran los parametros en el orden que se le pase ala función segun la posiscion entre argumentos y paramentros
```js
function sumaNumeros(a,b,c,d){
let suma =a,b,c,d
    return sum(a.b.c.d)
}

//Argumentos Posicionales
sumaNumeros(2,6,7,8)
console.log(respuesta)
```
### Argumentos y Parametros Nominales
Los nominales  se les conoce a los argumentos que en su creación se asocian a un parametro en especifico.
```js
function registroAlumno(nombre,apellido,sexo){
    let respuesta`${nombre},${apellido}, ${sexo}`
    return respuesta
}
registroAlumno(sexo="primo",nombre="edwin",apellido"del mar")
//posicion
registroAlumno("nombre","apellido","todos los dias")
```
> [!NOTE]
> Posiciones en orden y Nominales especificar el parametro y su valor

## tipos de funciones por su notacion
### Funciones como valor
en este caso se crea una funcion como si fuera un valor de un enlace.

```js
let saludo=function(){
    console.log("bienvenido")
}
saludo()
```
En este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llmarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
al igual que una funcion clasica podemos tambien pasarle  parametro
### Funcion como declaracion
se le conoce como funcion`declaracion`ala manera clasica de como creamos una funcion

```js
function saludo(){
    return "saludo a todos"
}
console.log(saludos())
```
### Funcion flecha (arrow function)
esta funcion es introducida apartir de la version de ecma script5 `es5`.
se implemento para la creacion y ejecucion rapida y mas entendible de las funciones
la funcion flecha evita la `verbosidad`en javascript
> [!NOTE]
> `verbosidad`o `verboso` se utiliza en la programacion para referirse a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos  comprar la `verbosidad`a un texto demasiadop extenso o redundante
se crea de la misma manera  que una funcion como valor ,eso quiere decir que la funcion flecha sera  el valor de un enlace.
la funcion flecha tiene la siguiente estructura.
EL PARAMETRO SEGUIDO FLECHA `=>` y del cuerpo de ser necesario o solo de codigo que se retornara
```js
function saludo(){
    return "saludo a todos"
}
console.log(saludos())

let saludo=()=>("saludo a todos")
console .log(saludo())

let mensaje=texto=>console.log("hola,",texto)
console.log(mensaje("hola"))
//en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo

let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
console.log (registroUsuario("edwin","guerra"))
```
### Diferencias
las diferencias quetenemos al momento de crear una funcion declarativa, funcion como valor y flecha
binding.
### binding 
es una tecnica que guarda las funciones y variables (enlace)sube al principio  la declaracion no el 
valor ala cabecera  del archivo javascript.
```js
funtion saludo(){
    return"hola mundo"
}
function despedida(){
    return "adios mundo"
}
```

```js
saludo()
despedida()
```
## la pila de llamadas
es una tecnica que se usa para controlar la ejecucion de una funcion
**averiguar sobre LIFO**
## CLOSURE O funciones de cierre (funciones que retornan funciones )
un `clousure` es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keywoard `return`.
antes que aparesca la version `ecma` los `clousure `eran un patron creacional que nos permita modularizar nuestros codigos, en lugar de usar las`clases`,
que eran populares en otro lenguaje pero que en javascript aun no lo implementaba.
```js
//una funcion que retorna otra funcion (por lo general es una funcion anonima)
//funcion clasica
function retornaValor(n){
    return n+1
}
//llamando a la funcion clasica
retornnaValor(10)
//funcion closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamando a la funcion closure
retornaValor(10)
```

> [!note]
> las funciones closure son usadas por que pueden mantener el valor de sus enlaces o variable.s locales
en todo el proceso de la ejecucion de su funcion padre por cada llamada que se le realize.

### CLOSURE TIPO CLASE
so funciones cuyo uso son iguales ala clases dentro de la ejecucion de una clase tenemos lo que se llama `instancia`en javascript
tenemos funciones`closure`que se pueden instanciar al igual que una clase, la diferencia con las funciones `closure`clasicas es uqe
 en esta hacemos uso de la palabra reservada `keyword`llama `this`.

```js
function contador(){
    this.contador=0
    this.incre=function(){
        this.contador++
    }
     this.decre=function(){
        this.contador--
    }

}
//realizamos la instancia
let count1=new contador ()  
for (let i=0;i<5;i++){
    count1.contador

}



```
> [!NOTE]
> la funcion closure de tipo clase no hace uso de`RETURN`en susfunciones al hacer uso de `this`
casa funcion o variable estara ensalada al objeto que se cree

> [!WARNING]
>el problema principa de este tipo de funcion , esque cuando creamos un nuevo objeto a partit
de la funcion tipo clase ,reservara espacios en memoria para toda la clase y sus valor creados 
uso quiere decir variable y funciones , cada que llamamos auna funcion esta se replica en memoria

## PROTOYPE(TAREA -AVERIGUAR Y SUS EJEMPLOS)