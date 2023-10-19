class Moneda extends Personaje {


    constructor() {
        super();

        this.hitbox = document.createElement("div");
        this.hitbox.classList.add("moneda");
        document.getElementById("contenedor").appendChild(this.hitbox);
        this.hitbox.style.top = Math.floor(Math.random() * (window.innerHeight - this.hitbox.offsetHeight)) + 'px';
    }

    status() {
        return this.hitbox.getBoundingClientRect();
    }
}