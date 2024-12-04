# DOM- Document Objet Model
Modelo de documentos de objeto,el `DOM` es un conjunto de utilidades especificamente deseñamos para maipular documentosw en XML Y HTML.
El DOM transforma el archivo HTML en un arbol de nodos jerarquico.  Facilmente manipulables.
El DOM combierte todo el contenido del archivo HTMLenun objeto de javascript.
- **Mi archivo index.html**
```html
<body>
    <h1 id="titulo">titulo</h1>
    <p clas="parrafo">Este es la descripcion de mi pajina</p>
    <ul>
        <li>Primer Elemento</li>
        <li>Segundo Elemento</li>
        <li>Tercer elemento</li>
    </ul>
</body>
```
- **Mi archivo Script**
```js
documen:{
    Element:body,
    Att:null,
    Text:null,
    child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            Text:"titulo",
            child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"},
            Text:"Este es la descripcion de mi pagina",
            child:null
        },
        {
            Element:ul,
            Attr:null,
            Text:null,
            child:[
                {
                    Element:li,
                    Attr:nell,
                    text:Primer Elemento,
                    child:null
                }
                {
                    Element:li,
                    Attr:nell,
                    text:Segundo Elemento,
                    child:null

                },
                {
                    Element:li,
                    Attr:nell,
                    text:Tercer Elemento,
                    child:null

                }
            ]
        }

        }
    ]
}
```
DOM a demas de realizar el trabajo de combertir un archivo `HTML` en un objeto de javascript, nos ofrese una `API`, (Alication Programing Interfacez- Intefaz de Programcion de Aplicaciones). 
## selectores - recorriendo en DOM
los selectores nos permite obtener y capturar una etiqueta o varia etiquetas `html` incluyendo sus atributos 
,contenido e hijos si lo tuviera .
los selectores que podemos utilizar son variados podemos capturar etiquetas a travex de susu atributos 
como el nombre de la etiqueta misma

los selectores son `funciones` si hablamos de poo entonces se puede decir que son `metodos`.
y son los sigts:
- **getElemntById** 
devuelve un elemento (etiqueta) que tenga un id especifico.

```html

<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>

```

```js
let parrafo=document.getElemenById("dos")
```
- **getElementByClassName** - devuelve un elemento o etiqueta  que tenga un clase especifica.
```html
<h1 id="titulo"> titulo</h1>
<p class="parrafo"> parrafo uno</p>
<p class="parraf_dos"> parrafo dos</p>
```
```js
let parrafo =documento.getElementByClassName
```

- **querySelector**
devuelve el primer elemento que conincida con el selector
ingeresado puede ser un id ,class,name,o tag

```html
<h1 id="titulo"> titulo</h1>
<p class="parrafo"> parrafo uno</p>
<p class="parraf_dos"> parrafo dos</p>
<h2 >subtitulo</h2>
```
```js
let titulo=document.querySelector("#titulo)
let primerParrafo=document.querySelector(".parrafo)
let segundoParrafo=document.querySelector("#parrafo_dos)
let subtitulo=document.querySelector("h2")
```

**averiguar que otros selectores o metodos para recorrer el DOM tiene javascript**

1. Selectores de Elementos
```js
const element = document.getElementById('miElemento');
const elements = document.getElementsByClassName('miClase');
const elements = document.getElementsByTagName('div');
const element = document.querySelector('.miClase');
const elements = document.querySelectorAll('div.miClase');
```
2. Métodos de Recorrido de Elementos
```js
//Devuelve una lista de todos los nodos hijos de un elemento (incluyendo nodos de texto, comentarios, etc.).
const children = element.childNodes;
//Devuelve solo los nodos de tipo elemento (sin contar nodos de texto o comentarios).
const children = element.children;

```
3. Métodos de Búsqueda en el DOM
```js
//Selecciona el primer elemento que coincida con el selector CSS especificado.
const firstElement = document.querySelector('.miClase');
//Devuelve todos los elementos que coincidan con el selector CSS especificado.
const allElements = document.querySelectorAll('.miClase');
//Selecciona todos los elementos con la etiqueta especificada.
const divs = document.getElementsByTagName('div');

```
4. Recorrido con forEach

```js
document.querySelectorAll('.miClase').forEach(element => {
    console.log(element);
});

```
## manipulacion de DOM
-**cereateElement**
este metodo crea un elemento HTML con el nombre que le pasemos por parametro
```js
let titulo=document.createElement("h1")

```
-**appendChild**
nos permite hacer hijo de un elemento dentro de otro 

