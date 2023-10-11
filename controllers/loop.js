let matriz = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const cuadros = document.getElementsByClassName("casilla");
let running = false; 

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

//se hace un evento al boton
const miBoton = document.getElementById("finTurnoBtn");
miBoton.addEventListener("click", async () => {
    if (!running) {
        running = true; //funca funtion
        while (running) {
            await ActualizarMatriz();
            await new Promise(resolve => setTimeout(resolve, 1000)); // Espera  mas o menos  0.1 segundo 
        }
    }
});


ActualizarMatriz();

