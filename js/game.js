// Number of mistakes made by the player
let errors = 0;

// Maximum number of mistakes allowed before the game ends
const max_errors = 3;

// Game over modal and buttons shown upon losing
const gameOverModal = document.getElementById("game-over-modal");
const retryButton = document.getElementById("retry-button");
const newGameButtonOptions = document.getElementById("new-game-button_options");
const newGameButtonModal = document.getElementById("new-game-button_modal");

// 
if (retryButton) {
    retryButton.addEventListener("click", retryGame);
}
if (newGameButtonOptions) {
    newGameButtonOptions.addEventListener("click", startGame);
}
if (newGameButtonModal) {
    newGameButtonModal.addEventListener("click", startGame);
    console.log("New Game button in modal clicked");
}

// Restart the current sudoku without generating a new one
function retryGame() {
    errors = 0;
    gameOver = false;
    visibleSudoku = initialSudoku.map(row => [...row]);
    gameOverModal.style.display = "none";
    drawBoard();
}

// Start a new game by resetting the errors and generating a new sudoku
function startGame(){
    errors = 0;
    generateSudoku();
    drawBoard();
    gameOver = false;
    gameOverModal.style.display = "none"; 

    // Test the sudoku generation and visibility
    console.log("SOLUTION");
    console.table(sudoku);
    console.log("VISIBLE SUDOKU");
    console.table(visibleSudoku);
}

function showGameOverModal() {
    gameOverModal.style.display = "flex";
}

// Register a mistake made by the player and end the game after 3 mistakes
function registerError() {
    errors++;
    console.log("Errors:", errors);
    if (errors >= max_errors) {
        gameOver = true;
        showGameOverModal();
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

// Start a new game when the page finishes loading
window.onload = startGame;