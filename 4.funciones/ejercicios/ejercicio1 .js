1. //Función que devuelva el número menor pasado por argumento

function obtenerMenor(...numeros) {
    return Math.min(...numeros);  

// Ejemplo de uso:
console.log(obtenerMenor(10, 5, 3, 8, 15)); 

//2. Función recursiva para mostrar los primeros 20 números de la serie Fibonacci


function fibonacci(n, a = 0, b = 1) {
    if (n <= 0) return;  // Condición base para detener la recursión
    console.log(a);  // Mostrar el número actual de la serie
    fibonacci(n - 1, b, a + b);  // Llamada recursiva, pasando el siguiente par de números
}


fibonacci(20);
