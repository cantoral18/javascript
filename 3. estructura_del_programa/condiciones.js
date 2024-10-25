//ejemplo de condicion simple
//capturamos la edad y lo convertimos a numero

<<<<<<< HEAD
//let numero=prompt("ingrese un numero")

//if(+numero%2==0){
//    console.log("es par");

//}else{
//    console.log("es impar")
//}
//ejercicio
//crear un programa que pida al usuario su edad y pedendiendo su edad le daremos una seri de regalos
/*
*-si su edad esta entre4 a8 años: te ganara un chupetin
*-si su edad esta entre9 a 13 años: te ganaras una pelota firmada
*-si su edad esta entre 14 a 17 años: te ganara un celular nokia 6101
*-si su edad es mayorigual a 18: te ganaras una computadora
*/



// let edadPersona=Number(prompt("ingrese tu edad"))


// if (edadPersona>=4 && edadPersona<=8){
//     console.log(`te ganaras un chupetin ` )
// }
// else if (edadPersona>=9 && edadPersona <=13){
//     console.log(`te ganas una pelota firmada`) 
// }

// else if (edadPersona>=14 && edadPersona <=17){
//     console.log(`te ganas un celular nokia`)       

// }
// else{
// console.log(`te ganaras una compu`)
   
// }

// //utilizando stwith
// let edadPersona=Number(prompt("ingrese tu edad"))

// switch(true){
//     case(edadPersona>=4 && edadPersona<=8):
//         console.log(`te ganaras un chupetin ` );
//         break;
    
//     case (edadPersona>=9 && edadPersona <=13):
//         console.log(`te ganas una pelota firmada`) ;
//         break;
    
    
//    case (edadPersona>=14 && edadPersona <=17):
//         console.log(`te ganas un celular nokia`)  ;  
//         break;   

//     default:
//      console.log(`te ganaras una compu`)   
//     break;
    
//     let edadPersona=Number(prompt("ingrese tu edad"))

// }

//EJERCICIOS

//realizar un programa que pida 5 frutas  atraves del navegador
//y realizara los siguientes evaluaciones
//naranja //limon = es una fruta citrica
//platano /manzana=es una fruta dulce
//fresa,pera,papaya= "para la ensalada de frutas"
//si ingresa otro tipos de frutas =no tiene clasificacion


for(let i=0;i<=5;++){
    let fruta=prompt("escribe una fruta: " ,i)
    switch(fruta){
        case"naranja":
        case"limon":
        console.log(fruta,"es una fruta citrica")
        break ;
        case"fresa":
        case"pera":
        case"papaya":
        console.log(fruta,"es una fruta para la ensalada")
        break ;
        default:
            console.log(fruta,"no tiene clasificacion")  
            break ;
    }

}

let edad =Number ( prompt("ingresa tu edad"))
//verificamos si el tipo de datos edad es number realmente

if(typeof.edad == "Number"){
    //si la comparacioin es verdad mostraremos po consola la raiz cuadra de edad
    console.log(edad*edad)
};

//ejemplo de condicion simple de una sola linea
if(1+1==2)console,log("es verdad");

