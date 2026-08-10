//Buscar el boton start con el id y muestra la siguiente pagina de seleccion de la dificultad del juego
const botonStart = document.getElementById("Button-Start");
botonStart.addEventListener("click",()=>{
    window.location.href = "select-difficulty.html";
});