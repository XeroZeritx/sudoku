let errors = 0;
// Inicia una nueva partida, reiniciando los errors y generando un nuevo Sudoku.
function StartGame(){
    errors = 0;
    GenerateSudoku();
    BoardDrawing();
}

// Aumenta el contador de errors y finaliza la partida si el jugador alcanza 3 errors.
function ErrorPlayer () {
    errors++;
    console.log("Errors:", errors);
    if (errors >= 3){
        alert("You have made 3 mistakes. Game Over!");
    }
}

// Comprueba si todas las casillas del tablero coinciden con la solución del Sudoku.
function VictoryCheck () {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            if (VisibleNumbers[row][column] !== sudoku[row][column]) {
                return false;
            }
        }
    }
    alert("¡¡Sudoku Completed!!");
    return true;
}

// Inicia una nueva partida cuando el jugador pulsa el botón correspondiente.
const NewGame = document.getElementById("NewGame-Restart");
if (NewGame) {
    NewGame.addEventListener("click", StartGame);
}

// Inicia automáticamente una partida cuando la página termina de cargar.
window.onload = StartGame;