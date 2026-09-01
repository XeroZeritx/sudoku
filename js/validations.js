// Go through the row to determine whether or not to put that number
function validateRow (board, row, number){
    for (let column = 0; column < 9; column++){
        if(board[row][column] === number){
            return false;
        }
    }
    return true;
}

// Go through the column to determine whether or not to put that number
function validateColumn (board, column, number) {
    for (let row = 0; row < 9; row++) {
        if (board[row][column] === number) {
            return false;
        }
    }
    return true;
}

// Go through the 3x3 box to determine whether or not to put that number
function validateBox (board, row, column, number) {
    // Find the starting row and column of the 3x3 box
    let startRow = Math.floor(row / 3) * 3;
    let startColumn = Math.floor(column / 3) * 3;

    // Go through the 3x3 box to check if the number may be there
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startColumn; j < startColumn + 3; j++) {
            if (board[i][j] === number) {
                return false;
            }
        }
    }
    return true;
}

// Final verification of the preceding functions
function isValidMove (board, row, column, number) {
    return (validateRow(board, row, number) && validateColumn(board, column, number) && validateBox(board, row, column, number));
}