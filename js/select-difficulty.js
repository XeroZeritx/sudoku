// Guarda la dificultad fácil y abre el Sudoku.
document.getElementById("facil").addEventListener("click", () => {
    localStorage.setItem("dificultad", 30);
    window.location.href = "juego.html";
});

// Guarda la dificultad media y abre el Sudoku.
document.getElementById("media").addEventListener("click", () => {
    localStorage.setItem("dificultad", 40);
    window.location.href = "juego.html";
});

// Guarda la dificultad difícil y abre el Sudoku.
document.getElementById("dificil").addEventListener("click", () => {
    localStorage.setItem("dificultad", 50);
    window.location.href = "juego.html";
});