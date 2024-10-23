//ejercicios de condiciones
//crear un progarama que me pide un numero y me muestre por consola si es un numero par o impar

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

let edadPersona=Number(prompt("ingrese tu edad"))



if (edadPersona>=4 && edadPersona<=8){
    console.log(`te ganaras un chupetin ` )
}
else if (edadPersona>=9 && edadPersona <=13){
    console.log(`te ganas una pelota firmada`) 
}

else if (edadPersona>=14 && edadPersona <=17){
    console.log(`te ganas un celular nokia`)       

}
else{
console.log(`te ganaras una compu`)   
}



