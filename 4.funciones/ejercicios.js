//haciendo uso de las funciones de tipo closure
//ejercicio1
//pedir al usuario su nombre y su edad ,verificar que su edad sea mayor a 18 
//años en ese caso mostraremos un mensaje de bienvenida mas el nombre que ingreso el usuario 

// Función constructor para crear un objeto usuario
function Usuario() {
    
    this.nombre = "";
    this.edad = 0;
    
    this.solicitarDatos = function() {
        
        this.nombre = prompt("¿Cuál es tu nombre?");
        this.edad = parseInt(prompt("¿Cuántos años tienes?"), 10);
        
        if (this.edad > 18) {
            alert(`¡Bienvenido/a, ${this.nombre}!`);
        } else {
            alert("no eres mayor de edad.");
        }
    };
}


const usuario = new Usuario();

usuario.solicitarDatos();
