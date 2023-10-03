const jugador1 = 1 
const jugador2 = 2 
const casillas = document.documentById(".casilla");
let Matriz = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
 
  casillas.forEach(function(casilla) {
    casilla.addEventListener("click", function() {
     
      
        console.log("Se hizo clic en la casilla con ID: " + casilla.id);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  let modalJugador1 = document.getElementById("jugador1");
  modalJugador1.style.display = "block";
});


document.getElementById("GuardarNombre1").addEventListener("click", function() {
  var modalJugador1 = document.getElementById("jugador1");
  modalJugador1.style.display = "none";  // Oculta el modal del jugador 1

  var modalJugador2 = document.getElementById("jugador2");
  modalJugador2.style.display = "block";  // Muestra el modal del jugador 2
});
