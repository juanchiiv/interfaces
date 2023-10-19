"use strict"

let player = new Player();
let game = null;

// Variables para los elementos del menú
let menu = document.getElementById("menu");
let playButton = document.getElementById("playButton");
let howToPlayButton = document.getElementById("howToPlayButton");
let music = document.getElementById('musicButton');

let contenedor = document.getElementById('contenedor');


function playMusic() {
    let audio = new Audio('sounds/music.mp3');
    audio.volume = 0.1;
    audio.play();
}
playButton.addEventListener('click', playMusic);

// Manejo del botón de Jugar
playButton.addEventListener("click", () => {
    menu.style.display = "none";
    contenedor.style.display = "block";
    game = new Juego(player);
    game.start();
    // Aquí puedes iniciar tu juego
});

// Manejo del botón de Cómo Jugar
howToPlayButton.addEventListener("click", () => {
    menu.style.display = "none";
    howToPlay.style.display = "block";
    // Aquí puedes mostrar las instrucciones del juego
});

document.addEventListener('keydown', (e) => {
    let tecla = e.key;
        switch (tecla) {
            case 'ArrowUp':
                player.mover(-10);
                break;
            case 'ArrowDown':
                player.mover(+10);
                break;

            case 'Z':
                player.shoot();
                break;

            default:
                break;
        }
});