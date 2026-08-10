// Contenedor del HTML donde JavaScript dibuja las 81 casillas del Sudoku.
const Tablero = document.getElementById("tablero");
function dibujarTablero(){
    Tablero.innerHTML = "";
    for(let fila = 0; fila < 9; fila++){
        for(let columna = 0; columna < 9; columna++){
            const casilla = document.createElement("div");
            casilla.classList.add("casilla");
            // Bordes del Sudoku
            if((columna + 1) % 3 === 0 && columna !== 8){
                casilla.style.borderRight = "3px solid black";
            }
            if((fila + 1) % 3 === 0 && fila !== 8){
                casilla.style.borderBottom = "3px solid black";
            }
            // Guardamos la posición
            casilla.dataset.fila = fila;
            casilla.dataset.columna = columna;
            // Mostrar número
            if(visibles[fila][columna] !== 0){
                casilla.textContent = visibles[fila][columna];
                casilla.classList.add("fija");
            }
            // Seleccionar solo casillas vacías
            if(visibles[fila][columna] === 0){
                casilla.addEventListener("click",()=>{
                    seleccionarCasilla(casilla);
                });
            }
            Tablero.appendChild(casilla);
        }
    }
}

// Permite seleccionar una casilla del Sudoku, quitando la selección anterior y resaltando la nueva
function seleccionarCasilla(casilla){
    if(casillaSeleccionada ){
        casillaSeleccionada.classList.remove("seleccionada");
    }
    casillaSeleccionada = casilla;
    casilla.classList.add("seleccionada");
}

// Detecta cuando el jugador pulsa un número, comprueba si es correcto y actualiza el tablero o cuenta un error
document.addEventListener("keydown",(evento)=>{
    if(casillaSeleccionada == null) return;
    const numero = parseInt(evento.key);
    if(isNaN(numero)) return;
    const fila = Number(casillaSeleccionada.dataset.fila);
    const columna = Number(casillaSeleccionada.dataset.columna);
    // ¿Es el número correcto?
    if(numero === sudoku[fila][columna]){
        visibles[fila][columna] = numero;
        casillaSeleccionada.textContent = numero;
        casillaSeleccionada.classList.remove("seleccionada");
        casillaSeleccionada.classList.add("fija");
        casillaSeleccionada = null;
    }
    else{
        casillaSeleccionada.classList.remove("seleccionada");
        errores++;
        if(errores == 3){
            alert("Has perdido");
        }
    }
});

// Comprueba si el jugador ha completado correctamente todo el Sudoku
function comprobarVictoria(){
    for(let fila = 0; fila < 9; fila++){
        for(let columna = 0; columna < 9; columna++){
            if(visibles[fila][columna] !== sudoku[fila][columna]){
                return false;
            }
        }
    }
    return true;
}

dibujarTablero();