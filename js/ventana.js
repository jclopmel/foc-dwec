// Funcion para setear los datos actuales de la cafetera 
actualizarDatos = () => {
    cantAct = document.getElementById('cantAct')
    cantAct.innerText = window.opener.nuevaCafetera.cantidadActual
    cantMax = document.getElementById('cantMax')
    cantMax.innerText = window.opener.nuevaCafetera.capacidadMaxima
    cantPor = document.getElementById('cantPor')
    cantPor.innerText = (window.opener.nuevaCafetera.cantidadActual * 100) / window.opener.nuevaCafetera.capacidadMaxima + '%'
    cantTazas = document.getElementById('cantTazas')
    tazasRestastes = window.opener.nuevaCafetera.cantidadActual / 10
    cantTazas.innerText = tazasRestastes
    this.colorearTazas(tazasRestastes);
}

// Funcion para colorear las tazas
colorearTazas = (numTazas) => {
    const todasTazas = document.querySelectorAll('#taza');
    todasTazas.forEach((taza, i) => {
        taza.style.filter = '';
        if (i >= numTazas) {
            taza.style.filter = 'grayscale(100%)';
        }
    })
}

// Ejecutamos la funcion por primera vez
actualizarDatos();

/* 
 *Parte 2 - (Alumno 2) 
 *
 *Crear la ventana emergente con la información que se pide que muestre la misma: 3 puntos.
 *Programar correctamente la función constructora que permite crear la cafetera y los botones: agregar café y mostrar el % de café que queda en la cafetera: 3 puntos.
 *Por la claridad en el código, indentación del mismo y la inclusión de comentarios: 2 puntos.
 *Integración de las 2 partes con el Informe detallado, explicando la intervención de cada alumno en la resolución de la tarea: 2 puntos
 */