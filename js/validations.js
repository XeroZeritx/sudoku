// Check if the number already exists in the row.
function validateRow(board, row, number) {
    for (let column = 0; column < 9; column++) {
        if (board[row][column] === number) {
            return false;
        }
    }
    return true;
}

// Check if the number already exists in the column.
function validateColumn(board, column, number) {
    for (let row = 0; row < 9; row++) {
        if (board[row][column] === number) {
            return false;
        }
    }
    return true;
}

// Check if the number already exists in the 3x3 box.
function validateBox(board, row, column, number) {
    // Find the starting row and column of the 3x3 box
    let startRow = Math.floor(row / 3) * 3;
    let startColumn = Math.floor(column / 3) * 3;
    for (let boxRow = startRow; boxRow < startRow + 3; boxRow++) {
        for (let boxColumn = startColumn; boxColumn < startColumn + 3; boxColumn++) {
            if (board[boxRow][boxColumn] === number) {
                return false;
            }
        }
    }
    return true;
}

// Check if a number can be placed in the selected cell.
function isValidMove (board, row, column, number) {
    return (
    validateRow(board, row, number) &&
    validateColumn(board, column, number) &&
    validateBox(board, row, column, number)
    );
}