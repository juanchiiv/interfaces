"use strict"

let player = new Player();
let game = null;
let audio = new Audio('sounds/music.mp3');
audio.volume = 0.1;

// Variables para los elementos del menú
let menu = document.getElementById("menu");
let playButton = document.getElementById("playButton");
let howToPlayButton = document.getElementById("howToPlayButton");
let atrasButton = document.getElementById("atras");
let music = document.getElementById('musicButton');

let contenedor = document.getElementById('contenedor');


function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

music.addEventListener('click', () => {
    (audio.paused) ? playMusic() : pauseMusic(); // Si la musica está pausada, con el click en el boton se activa, y viceversa
})

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
    atrasButton.addEventListener("click", () => {
        location.reload(); // Recarga la página para volver al menu
    });
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