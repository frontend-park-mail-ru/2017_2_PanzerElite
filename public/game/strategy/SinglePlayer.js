const keyboardJS = require("keyboardjs");
import Player from "../models/Player";

export default class SinglePlayer {
    constructor() {
        this._gameLoop = this._gameLoop.bind(this);
        this.actionStates = {};
        this.me = new Player("me", [50, 50], this.actionStates); // TODO write your original
        this.opponent = new Player("super bitch bot", [-10, -10], null);
        window.movingSound = new Audio("./sounds/move.mp3");
        window.stayingSound = new Audio("./sounds/move.mp3");
        window.stayingSound.loop = true;
        window.stayingSound.volume = 0.2;
        window.movingSound.loop = true;
        window.movingSound.volume = 0.2;
        window.movingSound.play();
        setTimeout(() => { window.stayingSound.play(); }, 1000);
        window.reloadSound = new Audio("./sounds/reload.mp3")
        window.stopGame = this.stop.bind(this);
    }

    getPlayersCoors() {
        return {
            me: this.me.coords,
            opponent: this.opponent.coords
        };
    }

    startListenGameLoop(callback) {
        this.sceneInstructionCallback = callback;
        this._startLoop();
        this._initKeyListeners((newState) => {
            Object.assign(this.actionStates, newState);
        });
    }

    _startLoop() {
        this.requestId = window.requestAnimationFrame(this._gameLoop);
    }
    stop() {
        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = undefined;
        }
    }

    //Основной цикл, который шлет изменения
    _gameLoop() {

        // Object.keys(this._actionStates).forEach(key => {
        //     this.me[key] = this._actionStates[key];
        // });
        this.me.update();
        this.sceneInstructionCallback( //TODO передается объект, в котором лежат указания для сцены по изменениям
            this.me.getInstrustions()
        );
        window.requestAnimationFrame(this._gameLoop);

    }

    _initKeyListeners(callback) {
        callback({ enemyNick: "NoEnemy" });
        keyboardJS.bind("m", function(e) {
            callback({ turretRight: true });
        }, function(e) {
            callback({ turretRight: false });
        });
        keyboardJS.bind("n", function(e) {
            callback({ turretLeft: true });
        }, function(e) {
            callback({ turretLeft: false });
        });
        keyboardJS.bind("w", function(e) {
            callback({ forward: true });
            window.movingSound.volume = 0.65;
            window.stayingSound.volume = 0.65;

        }, function(e) {
            callback({ forward: false });
            window.movingSound.volume = 0.2;
            window.stayingSound.volume = 0.2;

        });
        keyboardJS.bind("s", function(e) {
            callback({ backward: true });
            window.movingSound.volume = 0.65;
            window.stayingSound.volume = 0.65;

        }, function(e) {
            callback({ backward: false });
            window.movingSound.volume = 0.2;
            window.stayingSound.volume = 0.2;
        });
        keyboardJS.bind("d", function(e) {
            callback({ right: true });

        }, function(e) {
            callback({ right: false });
        });
        keyboardJS.bind("a", function(e) {
            callback({ left: true });

        }, function(e) {
            callback({ left: false });
        });
        keyboardJS.bind("v", function(e) {
            // callback({ changeCamera: false });
        }, function(e) {
            callback({ changeCamera: true });
        });
        keyboardJS.bind("space", function(e) {
            // callback({ changeCamera: false });
        }, function(e) {
            callback({ fire: true });
            setTimeout(() => { window.reloadSound.play(); }, 2000);

        });
    }
    randomMovemant(callback) {
        callback({ left: true, forward: true });
    }
}