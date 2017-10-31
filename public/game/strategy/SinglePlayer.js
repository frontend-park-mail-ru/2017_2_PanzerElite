const keyboardJS = require("keyboardjs");
import Player from "../models/Player";

export default class SinglePlayer {
    constructor() {
        //TODO create instance of players
        this.me = new Player("me"); // TODO write your original
        this.opponent = new Player("super bitch bot");
    }

    initKeyListeners(callback) {
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