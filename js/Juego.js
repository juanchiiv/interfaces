'use strict';

class Juego {

    constructor(player) {
        this.player = player;
        this.enemigos = []; // Hago un arreglo de enemigos, porque tengo mas de un enemigo
        this.monedas = [];
        this.endGame = false;
        this.game_loop = null;
    }

    /**
 * Chequear estado del player y de los enemigos
 */
    start() {
        this.gameLoop();
        this.generarEnemigosRandom();
        this.generarMonedasRandom();
    }

    gameLoop() {
        if (!this.endGame) {
            const rect1 = this.player.status();
            //Colision con enemigos
            for (let i = 0; i < this.enemigos.length - 1; i++) {
                // Obtener el estado del enemigo actual
                const rect2 = this.enemigos[i].status();
                // Verificar si hay colisión
                if (this.checkCollision(rect1, rect2)) {
                    this.stopGame();
                    return;
                }
            }

            //Colision con monedas
            for (let i = 0; i < this.monedas.length; i++) {
                // Obtener el estado de la moneda actual
                const rect2 = this.monedas[i].status();
                // Verificar si hay colisión
                if (this.checkCollision(rect1, rect2)) {
                    console.log('Agarre moneda');
                    this.remove(this.monedas[i])
                    this.limpiarDelArreglo(this.monedas[i])
                    //TODO agregar tiempo extra
                }
            }
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

    stopGame() {
        // let adversario = this.checkCollision();
        // if (adversario != null) {
        console.log('Game Over');
        //     this.endGame = true;
        //     this.remove();
        // }
    }

    /**
     * 
     * @param {Player} player 
     * @param {Array} arr 
     * @returns {Bool}
     */
    checkCollision(rect1, rect2) {
        if (!(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom)) {

            return true;
        }
        return false;
    }

    remove(e) {
        document.getElementById('contenedor').removeChild(e.hitbox);
    }

    limpiarDelArreglo(e) {
        //TODO como remover del arreglo un indice especifico
    }

    generarEnemigo() {
        let enemigo = new Enemigo();
        this.enemigos.push(enemigo);
        enemigo.hitbox.addEventListener('animationend', () => {
            this.remove(enemigo)
            //TODO Eliminar Enemigo del arreglo
        })
    }

    generarMoneda() {
        let moneda = new Moneda();
        this.monedas.push(moneda);
        moneda.hitbox.addEventListener('animationend', () => {
            this.remove(moneda)
            //TODO Eliminar Moneda del arreglo
        })
    }

    generarEnemigosRandom() {
        let tiempo_enemigo = Math.floor(Math.random() * 2000) + 200;
        this.generarEnemigo();
        if (this.endGame == false) {
            setTimeout(this.generarEnemigosRandom.bind(this), tiempo_enemigo);
        }
    }

    generarMonedasRandom() {
        let tiempo_moneda = Math.floor(Math.random() * 4000) + 400;
        this.generarMoneda();
        if (this.endGame == false) {
            setTimeout(this.generarMonedasRandom.bind(this), tiempo_moneda);
        }
    }

}