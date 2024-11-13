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
es un mecanismo que permite a los objetos heredar propiedades y métodos de otros objetos. Cada función en JavaScript es, en sí misma, un objeto, y cada objeto tiene una propiedad interna llamada prototype. Esta propiedad es un objeto que contiene métodos y propiedades que pueden ser compartidos entre todas las instancias de una función constructora.

Conceptos clave:
Prototype de una función: Cada función en JavaScript tiene un prototype que es utilizado por los objetos creados a partir de esa función constructora.
Herencia prototípica: Los objetos pueden heredar propiedades y métodos de su prototipo. Si un objeto no tiene una propiedad o método, JavaScript buscará en su prototipo y, si no lo encuentra, continuará buscando en el prototipo del prototipo, y así sucesivamente, hasta llegar al objeto null.
Modificación del prototipo: Es posible agregar métodos o propiedades a un prototipo para que estén disponibles en todas las instancias de esa función constructora.
Ejemplo básico de Prototype:
Supongamos que tenemos una función constructora llamada Persona:

```js
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Agregar un método al prototipo de Persona
Persona.prototype.saludar = function() {
    console.log("Hola, mi nombre es " + this.nombre);
};

// Crear una nueva instancia de Persona
const juan = new Persona("Juan", 30);

// Llamar al método heredado de Prototype
juan.saludar();  // Output: "Hola, mi nombre es Juan"

```

### prototype 
para crear un prototype tendremos que crear primero nuestra funcion principal que es la encargada de almacenar nuestras variables locales con las que trabajaremos.
Luego accederemos al prototype de nuestra funcion creada y en valor o variable de tipo objeto le indicaremos las funciones que tendra nuestra funcion principal que interactuara con nuestras variables locales.

```js
function contador(){
    this.count=0
    this.nombre=nombre
}
contador.prototype={
    incremento:function(){
        this.count++
    }
    decremento:function(){
        this.count--
    }
    mostraDatos:function(){
        return `${this.count},${this.nombre}`
    }
}
```


>[INOTE]
> es una convencion usar como nombre de nuestra funcion principal, 1. que debe ser singular, 2. que use PascalCase

## RECURCION EN FUNCIONES(TAREA)
es un proceso en el que una función se llama a sí misma para resolver un problema. La función recursiva generalmente tiene una condición base que detiene las llamadas recursivas cuando se cumple, evitando así que se llame infinitamente.
```js
function factorial(n) {
    if (n === 0) {  // Condición base
        return 1;
    }
    return n * factorial(n - 1);  // Llamada recursiva
}

console.log(factorial(5));  // Output: 120

```
* Explicación:

* La función factorial se llama a sí misma con un valor decreciente de n.
* La condición base if (n === 0) detiene la recursión cuando n llega a 0.


## FUNCIONES CALLBACKS (TAREA)
es una función que se pasa como argumento a otra función y que se ejecuta después de que se complete una tarea o proceso dentro de esa función.
### Concepto:
Las funciones callback se usan para manejar tareas asíncronas o para permitir que una función se ejecute después de que otra haya terminado. El flujo de ejecución de una callback depende del comportamiento de la función que la recibe.
```JS
function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback();  // Llamada a la función callback
}

function despedir() {
    console.log("Adiós!");
}

saludar("Juan", despedir);  // Output: "Hola, Juan" -> "Adiós!"

```
* Explicación:

* saludar es una función que acepta un nombre y una función callback.
* Después de mostrar el saludo, llama a la función callback (despedir), que muestra un mensaje de despedida.

# CLASES
las clases en javascript llegan enla version `ECMAScript`,javascript no tenia al igual que otros lenguajes de programacion orientados a los objetos la `clase` ya que js se enfoca en la `programacion funcional` sin embargo con la llegada es `ES6`javascript adopta ser un lenguaje de programacion multiparadigma, entre ellos la programacion orientada a `objetos` con la llegada de las `clases`
## estructura de una clase en javascript.
una clase esta separada en tres grandes secciones.
1. el nombre de la clase que debera ser en singular y en Pascalcase.
2. debera tener atributos(valorwes,variables) estos deberan ser sustantivos y estar escritos en camelcase
3. debera tener metodos (acciones ,funciones) estos deberan ser verbos u etas escritos en camelcase

```js

class  computadora{
//atributos
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipocase="tower"
    }
    encender(){
        return "estoy encendiendo..."
    apagar(){
        apagar "estoy cerrando sesion y guardandoinformacion"
    }
    escribir(){
        return "estoy escribiendo..."
    }
    jugar(){
        return "estoy jugando."

}
//instanciar
let miPC= new computador ("gigabytyte)

```