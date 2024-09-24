#valores, tipos y operadores
## indice
-[tipos de datos o valores](#valores)
## valores
imagina un mar de bits.una computadora moderna tiene mas de 100 mil de bits 
almacenados en su `memoria de trabajo`o `memoria principal` o `ram`.
ahora la memoria no valatil o memoria secundaria o memoria de almacenamiento
tiene estos bits de manera ordenada generalmente afilada como si de un 
estante de una biblioteca se tratara
cuando nosotros programamos hacemos uso de`memoria de trabajo`, para trabajar
 de manera ordenada con los bitd que se encuentran en nuestro mar de bits,
 javascript ordena los bits en pequeñas partes o piezas de informacion a 
 esto se lo conoce como`valores`
cada valor tiene una funcionalidad distinta puede ser numero un texto
 o una funcion .

cuando hablamos de tipos de datos en javascript nos referimos a su representacion
 binaria y al tipo de valor que usamos
#### datos primitivos
son aquellos datos que ya existen no pueden ser creados, actualizados ni eliminados solo pueden ser llamados para el uso que deseamos darle.
#### -numeros(number)   
los valores de tipo numero , como es de esperar son numeros  y en javasript se escribe o se hacer el lllamado de este valor de los siguiente manera 
```js
//datos numerico de tipo entero
//entero positivo
20
// estamos usando un patron de bits para en numero 20 que existira  dentro de la memoria  de trabajo
//entero negativo
-23
//decimal positivo
.0
//decimal negativo
-3,6


```
#### numero de punto flotante decimal fraccion 
```js
2.7
0.
.0
```
#### numeros notacion cientifica
```js
2.998e8
//2.998*10^8
```

>[!WARNING]
>cuando javacript realiza operacion con numeros enteros en el resultado siempre sera exacta, cuando realize operaciones con numeros  decimales el resultado  perdera precision  por que solo tiene 64 bits de almacenmiento  esto suele recurrir con resultados cuyo decimal  sean infinitos como el numero PI **es nuestra responsabilidad  como programadores hacer el uso de los decimales  con aproximaciones para evitar errores**
>[!TIP]
>cuando javasript hace trabajo de memoria (cuando crea un patron de bit para alamacenar) todos numeros son almacena como decimal positivo.

#### numeros especiales
en javascript existen tres  valores de tipo numero que se consideran datos primitivo numerico de tipo especial 

```js
Infinity
- Infinity
NaN
//
```







-tipos(tipos de datos)
-operadores