```js
let titulo=document.createElement("h1")
let body=querySelector("body")
body.appendChild(titulo)
```
## propieddades  delos elementos DOM
-**className**-permite setear o capturar el nombre de la clase que tenga elemento.
-**id** los mismo que className pero con el atributo id.
-**innerHTML** devuelve o permite insertar texto en un elemento.
-**innerText** devuelve o permite insertar texto en un elemento.
-**tectContent**-nos permite agregar o modificar el contenido de un elemento.
-**value** -nos permite obtener o setear valores de un elemento `input`.

## acciones con el elemento en el DOM(AVERIGUAR)
1. Acceder a un elemento en el DOM
getElementById: Obtiene un elemento por su id.

```javascript
Copiar código
const elemento = document.getElementById("miElemento");
getElementsByClassName: Obtiene una colección de elementos con una clase específica.
```
```js
Copiar código
const elementos = document.getElementsByClassName("miClase");
getElementsByTagName: Obtiene una colección de elementos con un nombre de etiqueta (tag) específico.
```
```js
Copiar código
const elementos = document.getElementsByTagName("div");
querySelector: Selecciona el primer elemento que coincida con el selector CSS.
```
```js
Copiar código
const elemento = document.querySelector(".miClase");  // primer elemento con esta clase
querySelectorAll: Selecciona todos los elementos que coincidan con el selector CSS.
```
```js
Copiar código
const elementos = document.querySelectorAll("div.miClase");
```
2. Modificar el contenido o el estilo de un elemento
Modificar el contenido de texto:

javascript
Copiar código
const elemento = document.getElementById("miElemento");
elemento.textContent = "Nuevo texto";  // Cambia el texto
Modificar el contenido HTML:

javascript
Copiar código
const elemento = document.getElementById("miElemento");
elemento.innerHTML = "<p>Nuevo contenido HTML</p>";  // Modifica el contenido HTML
Modificar los atributos de un elemento:

javascript
Copiar código
const imagen = document.getElementById("miImagen");
imagen.setAttribute("src", "nuevaImagen.jpg");  // Cambia el atributo 'src'
Modificar el estilo (CSS):

javascript
Copiar código
const elemento = document.getElementById("miElemento");
elemento.style.color = "red";  // Cambia el color del texto
elemento.style.backgroundColor = "yellow";  // Cambia el color de fondo
3. Agregar y eliminar clases (CSS)
Agregar una clase:

javascript
Copiar código
const elemento = document.getElementById("miElemento");
elemento.classList.add("nuevaClase");  // Añade una clase CSS
Eliminar una clase:

javascript
Copiar código
const elemento = document.getElementById("miElemento");
elemento.classList.remove("nuevaClase");  // Elimina una clase CSS
Alternar una clase (añadir si no existe, eliminar si existe):

javascript
Copiar código
const elemento = document.getElementById("miElemento");
elemento.classList.toggle("activa");  // Si "activa" está presente, se elimina, si no, se agrega
4. Agregar eventos a los elementos
Agregar un evento (por ejemplo, clic):

javascript
Copiar código
const boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});
Eliminar un evento:

javascript
Copiar código
const boton = document.getElementById("miBoton");
function miFuncion() {
    alert("¡Botón clickeado!");
}
boton.addEventListener("click", miFuncion);
boton.removeEventListener("click", miFuncion);  // Elimina el evento
5. Crear, agregar y eliminar elementos del DOM
Crear un nuevo elemento:

javascript
Copiar código
const nuevoElemento = document.createElement("p");  // Crea un nuevo párrafo
nuevoElemento.textContent = "Este es un nuevo párrafo.";
Agregar un nuevo elemento al DOM:

javascript
Copiar código
const contenedor = document.getElementById("contenedor");
contenedor.appendChild(nuevoElemento);  // Agrega el nuevo párrafo al contenedor
Eliminar un elemento:

```javascript
const elemento = document.getElementById("miElemento");
elemento.remove();  // Elimina el elemento del DOM
```
6. Modificar la visibilidad de los elementos
Ocultar un elemento:

```javascript

const elemento = document.getElementById("miElemento");
elemento.style.display = "none";  // El elemento desaparece
```
Mostrar un elemento:
```js

Copiar código
const elemento = document.getElementById("miElemento");
elemento.style.display = "block";  // El elemento vuelve a aparecer (si era un bloque)
```

7. Desplazamiento y posición en el DOM
Obtener la posición y el tamaño de un elemento:
javascript
Copiar código
const elemento = document.getElementById("miElemento");
const rect = elemento.getBoundingClientRect();
console.log(rect.top, rect.left);  // Muestra la posición
console.log(rect.width, rect.height);  // Muestra el tamaño

addEventListener("clic",()=>)

> [!NOTE]
> tecnologias para el procesamiento de texto a travez del marcado `markup` (etiquetas que nos permite
atraves de palabras reservadas  darle estilo o significado al contenido de las etiqetas). la primera
tecnologia fue `xml` despues nace `html` despues la ultima generacion de tecnologias del marcado de
texto `markdown` 