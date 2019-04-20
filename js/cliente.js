/* 
 * Parte 1 - (Alumno 1)
 * 
 * Crear el html con la interfaz necesaria para la simulación del funcionamiento de la cafetera: 3 puntos.
 * 
 * Programar correctamente los botones: llenar cafetera, servir taza y vaciar cafetera: 3 puntos.
 * Por la claridad en el código, indentación del mismo y la inclusión de comentarios: 2 puntos
 * Integración de las 2 partes con el Informe detallado, explicando la intervención de cada alumno en la resolución de la tarea: 2 puntos 
 */


//Funciones para los métodos
function llenarCafetera() {
    this.cantidadActual = this.capacidadMaxima;
    actualizarPorcentaje();
}

function servirTaza(cant) {
    this.cantidadActual = this.cantidadActual - cant;
    this.cantidadActual <= 0 ? this.cantidadActual = 0 : null;
    actualizarPorcentaje();
}

function vaciarCafetera() {
    this.cantidadActual = 0;
    actualizarPorcentaje();
}

function agregarCafe(cant) {
    this.cantidadActual = this.cantidadActual + cant;
    this.cantidadActual >= 100 ? this.cantidadActual = 100 : null;
    actualizarPorcentaje();
}

function mostrarEstado() {
    alert((this.cantidadActual / this.capacidadMaxima * 100) + " %");
}

//Creación del objeto y constructor
function cafetera(capacidadMaxima, cantidadActual) {
    this.capacidadMaxima = capacidadMaxima;
    this.cantidadActual = cantidadActual;
    this.llenarCafetera = llenarCafetera;
    this.servirTaza = servirTaza;
    this.vaciarCafetera = vaciarCafetera;
    this.agregarCafe = agregarCafe;
    this.mostrarEstado = mostrarEstado;
}

var nuevaCafetera = new cafetera(100, 100);
actualizarPorcentaje();

//Función auxiliar para visualizar el porcentaje
function actualizarPorcentaje() {
    var valor = nuevaCafetera.cantidadActual / nuevaCafetera.capacidadMaxima * 100;
    $("#porcentaje").text(valor)
        // Si existe ventana de informacion, vamos actualizando los datos en la misma
    if (infoCafetera) {
        infoCafetera.actualizarDatos()
    }
}



/*
•	capacidadMaxima: La cantidad máxima de café que puede contener la cafetera.
•	cantidadActual: La cantidad actual de café que hay en la cafetera.
•	Y los siguientes métodos:
•	llenarCafetera(): hace que la cantidad actual sea igual a la capacidad.

•	servirTaza(cant): simula la acción de servir una taza con la cantidad de café que se le pasa como argumento. Si la cantidad actual de café en la cafetera no alcanza para llenar la taza se sirve lo que quede.
•	vaciarCafetera(): Pone la cantidad actual de café de la cafetera a cero.
•	agregarCafé(cant): Añade a la cafetera la cantidad de café que se le pasa como argumento.
•	mostrarEstado(): Informa en % mediante un mensaje tipo "alert" de la cantidad de café que queda en la cafetera.
*/

// Variable donde se guardara la nueva ventana
var infoCafetera

// Funcion para abrir la nueva ventana
openInfoWindow = () => {
    window.infoCafetera = nuevaCafetera
    let a_int_windowWidth = 850
    let a_int_windowHeight = 450
    let int_windowLeft = (screen.width - a_int_windowWidth) / 2
    let int_windowTop = (screen.height - a_int_windowHeight) / 2
    let str_windowProperties = 'height=' + a_int_windowHeight + ',width=' + a_int_windowWidth + ',top=' + int_windowTop + ',left=' + int_windowLeft
    infoCafetera = open('informacionCafetera.html', 'infoCafetera', str_windowProperties)
}