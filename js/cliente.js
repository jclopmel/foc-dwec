

//Funciones para los métodos
function llenarCafetera(){
	this.cantidadActual = this.capacidadMaxima;
	actualizarPorcentaje();
}

function servirTaza(cant){
	this.cantidadActual = this.cantidadActual-cant;
	this.cantidadActual <= 0 ? this.cantidadActual = 0 : null;
	actualizarPorcentaje();
}

function vaciarCafetera(){
	this.cantidadActual = 0;
	actualizarPorcentaje();
}

function agregarCafe(cant){
	this.cantidadActual = this.cantidadActual+cant;
	this.cantidadActual >= 100 ? this.cantidadActual = 100 : null;
	actualizarPorcentaje();
}

function mostrarEstado(){
	alert((this.cantidadActual/this.capacidadMaxima*100)+" %");
}

//Creación del objeto y constructor
function cafetera(capacidadMaxima, cantidadActual){
	this.capacidadMaxima = capacidadMaxima;
	this.cantidadActual = cantidadActual;
	this.llenarCafetera = llenarCafetera;
	this.servirTaza = servirTaza;
	this.vaciarCafetera = vaciarCafetera;
	this.agregarCafe = agregarCafe;
	this.mostrarEstado = mostrarEstado;
}

var nuevaCafetera = new cafetera(100, 100);

//Función auxiliar para visualizar el porcentaje
function actualizarPorcentaje(){
	var valor = nuevaCafetera.cantidadActual / nuevaCafetera.capacidadMaxima * 100;
	$("#porcentaje").text(valor)
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