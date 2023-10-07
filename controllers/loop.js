let matriz = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const cuadros = document.getElementsByClassName("casilla");
let running = false; // Inicialmente, la función no está en ejecución

async function ActualizarMatriz() {
    for (let i = 0; i < 8; i++) {
        if (cuadros[i].innerHTML === "") {
            matriz[i] = 0;
        } else if (cuadros[i].innerHTML === "X") {
            matriz[i] = 1;
        } else if (cuadros[i].innerHTML === "O") {
            matriz[i] = 2;
        }
    }
    console.log(matriz);
}

// Agregar un event listener al botón con ID "finTurnoBtn" para iniciar la función
const miBoton = document.getElementById("finTurnoBtn");
miBoton.addEventListener("click", async () => {
    if (!running) {
        running = true; // Iniciar la función
        while (running) {
            await ActualizarMatriz();
            await new Promise(resolve => setTimeout(resolve, 100)); // Espera 0.1 segundo
        }
    }
});

// Iniciar la función por primera vez
ActualizarMatriz();
module.exports = "loop";