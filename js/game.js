// Number of mistakes made by the player
let errors = 0;
// Maximum number of mistakes allowed before the game ends
const max_errors = 3;

// Start a new game by resetting the errors and generating a new sudoku
function startGame(){
    errors = 0;
    generateSudoku();
    drawBoard();

    // Test the sudoku generation and visibility
    console.log("SOLUTION");
    console.table(sudoku);
    console.log("VISIBLE SUDOKU");
    console.table(visibleSudoku);
}

// Register a mistake made by the player and end the game after 3 mistakes
function registerError() {
    errors++;
    console.log("Errors:", errors);
    if (errors >= max_errors){
        alert("You have made " + max_errors + " mistakes. Game Over!");
    }
}

// Check if all cells of the visible Sudoku match the solution.
function checkVictory() {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            if (visibleSudoku[row][column] !== sudoku[row][column]) {
                return false;
            }
        }
    }
    return true;
}

// Get the "New Game" button from the HTML
const NewGame = document.getElementById("NewGame-Restart");
if (NewGame) {
    NewGame.addEventListener("click", startGame);
}

// Start a new game when the page finishes loading
window.onload = startGame;