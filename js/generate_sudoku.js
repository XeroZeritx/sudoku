// Aleatoriza los numeros del 1 al 9 para guardar en el tablero de manera aleatoria y no siempre en el mismo orden
function AleatorizarNumeros () {
    const numeros = [1,2,3,4,5,6,7,8,9];
    for(let i = numeros.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    return numeros;
}

// Busca una casilla vacia para llenarla obtiendo su posicion de fila y columna
function BuscarLaCasillaVacia (tablero) {
    for(let fila = 0; fila < 9; fila++){
        for(let columna = 0; columna < 9; columna++){
            if(tablero[fila][columna] === 0){
                return [fila,columna];
            }
        }
    }
    return null;
}

// Cuando hay una casilla vacia, se intenta llenar con el array de numeros aleatorios de AleatorizarNumeros() y se valida si es posible guardarlo, si no es posible se vuelve a intentar con otro numero del mismo array hasta que se llene el sudoku
function resolverSudoku(tablero){
    let posicion = BuscarLaCasillaVacia(tablero);

    // Si no hay casilla vacia -> Soduko Completo
    if(posicion === null){
        return true;
    }

    // Obtenemos la fila y columna de la casilla vacia, junto con el array de los numeros aleatorios
    let fila = posicion[0];
    let columna = posicion[1];
    let numeros = AleatorizarNumeros();

    // Repasamos cada numero hasta encontrar uno que cumpla los requisitos
    for (let numero of numeros){
    if (GuardadoValido (tablero, fila, columna, numero) === true){
        tablero[fila][columna] = numero;
        if(resolverSudoku(tablero)){
            return true;
        }
        tablero[fila][columna] = 0;
    }}
    return false;
}

// Reobtienes todo el soduko otra vez para que no halla conflictos con el soduko que se muestra al jugador 
function copiarSudoku(){
    visibles = sudoku.map(fila => [...fila]);
}

// Dependendido de la dificultad, se ocultan los numeros del soduko que se le mostrara al jugador
function ocultarNumeros(cantidad){
    while(cantidad > 0){
        let fila = Math.floor(Math.random()*9);
        let columna = Math.floor(Math.random()*9);
        if (visibles[fila][columna] !== 0){
            visibles[fila][columna] = 0;
            cantidad--;
        }
    }
}

// Ejecuta todos las funciones que ya tenemos y genera el soduko completo, copia el soduko y oculta los numeros dependiendo de la dificultad
function generarSudoku(){
    sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));
    resolverSudoku(sudoku);
    copiarSudoku();
    ocultarNumeros(dificultad);
}

generarSudoku();
console.log("SOLUCIÓN");
console.table(sudoku);
console.log("TABLERO");
console.table(visibles);