# DOM_Document OBJETO MODEL
modelo de documento de objeto
el DOM es un conjunto de utilidades especificamente diseñadas para manipular documentos HTML.
el dom transforma el archivo html en el arbol de nodos jerarquico  facilmente manipulado.
el dom convierte en todo el contenido del archivo html en un objeto de javascript.
-**miarchivo index.html**
```html
<body>
<h1 id="titulo">titulo</h1>
    <p class="parrafo"> este es el la descripcion de mi pagina</p>
    <ul>
    <li>primer elemento</li>
    <li>segundo elemmento</li>
    <li>tercer elemento</li>
    </ul>
</body>
```
-**miarchivo script.js**
```js

document:{
    Element:body,
    Attr:null,
    Text:null,
    child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            Text:"Titulo",
            child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"}
            Text:"este es la descripcion de mi pagina",
            child:null
        },
        {
            Element:ul,
            Attr:null,
            Text:null,
            child:[

            Element:li,
            Attr:null,
            Text:"primer elemento",
            child:null
            ]

        }
    ]     
}

```
DOM a demas de relizar el trabjo de convertir un archivo `html` en un objeto de
javascript , nos ofrece un `API`(aplication progaming interfacez- interfaz de programacion de aplicaciones)

## selectores
los selectores nos permite obtener y capturar una etiqueta o varia etiquetas `html` incluyendo sus atributos 
,contenido e hijos si lo tuviera .
los selectores que podemos utilizar son variados podemos capturar etiquetas a travex de susu atributos 
como el nombre de la etiqueta misma

los selectores son `funciones` si hablamos de poo entonces se puede decir que son `metodos`.
y son los sigts:
- **getElemntById** devuelve un elemento (etiqueta) que tenga un id especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>

```

```js
let parrafo=document.getElemenById("dos")
```

> [!NOTE]
> tecnologias para el procesamiento de texto a travez del marcado `markup` (etiquetas que nos permite
atraves de palabras reservadas  darle estilo o significado al contenido de las etiqetas). la primera
tecnologia fue `xml` despues nace `html` despues la ultima generacion de tecnologias del marcado de
texto `markdown` 