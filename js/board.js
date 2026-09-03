// Container where js draws the 81 sudoku cells
const board = document.getElementById("board");

// Draw the 81 cells of the sudoku board.
function drawBoard() {
    board.innerHTML = "";
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Add borders to separate the 3x3 sudoku boxes
            if ((column + 1) % 3 === 0 && column !== 8) {
                cell.style.borderRight = "3px solid black";
            }
            if ((row + 1) % 3 === 0 && row !== 8) {
                cell.style.borderBottom = "3px solid black";
            }

            // Store the cell position
            cell.dataset.row = row;
            cell.dataset.column = column;

            // Show the number if the cell is not hidden
            if (visibleSudoku[row][column] !== 0) {
                cell.textContent = visibleSudoku[row][column];
                cell.classList.add("fixed");
            }

            // Allow the player to select only empty cells
            if (visibleSudoku[row][column] === 0) {
                cell.addEventListener("click", () => {
                    selectCell(cell);
                });
            }
            board.appendChild(cell);
        }
    }
}

// Select a sudoku cell and remove the previous selection
function selectCell(cell) {
    if (cellSelected) {
        cellSelected.classList.remove("selected");
    }
    cellSelected = cell;
    cell.classList.add("selected");
}

// Detect when the player presses a number key
document.addEventListener("keydown", (event) => {

    // Do nothing if the game has ended
    if (gameOver) return;

    // Do nothing if no cell is selected
    if (cellSelected === null) return;
    const number = Number(event.key);
    
    // Only allow numbers from 1 to 9
    if (number < 1 || number > 9) return;
    const row = Number(cellSelected.dataset.row);
    const column = Number(cellSelected.dataset.column);

    // Check if the player's number is correct
    if (number === sudoku[row][column]) {
        visibleSudoku[row][column] = number;
        cellSelected.textContent = number;
        cellSelected.classList.remove("selected");
        cellSelected.classList.add("fixed");
        cellSelected = null;
        // Check if the player has completed the sudoku.
        if (checkVictory()) {
            alert("Sudoku Completed!");
        }
    } else {
        // Remove the selection after an incorrect answer
        cellSelected.classList.remove("selected");
        cellSelected = null;

        // Register the player's mistake.
        registerError();
    }
}); 