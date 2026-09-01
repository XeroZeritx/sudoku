// Aleatoriza los numeros del 1 al 9 para guardar en el tablero de manera aleatoria y no siempre en el mismo orden
function RandomizeNumbers () {
    const numbers = [1,2,3,4,5,6,7,8,9];
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

// Busca una casilla vacia para llenarla obtiendo su posicion de fila y columna
function CellEmptySearch (board) {
    for (let row = 0; row < 9; row++) {
        for(let column = 0; column < 9; column++) {
            if (board[row][column] === 0) {
                return [row, column];
            }
        }
    }
    return null;
}

// Cuando hay una casilla vacia, se intenta llenar con el array de numeros aleatorios de RandomizeNumbers() y se valida si es posible guardarlo, si no es posible se vuelve a intentar con otro numero del mismo array hasta que se llene el sudoku
function SudokuSolver (board) {
    let position = CellEmptySearch(board);

    // Si no hay casilla vacia -> Soduko Completo
    if (position === null) {
        return true;
    }

    // Obtenemos la fila y columna de la casilla vacia, junto con el array de los numeros aleatorios
    let row = position[0];
    let column = position[1];
    let numbers = RandomizeNumbers();

    // Repasamos cada numero hasta encontrar uno que cumpla los requisitos
    for (let number of numbers) {
    if (ValidSave (board, row, column, number) === true) {
        board[row][column] = number;
        if (SudokuSolver(board)) {
            return true;
        }
        board[row][column] = 0;
    }}
    return false;
}

// Reobtienes todo el soduko otra vez para que no halla conflictos con el soduko que se muestra al jugador 
function SudokuCopyBackup () {
    VisibleNumbers = sudoku.map(row => [...row]);
}

// Dependendido de la dificultad, se ocultan los numeros del soduko que se le mostrara al jugador
function HideNumbers (amount) {
    while (amount > 0){
        let row = Math.floor(Math.random()*9);
        let column = Math.floor(Math.random()*9);
        if (VisibleNumbers[row][column] !== 0) {
            VisibleNumbers[row][column] = 0;
            amount--;
        }
    }
}

// Ejecuta todos las funciones que ya tenemos y genera el soduko completo, copia el soduko y oculta los numeros dependiendo de la dificultad
function GenerateSudoku () {
    sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));
    SudokuSolver(sudoku);
    SudokuCopyBackup();
    HideNumbers(difficulty);
}

GenerateSudoku();
console.log("SOLUCIÓN");
console.table(sudoku);
console.log("TABLERO");
console.table(VisibleNumbers);