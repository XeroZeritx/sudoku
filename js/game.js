let errores = 0;
// Inicia una nueva partida, reiniciando los errores y generando un nuevo Sudoku.
function iniciarJuego(){
    errores = 0;
    generarSudoku();
    dibujarTablero();
}

// Aumenta el contador de errores y finaliza la partida si el jugador alcanza 3 errores.
function errorJugador(){
    errores++;
    console.log("Errores:", errores);
    if (errores >= 3){
        alert("Has perdido.");
    }
}

// Comprueba si todas las casillas del tablero coinciden con la solución del Sudoku.
function comprobarVictoria(){
    for(let fila = 0; fila < 9; fila++){
        for(let columna = 0; columna < 9; columna++){
            if(visibles[fila][columna] !== sudoku[fila][columna]){
                return false;
            }
        }
    }
    alert("¡¡Sudoku completado!!");
    return true;
}

// Inicia una nueva partida cuando el jugador pulsa el botón correspondiente.
const botonNueva = document.getElementById("nuevaPartida");
if(botonNueva){
    botonNueva.addEventListener("click", iniciarJuego);
}

// Inicia automáticamente una partida cuando la página termina de cargar.
window.onload = iniciarJuego;