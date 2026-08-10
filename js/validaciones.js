// Permite validar si un numero se puede guardar dependiendo de la fila revisando cada columna 0-8
function ValidacionFilas (tablero, fila, numero){
    for (let columna = 0; columna < 9; columna++){
        if(tablero[fila][columna] === numero){
            return false;
        }
    }
    return true;
}

// Permite validad si un numero se puede guardar dependiendo de la columna revisando cada fila 0-8
function ValidacionColumnas (tablero, columna, numero){
    for (let fila = 0; fila < 9; fila++){
        if(tablero[fila][columna] === numero){
            return false;
        }
    }
    return true;
}

// Permite validar si un numero se puede guardar dependiendo del 3x3 donde se encuentra la casilla
function ValidacionCuadroPeq(tablero, fila, columna, numero){
    // Hallamos desde que fila y columna inicia el 3x3
    let inicioFila = Math.floor(fila / 3) * 3;
    let inicioColumna = Math.floor(columna / 3) * 3;

    // Permite recorrer las filas y colummnas correspondientes
    for (let i = inicioFila; i < inicioFila + 3; i++){
        for (let j = inicioColumna; j < inicioColumna + 3; j++){
            if(tablero[i][j] === numero){
                return false;
            }
        }
    }
    return true;
}

// Parte final donde se comprueba si se puede poner ese numero o no
function GuardadoValido(tablero, fila, columna, numero){
    return (ValidacionFilas(tablero, fila, numero) && ValidacionColumnas(tablero, columna, numero) && ValidacionCuadroPeq(tablero, fila, columna, numero));
}