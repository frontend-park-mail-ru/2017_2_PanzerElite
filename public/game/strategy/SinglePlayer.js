var keyboardJS = require('keyboardjs');

export default class SinglePlayer {
    constructor(tank) {
        keyboardJS.bind('m', function(e) {
            tank.turretRight = true;
        }, function(e) {
            tank.turretRight = false;
        });
        keyboardJS.bind('n', function(e) {
            tank.turretLeft = true;
        }, function(e) {
            tank.turretLeft = false;
        });
        keyboardJS.bind('w', function(e) {
            tank.forward = true;
        }, function(e) {
            tank.forward = false;
        });
        keyboardJS.bind('s', function(e) {
            tank.backward = true;
        }, function(e) {
            tank.backward = false;
        });
        keyboardJS.bind('d', function(e) {
            tank.right = true;
        }, function(e) {
            tank.right = false;
        });
        keyboardJS.bind('a', function(e) {
            tank.left = true;
        }, function(e) {
            tank.left = false;
        });
    }

}