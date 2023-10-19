class Player extends Personaje {

    constructor() {
        super();
        this.personaje = document.getElementById("personaje");
        this.personaje.classList.add("volar");
        this.personaje.classList.add("mover");
    }

    status() {
        return this.personaje.getBoundingClientRect();
    }

    mover(movimiento) {
        const posicionActual = parseInt(getComputedStyle(this.personaje).top); // Obtengo la posición actual en píxeles      
        const nuevaPos = posicionActual + movimiento;
        const limiteSuperior = 0; // Pongo que el limite superior sea el borde superior de la pantalla
        const limiteInferior = window.innerHeight - this.personaje.offsetHeight; // Pongo que el limite inferior sea el de la pantalla menos el del personaje
        if (movimiento) {
            if (nuevaPos >= limiteSuperior && nuevaPos <= limiteInferior) {
                this.personaje.style.top = (posicionActual + movimiento) + 'px'; // Muevo el elemento hacia arriba o abajo según el valor de movimiento
            }
            else if (nuevaPosicion < limiteSuperior) {
                this.personaje.style.top = limiteSuperior + 'px';
            } else if (nuevaPosicion > limiteInferior) {
                this.personaje.style.top = limiteInferior + 'px';
            }
        }
    }

    clean() {
        this.personaje.classList.remove("volar");
        this.personaje.classList.remove("mover");
        this.personaje.removeEventListener("animationend", () => { });
    }
}