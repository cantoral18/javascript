# estructura del program
## indice
-[interacion con el usuario](#interacion-basica-el-usuario)
-[declaraciones y expresiones](#expresiones-y-declaraciones)
-[bindings (enlaces)](#bindings-enlaces)
-[el entorno](#el-entorno)
-[control de flujo](#control-de-flujo)

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
### ejecucion condicional 
hacemos uso de esta en el control de flujo cuando tenemos distintas caminos o distintos 
mensajes que deseamos mostrar segun una condicion.

```js
**condicion simple`if`de una sola linea**
if(1+1==2)console.log("es verdad");
```
-**condicion de doble evaluacion`if else`**
existen casos en los que tendremos ejecutar un codigo si es verdad pero tambien si es falso.ejecucion de dos caminos.
ejemplos:
```js
let edaPersona=16;
if(edadPersona>=18){
    console.log("eres mayor de edad");

}else{
    console.log("eres menor de edad")
}
```
-**condision multiple`if ` `else if`**
se utiliza cuando se tiene que evaluar y devolver  varias opciones o multples respuestas
ejemplo:
```js
let total_compra=30
if (total_compra>50 && total_compra <100){
    console.log(`tiene un descuento del10% ${total_compra*0.10}` )
}
else if (total_compra>100 && total-compra <500){
    console.log(`tiene un descuento del20% ${total_compra*0.20}`)    

}else{
console.log(`tiene un descuento del 50% ${total_compra*0.50}`)   
}

```