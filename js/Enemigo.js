class Enemigo extends Personaje {


    constructor() {
        super();

        this.hitbox = document.createElement("div");
        this.hitbox.classList.add("enemigo");
        document.getElementById("contenedor").appendChild(this.hitbox);
        this.hitbox.style.top = Math.floor(Math.random() * (window.innerHeight - this.hitbox.offsetHeight)) + 'px';
        //Hace spawnear los enemigos en posiciones aleatorias en la pantalla.
    }

    status() {
        return this.hitbox.getBoundingClientRect();
    }
}