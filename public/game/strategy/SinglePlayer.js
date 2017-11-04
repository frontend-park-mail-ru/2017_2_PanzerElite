const keyboardJS = require("keyboardjs");
import Player from "../models/Player";

export default class SinglePlayer {
    constructor() {
        //TODO create instance of players
        this.me = new Player("me", [50, 50]); // TODO write your original
        this.opponent = new Player("super bitch bot", [-10, -10]);

        this._gameLoop = this._gameLoop.bind(this);
        this._actionStates = {};
    }

    destroy() {
        this._stopLoop();
    }

    getPlayersCoors() {
        return {
            me: this.me.coords,
            opponent: this.opponent.coords
        };
    }

    startListenGameLoop(callback) {
        this.sceneInstructionCallback = callback;
        //PanzerElite team is js-makaki, except ментор
        this._startLoop();
        this._initKeyListeners((newState) => {
            Object.assign(this._actionStates, newState);
        });
    }

    _startLoop() {
        //window.requestIdleCallback(this._gameLoop);

        window.requestAnimationFrame(this._gameLoop);
        //this.gameLoopId = setInterval(this._gameLoop, 1);
    }

    _stopLoop() {
        clearInterval(this.gameLoopId);
    }

    //Основной цикл, который шлет изменения
    _gameLoop() {

        Object.keys(this._actionStates).forEach(key => {
            this.me[key] = this._actionStates[key];
        });
        this.me.update();
        this.sceneInstructionCallback( //TODO передается объект, в котором лежат указания для сцены по изменениям
            this.me.getInstrustions()
        );
        //window.requestIdleCallback(this._gameLoop);
        window.requestAnimationFrame(this._gameLoop);

    }

    _initKeyListeners(callback) {
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
        }, function(e) {
            callback({ forward: false });
        });
        keyboardJS.bind("s", function(e) {
            callback({ backward: true });
        }, function(e) {
            callback({ backward: false });
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
            // callback({ changeCamera: true });
        }, function(e) {
            callback({ changeCamera: true });
        });
    }
    randomMovemant(callback) {
        callback({ left: true, forward: true });
    }
}