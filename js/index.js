//Buscar el boton start con el id y muestra la siguiente pagina de seleccion de la dificultad del juego
const button_start = document.getElementById("button-start");
if (button_start) {
    button_start.addEventListener("click", () => {
        window.location.href = "difficulty.html";
    });
}