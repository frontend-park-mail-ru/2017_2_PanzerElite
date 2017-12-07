const keyboardJS = require("keyboardjs");
import Player from "../models/Player";

export default class MultiPlayer {
    constructor() {
        this._gameLoop = this._gameLoop.bind(this);
        this.actionStates = {};
        this.allowFire = true;
        // this.me = new Player("me", [50, 50], this.actionStates); // TODO write your original
        // this.opponent = new Player("super bitch bot", [-10, -10], null);
    }

    // getPlayersCoors() {
    // 	return {
    // 		me: this.me.coords,
    // 		opponent: this.opponent.coords
    // 	};
    // }

    startListenGameLoop(callback) {
        this.sceneInstructionCallback = callback;
        this._startLoop();
        this._initKeyListeners((newState) => {
            Object.assign(this.actionStates, newState);
        });
    }

    _startLoop() {
        window.requestAnimationFrame(this._gameLoop);
    }

    //Основной цикл, который шлет изменения
    _gameLoop() {

        // Object.keys(this._actionStates).forEach(key => {
        //     this.me[key] = this._actionStates[key];
        // });
        // this.me.update();
        this.sceneInstructionCallback( //TODO передается объект, в котором лежат указания для сцены по изменениям
            this.actionStates
        );
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
            // callback({ changeCamera: false });
        }, function(e) {
            callback({ changeCamera: true });
        });
        keyboardJS.bind("space", function(e) {
            // callback({ changeCamera: false });
        }, function(e) {
            if (this.allowFire) {
                callback({ fire: true });
                this.allowFire = false;
                setTimeout(() => { this.allowFire = true; }, 4000);
            }
        }.bind(this));
    }
    randomMovemant(callback) {
        callback({ left: true, forward: true });
    }
}