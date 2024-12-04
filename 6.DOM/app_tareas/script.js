let imput=document.querySelector("#tarea")
let button=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tarea")

button.addEventListener("click",()=>{
    let li=document.createElement("li")
    li.textContent=input.value
    ul.appendChild(li)
    ul.innerHTML=
    <li>${input.value}<button id="delete">eliminar</button> </li>
  
    input.value=""
})
eliminar=document.querySelector("#delete")
eliminar.addEventListener("click",()=>{
    
})