// Obtener referencias a elementos del DOM
const contadorTurno = document.getElementById("contadorTurno");
const finTurnoBtn = document.getElementById("finTurnoBtn");

// Inicializar el contador de turno en 0
let turno = 0;

// Función para actualizar y mostrar el contador de turno
function actualizarContadorTurno() {
    contadorTurno.textContent = turno;
}

// Evento para incrementar el contador de turno cuando se presiona el botón "Fin de Turno"
finTurnoBtn.addEventListener("click", function() {
    turno++;
    actualizarContadorTurno();
});
module.exports = { turno };