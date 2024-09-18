# introduccion 
- [temario] (#temario)
- [comentarios ](#comentarios) 
- [consola] (#consola)
- [naiming] (#naiming)
  

## comentarios 
es la parte dentro de mi archivo de codigo que no es leido ni ejecutadopor el interprete de  `js`
< TIP
>Los comentarios nos ayuda a entender nuestros codigos ,en ocaciones podemos usarlos para silenciar temporalmente partes del codigos *(comentar un codigo)*.
### TIPOS DE COMENTARIOS

1..**UNA SOLA LINEA**
    ```js

    comentario de una sola linea

    ```
2..**MULPTIPLES LINEAS**
    ```js
    /*
    comentario de multi linea
    */

    ```
3..**JSDOC**

    /**
  * ESTE ES UNA LINEA
  * ESTA EN OTRA LINEA
    */

este tipo de comentario es muy usado para documentar el codigo,generalmente usado para la explicacion
 de funciones  y clases en `js`
    [link del archivo](comentarios.js)

## consola
la herramienta de javascript mas usada,dentro de los navegadores es usada para la 
[depuracion](#depuracion) de nuestro codigo

>[!TIP]
>##### depracion, es la tecnica que nos permite mostrar el codigo  en las distintas fases del desarrollo
y verificar que el mensaje mostrado sea el correcto .verificando que el codigo no tenga errore de sintaxis de logica de precaucion.

### tipos de mensajes por consola
#### 1.notificadores
mostrar un mensaje por consola
```js
console.log("hola mundo")
```

mostrar un mensaje  de estilo informativo
```js
console.info("mensaje informativo")
```

mostrar un mensaje p de estilo alerta
```js
console.warn("mensaje de tipo alerta")
```
mostrar un mensaje p de estilo o tipo error
```js
console.error("mensaje de error")
```

#### 2. gestion de tiempo
este tipo de mensaje nos sirve para ver la duracion de ejecucion de nuestro codigo
y poder optimizar para hacer uso de esta herramienta tenemos iniciar la consola con
 un 96`time()` luego vendra el codigo que deamos ver la duracion y finalmente terminar
  en time de la consola con`timeEnd()`
  ```js
  edad=18
  if(edad >=18){
    console.log("eres mayor de edad")
  }else{
    console.warn("eres menor")
  }
   ```
#### 3. tablas
 es tipo de mensaje  por consola nos muestra la informacion en una tabla.
 solo formateara alos datos de tipo`array` y `objetos`.
  ```js
  lenguajes =[
     {nombre:"javascript",extension:."js"},
     {nombre:"python",extension:."py"},
     {nombre:"php",extension:."php"}

  ]
  ```
  
  [para ver los ejemplos has clic aqui ] (consola.js)
  
## naiming
es la tecnica para nombrar variables  , funcione y clasess dentro de un lenguaje de programacion
Las variables tienen reglas muy especificas que debemos seguir ala hora de designar sus nombres.

### usos incorrectos
-no se puede usar espacios
>[!WARNING]
```js
# INCORRECTO
> CON ESPACIOS =45
```
-  no usar un numero deleante
>[!WARNING]
```js
# INCORRECTO
> 1numero=45
```
- evitar simbolos y `snake_case`
>[!WARNING]
>```js
# INCORRECTO
> dame$=45
> #incorrecto
> con_guiones_bajos="no es correcto"
>```
### usos correctos
-debemos usar nombres que expliquen que aporta esa variable a nuestro codigo
-usar `camelcase`
> [!TIP]
> #CORRECTO
> edadAlumnos=45
>```