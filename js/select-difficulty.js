// Guarda la dificultad fácil y abre el Sudoku.
const botonFacil = document.getElementById("facil");
if (botonFacil) {
    botonFacil.addEventListener("click", () => {
        localStorage.setItem("dificultad", 30);
        window.location.href = "juego.html";
    });
}

// Guarda la dificultad media y abre el Sudoku.
const botonMedia = document.getElementById("media");
if (botonMedia) {
    botonMedia.addEventListener("click", () => {
        localStorage.setItem("dificultad", 40);
        window.location.href = "juego.html";
    });
}

// Guarda la dificultad difícil y abre el Sudoku.
const botonDificil = document.getElementById("dificil");
if (botonDificil) {
    botonDificil.addEventListener("click", () => {
        localStorage.setItem("dificultad", 50);
        window.location.href = "juego.html";
    });
}