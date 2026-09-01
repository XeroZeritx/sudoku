// Contenedor del HTML donde JavaScript dibuja las 81 casillas del Sudoku.
const Board = document.getElementById("board");
function BoardDrawing () {
    Board.innerHTML = "";
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            // Bordes del Sudoku
            if ((column + 1) % 3 === 0 && column !== 8) {
                cell.style.borderRight = "3px solid black";
            }
            if ((row + 1) % 3 === 0 && row !== 8) {
                cell.style.borderBottom = "3px solid black";
            }
            // Guardamos la posición
            cell.dataset.row = row;
            cell.dataset.column = column;
            // Mostrar número
            if (VisibleNumbers[row][column] !== 0) {
                cell.textContent = VisibleNumbers[row][column];
                cell.classList.add("fixed");
            }
            // Seleccionar solo CellBoxs vacías
            if (VisibleNumbers[row][column] === 0) {
                cell.addEventListener("click", () => {
                    SelectingCell(cell);
                });
            }
            Board.appendChild(cell);
        }
    }
}

// Permite seleccionar una cell del Sudoku, quitando la selección anterior y resaltando la nueva
function SelectingCell (cell) {
    if (CellSelected) {
        CellSelected.classList.remove("Selected");
    }
    CellSelected = cell;
    cell.classList.add("Selected");
}

// Detecta cuando el jugador pulsa un número, comprueba si es correcto y actualiza el tablero o cuenta un error
document.addEventListener("keydown", (event) =>{
    if (CellSelected == null) return;
    const number = parseInt(event.key);
    if (isNaN(number)) return;
    const row = Number(CellSelected.dataset.row);
    const column = Number(CellSelected.dataset.column);
    // ¿Es el número correcto?
    if (number === sudoku[row][column]) {
        VisibleNumbers[row][column] = number;
        CellSelected.textContent = number;
        CellSelected.classList.remove("Selected");
        CellSelected.classList.add("fixed");
        CellSelected = null;
    } else {
        CellSelected.classList.remove("Selected");
        errors++;
        if (errors === 3) {
            alert("You have made 3 mistakes. Game Over!");
        }
    }
});

// Comprueba si el jugador ha completado correctamente todo el Sudoku
function VictoryCheck () {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            if (VisibleNumbers[row][column] !== sudoku[row][column]) {
                return false;
            }
        }
    }
    return true;
}

BoardDrawing();