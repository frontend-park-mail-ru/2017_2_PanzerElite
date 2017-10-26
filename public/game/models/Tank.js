var THREE = require('three');
export default class Tank {
    constructor(dae) {
        //some magic for turn
        this.dae = new THREE.Object3D();
        this.parent = new THREE.Object3D();
        this.parent.position.x = -1;
        this.parent.position.z = +4.4;
        this.dae.add(this.parent);
        this.original = null;
        this.angle = Math.PI - Math.PI;
        ////new motion
        this.forward = false;
        this.backward = false;
        this.right = false;
        this.left = false;
        //turret
        this.turret = null;
        this.turretRight = false;
        this.turretLeft = false;
    }
    moveForward() {
        this.dae.position.y += 0.3 * Math.cos(this.angle);
        this.dae.position.x += 0.3 * Math.sin(this.angle);
        this.turret.dae.position.y += 0.3 * Math.cos(this.angle);
        this.turret.dae.position.x += 0.3 * Math.sin(this.angle);
    }
    moveBackward() {
        this.dae.position.y -= 0.2 * Math.cos(this.angle);
        this.dae.position.x -= 0.2 * Math.sin(this.angle);
        this.turret.dae.position.y -= 0.2 * Math.cos(this.angle);
        this.turret.dae.position.x -= 0.2 * Math.sin(this.angle);
    }
    turnRight() {
        this.dae.rotation.y += 0.005 * Math.PI;
        this.angle += 0.005 * Math.PI;
    }
    turnLeft() {
        this.dae.rotation.y -= 0.005 * Math.PI;
        this.angle -= 0.005 * Math.PI;
    }
    turnTurretRight() {
        this.turret.dae.rotation.y += 0.008 * Math.PI;
    }
    turnTurretLeft() {
        this.turret.dae.rotation.y -= 0.008 * Math.PI;
    }
    update() {
        if (this.forward) {
            this.moveForward();
        }
        if (this.backward) {
            this.moveBackward();
        }
        if (this.right) {
            this.turnRight();
        }
        if (this.left) {
            this.turnLeft();
        }
        if (this.turretLeft) {
            this.turnTurretLeft();
        }
        if (this.turretRight) {
            this.turnTurretRight();
        }
    }
};