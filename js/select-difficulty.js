// When user choose the difficulty (ez, mid or hard), the value set in the web
document.getElementById("easy-difficulty").addEventListener("click", () => {
    localStorage.setItem("difficulty", 30);
    window.location.href = "game.html";
});
document.getElementById("mid-difficulty").addEventListener("click", () => {
    localStorage.setItem("difficulty", 40);
    window.location.href = "game.html";
});
document.getElementById("hard-difficulty").addEventListener("click", () => {
    localStorage.setItem("difficulty", 50);
    window.location.href = "game.html";
});