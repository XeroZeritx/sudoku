// Randomize the numbers from 1 to 9
function randomizeNumbers() {
    const numbers = [1,2,3,4,5,6,7,8,9];
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

// Find the first empty cell in the sudoku
function findEmptyCell(board) {
    for (let row = 0; row < 9; row++) {
        for(let column = 0; column < 9; column++) {
            if (board[row][column] === 0) {
                return [row, column];
            }
        }
    }
    return null;
}

// Solve the sudoku using backtracking
function solveSudoku(board) {
    const position = findEmptyCell(board);

    // If there are no empty cells, the sudoku is complete
    if (position === null) {
        return true;
    }

    const row = position[0];
    const column = position[1];
    const numbers = randomizeNumbers();

    // Try each number until a valid solution is found
    for (const number of numbers) {
        if (isValidMove(board, row, column, number) === true) {
            board[row][column] = number;
            // Continue solving the remaining cells
            if (solveSudoku(board)) {
                return true;
            }
            // Backtrack if the current number leads to a dead end
            board[row][column] = 0;
        }
    }
    return false;
}

// Create a copy of the complete sudoku for the player
function copySudoku() {
    visibleSudoku = sudoku.map(row => [...row]);
}

// Hide a specific amount of numbers from the visible sudoku
function hideNumbers(amount) {
    while (amount > 0) {
        const row = Math.floor(Math.random() * 9);
        const column = Math.floor(Math.random() * 9);
        if (visibleSudoku[row][column] !== 0) {
            visibleSudoku[row][column] = 0;
            amount--;
        }
    }
}

// Generate a complete sudoku and hide numbers according to the selected difficulty
function generateSudoku () {
    sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));
    solveSudoku(sudoku);
    copySudoku();
    hideNumbers(difficultySelected);
}

generateSudoku();