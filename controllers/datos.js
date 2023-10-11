
    

// Jugador 1
const nombreInputJugador1 = document.getElementById("nombreDelJugador1unoInput");
const botonConfirmarJugador1 = document.getElementById("jugador1deBTN");
let nombreJugador1 = "";

botonConfirmarJugador1.addEventListener("click", function () {
    nombreJugador1 = nombreInputJugador1.value;
    console.log("El nombre del jugador 1 es: " + nombreJugador1);
});

// Jugador 2
const nombreInputJugador2 = document.getElementById("nombreDelJugador2Input");
const botonConfirmarJugador2 = document.getElementById("jugador2deBTN");
let nombreJugador2 = "";

botonConfirmarJugador2.addEventListener("click", function () {
    nombreJugador2 = nombreInputJugador2.value;
    console.log("El nombre del jugador 2 es: " + nombreJugador2);
});
