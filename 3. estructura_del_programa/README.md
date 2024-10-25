<<<<<<< HEAD
# Estructura Del Programa
## Indice
- [Estructura Del Programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y Declaraciones](#expresiones-y-declaraciones)
  - [Bindings (Enlaces)](#bindings-enlaces)
  - [El Entorno](#el-entorno)
  - [Control de flujo](#control-de-flujo)
    - [Ejecución Condicional](#ejecución-condicional)
    - [Bucles](#bucles)
## Interaccion basica con el usuario
Podemos interactuar con el usuario desde Javascript utilizando un metodo sencillo que viene implementado en los navegadores.
El metodo es conocido como `window` o el metodo de ventana, este metodo en realidad es un objeto que contiene o almacena varias funciones, entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - Esta funcion nos muestra un mensaje en pantalla
=======
# estructura del program
## indice
-[interacion con el usuario](#interacion-basica-el-usuario)
-[declaraciones y expresiones](#expresiones-y-declaraciones)
-[bindings (enlaces)](#bindings-enlaces)
-[el entorno](#el-entorno)
-[control de flujo](#control-de-flujo)
-[bucles](#bucles)
## interacion basica con el usuario
podemos interctuar con el usuario desde javascript ,utilizando un metodo sencillo que biene implementado
en los navegadores el metodo es conocido como`window`o el metodo de ventana este metodo en realidad es un objeto  que contiene o almacena carias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
-**alert** - esta funcion  nos demuestra un mensaje en la pantalla
>>>>>>> 5cf6dab0f8d3bc87e163073f8f0b2a021f8c14d3
```js
window.alert("mensaje")
```
- **confirm** - Preguntar al usuario y ofrecer dos botones que se traducen en valores boleanos `Aceptar` (true) y `cancelar` o `cerrar` (false).
```js
window.confirm("¿quieres ser mi enamorado?")
//si deseamos capturar la respuesta almacenaremos el codigo en una variable
respuesta=window.confirm("quieres salir del closed!?")
```
- **prompt** - Pregunta al usuario y espera que se ingrese una respuesta
```js
window.promt("como te llamas??")
//si deseamos almacenar la respuesta usaremos una variable
respuesta=window.prompt("como te llamas?")
```
## Expresiones y Declaraciones
- **Expresiones** - En javascript un fragmento de codigo que produce un valor es llamada `Expresion`. Tambien se dice que una `expresion` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>7
!true
```
- **Declararciones** - En javascript es una oracion y es algo que tiene sentido, dato: toda oracion que termina en `;` es una declaracion, no es una obligacion pero es recomendable que la oracion termine en `;` para saber que esta finalizando la declaracion.
```js
!true;
let estado=!false;
```

## Bindings (Enlaces)
Cuando creamos un valor estos valores son volatiles solo existen en la ejecución del programa y solo son llamados.
El bindings o enlace es la manera que javascript recuerda los valores y mantine un estado interno asi como la reutilizacion de valores.

**como usamos los bindings en javascript**.

Para Usar el bingdings primero debemos usar la palabra reservada o `keywor` de nombre `let`, despues debemos darle el nombre para identificar
```js
// este es un enlace que puede apuntar a varios valores
//como un pulpito com muchos brasitos
let edadPersona= 34
// si deseariamos que nuestro enlace solo apunte a un valor oaseq un pulpito con un brasito entonces para crear este enlace debemos hacer uso de la keywor const.
const edad=45
//este enlace simepre apunta al valor 45 no podra modificar su enlace a otro valor
```
<<<<<<< HEAD
>[!NOTE]
**Que nombre ponerle a nuestro enlace**- El nombre de un enlace debera escribir el valoral que esta enlasado y debera estar escrita en `camelCase`
=======
>[! TIP]
>**QUE NOMBRE PONERLE A UN ENLACES** -el nombre  de una enlace debera describir el valor
al que esta enlasado y debera estar escrita en  `camelCase`
```js
//quiero crear un enlace que tenga el valor de la fecha actual
let yyyymmdd="20240910"//incorrecto
let fechaActual="09-10-24" // correcto

let edadActualAlumno=34

```
## el entorno
el entorno es conocido como el momento el que se ejecuta o inicia un archivo en javasript.
el entorno al crearce no se crea basio dentro del entorno se crearan la coleccion de enlaces y valores.

**tarea** averiguar mas sobre la ejecucion en linea de los entornos en javascrip

## control de flujo
una sentencia  se ejecutan  como si fuera una historia de arriba a abajo  por ejemplo:
```js
let elNumero =prompt("elige un numero")
console.log(`tu numero es la raiz cuadrada de:${(+elNumero)*(+elNumero} `)

//primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero 
```
#### Ejecucion condicional
Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion, distintas alternativas. Como creamos una condicion en javascript La ejecucion condicional se crea con la palabra reservada (keyword) if a continuacion de una condicion en llaves {} se escribe el cuerpo del codigo que deseo ejecutar en caso la condicion sea verdad. -condicion simple if
>>>>>>> 5cf6dab0f8d3bc87e163073f8f0b2a021f8c14d3

let comparacion=5>4
if comparacion{
  prompt("escribe tu nombre")
}
### Condicion simple if de una sola linea
if (1+1==2) console.log("es verdadero");
Condicion de doble evaluacion if else Existen casos en los que tendremos que ejecutar un codigo si es verdad pero tambien si es falso. Ejecucion condicional de dos caminos.
let edadPersona=19;
if (edadPersonad>=18){
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}
condicion multiple if else if Se utiliza cuando se tiene que evaluar y devolver varias opciones o multiples respuestas
let totalCompra=105
if (totalCompra>50 && totalCompra<100){
  console.log(`tiene un descuento del 10% ${totalCompra*0.10}`)
}else if(totalCompra>100 && totalCompra<500){
  console.log(`tienes un descuento del 20% ${totalCompra*0.20}`)
}else {
  console.log(`tienes un descuento del 50% ${totalCompra*0.50}`)
}

### bucles
```js
<<<<<<< HEAD
//Quiero crear un anlace que tenga el valor de la fecha actrual
//incorrecto
let yyyymmdd="202410910"
//correcto
let fechaActual="09-10-2024"
//correcto
let edadActual
```

## El Entorno
El entorno es conocido como el momento en que  el se ejecuta o inicio un archivi javascript.
El entorno al crearse no se crea basio dentro del entorno se creara la coleccion de enlaces y valores.

**TAREA**-  Averiguar mas sobre ejecucion en linea de los entornos en javascript

## Control de flujo

Una sentencia se ejecuta como si fuera una historia d arriba abajo.
por ejemplo:

```js
let elNumero = prompt ("Elige un numero")
console.log(`tu numero es la raiz cuadrada de: ${elNumero+elNumero}`)

// primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero

```


### Ejecución Condicional
Hacemos uso de este control de flujo cuando tenemos distintas caminos o distintos mensajes que deseamos mostrar segun una condición.
**Como creaños una condición**

La ejecución condicional se crea con la palabra reservada(Keyword) `if` a continuacion de una `condicioón` en llaves `{}` se escribira el cuerpo del codigo que deseo ajecutar en caso de la condición sea `verdad`.
  
  - **condición simple `if`**
```js
let comparación=5>4 
if treu{
  promnt("Escribe tu nombre")
}
```
**Condición simple `if` de una sola linea**
```js
if (1+1== ) console.log("Es verdad")
```
- **Condición de doble evaluación `if else`**
  
  Existen casos en los que tendremos que ejecutar un codigo si es verdad pero tambien  si es falso. Ejecución  condicional de dos caminos.

  ```js
  let edadPersona = 16;
  if(edadPersona >=18){
    consol.log ("Eres mayor de edad");
  }else{
    consolg.log("Eres Menor de edada");
  }
  ```
- **Condición multiple `if` `else if`**
- 
  Se utiliza cuando se tiene que evaluar  y devolver varias opciones o multiples respuestas.
  ```js
  let total_compra=30
  if (total_compra >50 && total_compra >100){
    console.log('Tienes un descuento de 10% ${total_compra*0.10}')
  }
  else if (total_compra > 100 && total_compra <500){
    consol.log ('tienes un descuento del 20%  ${total_compra*0.20')

  } else{
    console.log('Tienes un descuento del 50%  ${total_compra*0.50')
  }
  ```
**condiciones multiples `stwith`**
java script dispone de una opcion para crear estrcturas condicionales multiples.`stwitch`permite crear esttrtucturas mas optimizadas para cubri un amplio abanico de posibilidades

```js
let edad=Number(prompt("ingrese su edad")


```


### Bucles
Consideremos el siguiente problema
Crear un programa que imprima los numeros de 1 al 12 una forma se hacerlo seria el siguiente:
```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
```
el ejemplo anterior es valido pero la idea cuando programamos es hacer menos trabajo no mas, en el ejercicio anterior tendriamos problemas si deseamo mostrar todos los numeros menores a 1000.
Necesitamos una manera de ejcutar un fragmento de codigo multiples veces. a esta forma de control de flujo se le llama `bucle`.
para crea un bucle tenemos dos forma de hacerlo
1. `while` -para hacer uso de este bucle primero debemos usar la palabra clave `while` este asu ves como el if devera tener una `condicion` si esta condicion es verdad el bucle se ejecutara indefinidamente en caso la condicion sea falsa el bucle no sera ejecutado,  al igual que el if luego de darle la condicion crearemos el `cuerpo` donde escribiremos el condigo que deseamos ejecutar.
```js
while (true){
  console.log("hola")
}
```
2. `for` esta es la manera mas abreviada de crear un bucle en javascript, en el caso de while necesitamos una variable contador luego la condicion y finalmente el aumento del contador. en el caso de `for` estos tres pasos se realizan en una sola linea
```js
for (let contador=2;contador<=20;contador++){
  if (contador%2==0) console.log(contador)
}
```
> [!TIP]
> `while` se usa cuando no sabemos la cantidad de veces que deseamos ejecutar un codigo, por lo general su finalizacion requerira de una intervencion externa. `for` se usa cuando sabemos la cantidad de veces que deseamo ejecutar un codigo
> [!NOTE]
> para terminar un bucle se hace uso de la palabra reservada `break`
```
=======
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
```
el ejemplo anterior es valido pero la idea cuando programamos es hacer menos trabajo no mas. en el ejercio anterior tendramos problemas si deseamos mostrar todo los numeros menores a 1000
necesitamos una manera dee ejecutar un fragmento de codigo multiples veces. a estaforma de control de flujo se llama`bucle`.
para crerar bucle tenemos dos formas de hacerlo
1. `while`- para hacer uso de este buble primero debemos usar la palabra clave `while`este asu ves como el if devera tener una condiciomn si esta condicion es verdad el bucle se ejecutara indifinitivamente en caso de condicion sea falsa el bucle no sera ejecutado ,al igual que el if luego darle la condicion creearemos el `cuerppo` donde escriiremos el codigo que deseamos ejecutar.
```js
while(true){
    console.log("hola")
}
```
2. `for` esta es la manera mas abrebiada de crear un bucle en javascrpit, en ele caso de while necesitamos una variable contador luego una condicion y finalmente el aumento del contador . en el caso `for` este tres pasos se reañiza en una sola lines
```js
for(let  i=2;<=20;i++){
if(i %2==0)console.log(i)
}
```
>[!TIP]
`while`se usa cuando sabemos la cantidad de veces que deseamos ejecutar un codigo,por lo general su finalizacion reqerida de una intervencion externa.
`for`se usa cuando sabemos la cantidad de veces que desseamos ejecutar un codigo

>>>>>>> 5cf6dab0f8d3bc87e163073f8f0b2a021f8c14d3
