const THREE = require("three");
import Turret from "./Turret";

export default class Tank {
    constructor(dae, coords = { x: 0, y: 0 }) {

        this.dae = new THREE.Object3D();
        this.dae.position.x = coords.x;
        this.dae.position.y = coords.y;

        this.turret = new Turret(null, coords);

        this.camera = null;
        // this.changeCamera = false;
        this.cameraCurrentType = 0;

        this.cameraTypes = [() => {
            this.camera.position.set(50, 7.9, 0);
            this.camera.lookAt(new THREE.Vector3(0, 3.60, 0));
        }, () => {
            this.camera.position.set(5, 3, 0);
            this.camera.lookAt(new THREE.Vector3(0, 2.7, 0));
        }, () => {
            this.camera.position.set(185, 45, 0);
            this.camera.lookAt(new THREE.Vector3(0, 15, 0));
        }];
        this.instractions = { coords: {}, angle: -0.5 * Math.PI, cameraType: 0 };
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

        if (this.instractions.cameraType !== this.cameraCurrentType) {
            this.cameraTypes[this.instractions.cameraType]();
            this.cameraCurrentType = this.instractions.cameraType;
        }
    }
}