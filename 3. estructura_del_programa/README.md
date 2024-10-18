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
```js
windows.alert("mensaje")
```
-**confirm** -preguntar al usuario y ofrecer dos botones que se traducen
en el valor booleanos  `aceptar` (true() y `cancelar`o `cerrar`(false)
```js
// si deseamos capturar las respuestas almacenaremos el codigo en un variable
respuesta=windows.confirm()"quieres salir del closet!!?)
```
-**prompt** -pregunta al ususario y espera que ingrese una respuesta
```js
window.promt("como te llamas")
//si deamos almacenar nuestras respuestas

respuesta=window.promot("como te llamas")
```

## expresiones-y-declaraciones
-**expresiones** - en javasript un fragmento de codigos que produce un valor es llamada `expresion`.tambien se dice  que una `expresion` es el fragmentode una `oracion `
```js
1
"hola"
3*6
57
!true
```
-**declaraciones** -en javascript es una oracion 
```js
!true;
let estado=!false;

```
## bindings (enlaces) 
cuando creamos un valor estos valores son volatiles solo existen en la ejecucion
 del programa y solo cuando llamados,
el bingings o enlace de manera que javascript recuerda los valoresy mantiene un 
estado interno asi como la reutalizacion de valores
**como lo usamos los bingings en javascript**
para usar el bingings primero debemos usar la palabra reservadao `keyword`de nombre `let`,despues debemos darle un nombre para identificar
el enlace luego asignarle el valor.
```js
// este es un enlace que puede auntar a varios valores
//como un pulpo con muchos brazos
let edadPersona =34 //esto es una enlace, agarramos valores

//si deseamos que nuestro enlace solo apunte un valor osea pulpo con un braso entonces para crear este enlace debemos hacer uso de keywor const
const edad=34
//este enlace siempre apuntara el valor 34 no podra modificarse enlace  otro valor

```
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

