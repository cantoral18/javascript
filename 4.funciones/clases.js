//ejercicios con clases
//diseñar una clase para mi identidad celular 
//tendra como attributos numero , marca, modelo,capacidad de bateria
//tendra como metodos encender ,apagar ,llamar ,colgar,enviar mensaje,

class Celular {
    // Constructor para inicializar los atributos
    constructor(numero, marca, modelo, capacidadBateria) {
        this.numero = numero;  
        this.marca = marca;    
        this.modelo = modelo;  
        this.capacidadBateria = capacidadBateria; 
        this.estado = 'apagado'; 
        this.llamando = false;   
    }

    // Método para encender el celular
    encender() {
        if (this.estado === 'encendido') {
            console.log('El celular ya está encendido.');
        } else {
            this.estado = 'encendido';
            console.log('El celular ha sido encendido.');
        }
    }

    // Método para apagar el celular
    apagar() {
        if (this.estado === 'apagado') {
            console.log('El celular ya está apagado.');
        } else {
            this.estado = 'apagado';
            console.log('El celular ha sido apagado.');
        }
    }

    // Método para realizar una llamada
    llamar(numeroDestino) {
        if (this.estado === 'apagado') {
            console.log('El celular está apagado. Enciéndelo primero.');
            return;
        }

        if (this.llamando) {
            console.log('Ya estás realizando una llamada.');
        } else {
            this.llamando = true;
            console.log(`Llamando al número ${numeroDestino}...`);
        }
    }

    // Método para colgar una llamada
    colgar() {
        if (!this.llamando) {
            console.log('No hay ninguna llamada para colgar.');
        } else {
            this.llamando = false;
            console.log('La llamada ha sido colgada.');
        }
    }

    // Método para enviar un mensaje
    enviarMensaje(mensaje, numeroDestino) {
        if (this.estado === 'apagado') {
            console.log('El celular está apagado. Enciéndelo primero.');
            return;
        }

        console.log(`Enviando mensaje a ${numeroDestino}: ${mensaje}`);
    }
}


const miCelular = new Celular('123-456-7890', 'Samsung', 'Galaxy S21', 4000);


miCelular.encender();  
miCelular.llamar('098-765-4321'); 
miCelular.colgar();  
miCelular.enviarMensaje('¡Hola! ¿Cómo estás?', '098-765-4321');  
miCelular.apagar();  
