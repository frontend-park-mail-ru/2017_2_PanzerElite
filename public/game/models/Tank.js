const THREE = require("three");
import Turret from "./Turret";

export default class Tank {
    constructor(dae, coords = { x: 0, y: 0 }) {
        //some magic for turn
        this.dae = new THREE.Object3D();
        this.parent = new THREE.Object3D();
        //this.parent.position.x = +0.5;
        this.dae.add(this.parent);
        // this.original = null;
        //this.angle = Math.PI - Math.PI;
        ////new motion
        // this.forward = false;
        // this.backward = false;
        // this.right = false;
        // this.left = false;
        // //turret
        // this.turret = null;
        // this.turretRight = false;
        // this.turretLeft = false;

        this.dae.position.x = coords.x;
        this.dae.position.y = coords.y;

        this.turret = new Turret(null, coords);


        this.camera = null;
        this.changeCamera = false;
        this.cameraCurrentType = 0;

        this.cameraTypes = [() => {
            this.camera.position.set(0, 6.5, -37);
            this.camera.lookAt(new THREE.Vector3(0, 3.60, 0));
        }, () => {
            this.camera.position.set(0, 3, -3);
            this.camera.lookAt(new THREE.Vector3(0, 2.75, 3));
        }, () => {
            this.camera.position.set(0, 75, -285);
            this.camera.lookAt(new THREE.Vector3(0, 15, 10));
        }];
        this.instractions = { coords: {}, angle: -0.5 * Math.PI };
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
        this.dae.rotation.y = this.instractions.angle - Math.PI;
        this.turret.dae.rotation.y = this.instractions.turretAngle - Math.PI;
        this.dae.position.y = this.instractions.coords.y;
        this.dae.position.x = this.instractions.coords.x;
        this.turret.dae.position.y = this.instractions.coords.y;
        this.turret.dae.position.x = this.instractions.coords.x;

        // if (this.changeCamera) {
        //     this.cameraCurrentType++;
        //     this.cameraCurrentType %= 3;
        //     this.cameraTypes[this.cameraCurrentType]();
        //     this.changeCamera = false;
        // }
    }
}