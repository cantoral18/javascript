valores, tipos y operadores
## indice

-[tipos de datos o operadores](#vlores-tipos -y-operadores)
    -[valores](#valores)
    -[datos primitivos](#datos-primitivos)
    -[numeros (numer)](#-numerosnumber)
    -[aritmetica](#aritmeticas)
    -[cadenas](#cadenas)
    -[plantilla literales](#plantilla literales)
    -[operadores unarios](#operadores-unarios)
    -[Valores boleanos](#Valores boleanos)
    -¨[operador ternario](#operador-ternario)

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
### -numeros(number)                
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
NaN (not a number)(no es numero)
// cuando  el resultado de una operacion es maticamente imposible. te muetra  nan ,infinity

```
#### aritmeticas
la principal operacion que se puede hacer co numeros es la aritmetica . para eso tenemos los operadores aritmeticos como:

suma (+)
resta(-)
multiplicacion(*)
division(/)
potencia(**) -modulo(%) ** podemos agrupar operaciones con parentesis ()las operaciones que este entre los parentesis se ejecutaran primero consulta el archivo de operadores aqui para ver los ejercicios aqui
#### cadenas
el siguiente tipo de dato primitivo es la `cadena`-`string`.

¿para que se usa las cadenas de javacript?
-para representar texto
se escribe encerrado su contenido entre comillas:
```js
//cadenas con contenidos
"soy un texto" //soy comillas
'tambien soy un texto'//comillas simples
`yo tambien soy○`//acento grave

//cadena vacia
""
```
**problemas**
-como representamos  un texto entre comillas
para hacer el uso dentro del contenido de una cadena podemos seguir las siguientes recomendaciones
```js
//si nuestro texto tiene que estar entre comillas simples 
"´este texto se muestra entre comillas simples'"
//si nuestro texto tiene que estar entre comillas dobles
`"este texto se muestra en comillas dobles"`
//si nuestro texto tiene que estar entre comillas dobles como simples
`'esta es comilla simple' ,"esta es comilla doble"`
```
otra manera de hacer lo antes mencionado es haciendo uso de la barra invertida `\` tambien conocida como`caracter de escape`..
hacer uso de este caracter indica el caracter psterior tendra un significado especial.
```js
"de este texto solo esta \"palabra\" estara en comillas "   el acento grabe se incorporo en script6

```
**problema** - deamos agregar  un salto de lenea en nuestros texto.
```js
//solucionamos este problema haciendo uso de los acentos ggraves
`primera linea
segunda linea`
```
antres de la incorporacion de es6(ecma) en el uso de acento grabes (`)se utilizzaba el caracter de escape`\`
```js 
"esta es la primera linea \n y esta es la segunda linea"
```
**prooblemas**- deseo tabular untexto
```js
`
este texto no esta tabulado
        este texto esta tabulado
`
```
ahota tabularemos haciendo uso de caracter de escape 
```js
"si tabular \t y tabulado"

#### concatenacion
el unico operador aritmetico que puede ser usado por cadenas es el operador de suma(+)
puede ser usado entre dos o mas cadenas y pasa a llamar operador de concatenacion, lo que realizar es unir cadena en una sola.
```js
"hola"+" "+"mundo"
```
#### plantilla literales
las plantillas literales mencionadas anterior mentente con el nombre de acento grabe son usadas para mostrar
texto literal,tambien nos permite ejecutar  codigo javascript dentro de una plantilla literal el codigo o el resultado de este codigo sera transformado en un datro tipo texto y se incluira en la popcision en que se encuentre.
para hacer uso de esta funcionalidd debemos usar,
las siguientes expresiones`${}`.
```js
//creando una plantilla literal -(template literals)
``
//usando js dentro de una plantilla literal
`la suma de 1+1es ${1+1}

```

>[!TIP]
>se dice literal por que con el formato que codificamos sera mostrado de esa misma forma en la consola

#### operadores unarios
no todo los operadores son simbolos,algunos se escribe como palabras.
un ejemplo es eloperador `typeof`es operador produce unvalor de cadena que indica el tipo del valor que le proporcionamos.
`operadores binarios` se les conoce porque operar sobre dos valores`2*5`
`operador unario`por  que solo trabaja con un valor 
```js
//para poder ver su funcionalidad o el valor que genera siempre debemos mostrarlo en un console
console.log(typeof)
```
#### Valores boleanos
este tipo de dato primitivo es util cuando tenemos un valor que distinga solo entre dos posibilidades ,
como`si`y `no`o`encendido`y `apagado`.
para esste propopsito,javascript tiene un tipo de dato `Booleano` ,que tienesolo dos tipos de valores
`true` y `false`
**que formas de producir y valores booleanos tenemos?**
1.**usando operadores de comparacion**
    los operadores de comparacion son los siguientees
    -mayor que(>)
    -menor que(<)
    -mayor igual que(>=)
    -menor o igual que (<=)
    -igual a (==)
    -extrictament6e igual(===)
    -no es igual a(!=)
2.**usando los operadores logicos**
    javascript soporta tres operadores logicos
    -and (y)representacion en javascript `&&`
    -or(o)representacion de javascript `|`
    -not(no) representacion en js `!`
    **observacion**
    este operador unario que su funcion es invertir elo valor 
    que tiene a su derecha `!true`
    produce `false`
>![TIP]
>**AND `&&` `?? `**
. SI TENEMOS DOS VALORES VERDADEROS DEVOLVERA EL SEGUNDO VALOR VERDADERO
. SI TENEMOS Y UN VALOR FALSO Y UN VERDADERO DE VOLVERA EL FALSO

>![TIP]
>**OR `|| `**
. SI TENEMOS DOS VALORES VERDADEROS DEVOLVERA, EL PRIMER VALOR VERDADERO
. SI TENEMOS UN VALOR VERDADERO Y UNO FALSO DEVOLVERA ,EL VALOR VERDADERO

3. **USANDO EL OPERADOR  RELACIONAL**
este operador compara sus valores y retorna un boleano como resultado
lo que evalua este operador si un propiedad especifica se encuentra en un objeto.
evalua que si el primer valor que se encuentra asu izquierda existen o 
forma parte del segundo valor que se encuentra asu derecha.
```js
"a" in["a","e","i","o","u"]

```
#### operador ternario
este operador trabja con tres valores
el pri8mer valor es el que determinara si se muestra el resto de valores .
eso quiere decir sie el primer valor es  verdadero mostrara el segundo valor 
miestras  si es falso mostrara en tercer valor