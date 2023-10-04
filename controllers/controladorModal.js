document.addEventListener("DOMContentLoaded", function() {
    let modalJugador1 = document.getElementById("jugador1");
    modalJugador1.style.display = "block";
  });
  
  
  document.getElementById("jugador1deBTN").addEventListener("click", function() {
    var modalJugador1 = document.getElementById("jugador1");
    modalJugador1.style.display = "none";  // Oculta el modal del jugador 1
  
    var modalJugador2 = document.getElementById("jugador2");
    modalJugador2.style.display = "block";  // Muestra el modal del jugador 2
  });
  document.getElementById("jugador2deBTN").addEventListener("click", function() {
    var modalJugador2 = document.getElementById("jugador2");
    modalJugador2.style.display = "none";  // Oculta el modal del jugador 2
});



 





