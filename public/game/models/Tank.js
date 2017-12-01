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
            this.camera.position.set(0, 7.9, 50);
            this.camera.lookAt(new THREE.Vector3(0, 3.60, 0));
        }, () => {
            this.camera.position.set(0, 3, 5);
            this.camera.lookAt(new THREE.Vector3(0, 2.7, 0));
        }, () => {
            this.camera.position.set(0, 45, 185);
            this.camera.lookAt(new THREE.Vector3(0, 15, 0));
        }];
        this.instractions = { coords: {}, angle: -0.5 * Math.PI, cameraType: 0 };
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