// Sudoku completo generado
let sudoku = [];

// Sudoku con los números ocultos -> Se le mostrará al jugador
let visibles = [];

// Crea 9 filas rellenada con ceros 
let jugador = [];
for (let i = 0; i < 9; i++) {
    jugador.push(Array(9).fill(0));
}

// No hay ninguna elemento seleccionado por el jugador
let casillaSeleccionada = null;

// Dificultad del juego -> Cantidad de casillas que se esconderan del jugador
let dificultad = localStorage.getItem("dificultad") || 30;

// Reinicia las matrices de sudoku, jugador y visibles
function reiniciarMatrices() {

    sudoku = [];
    jugador = [];
    visibles = [];

    // Se repasa la fila "n" en todas las columnas y se rellena con ceros
    for (let fila = 0; fila < 9; fila++) {
        sudoku[fila] = [];
        jugador[fila] = [];
        // Creamos las 9 columnas
        for (let columna = 0; columna < 9; columna++) {
            sudoku[fila][columna] = 0;
            jugador[fila][columna] = 0;
        }
    }

}