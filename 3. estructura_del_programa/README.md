# estructura del program
## indice
-[interacion con el usuario](#interacion-basica-el-usuario)
-[declaraciones y expresiones](#expresiones-y-declaraciones)
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
