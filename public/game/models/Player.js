export default class Player {
    constructor(nickname, coords) {
        this.health = 100;
        this.nickname = nickname;
        this.coords = { x: coords[0], y: coords[1] };
        this.angle = -0.5 * Math.PI;
        this.turretAngle = 0;
    }

    moveForward() {
        this.coords.y += 0.3 * Math.cos(this.angle);
        this.coords.x += 0.3 * Math.sin(this.angle);
        //this.turret.dae.position.y += 0.3 * Math.cos(this.angle);
        //this.turret.dae.position.x += 0.3 * Math.sin(this.angle);
    }
    moveBackward() {
        this.coords.y -= 0.2 * Math.cos(this.angle);
        this.coords.x -= 0.2 * Math.sin(this.angle);
        //this.turret.dae.position.y -= 0.2 * Math.cos(this.angle);
        //this.turret.dae.position.x -= 0.2 * Math.sin(this.angle);
    }
    turnRight() {
        //this.dae.rotation.y += 0.005 * Math.PI;
        this.angle += 0.005 * Math.PI;
    }
    turnLeft() {
        //this.dae.rotation.y -= 0.005 * Math.PI;
        this.angle -= 0.005 * Math.PI;
    }
    turnTurretRight() {
        //this.turret.dae.rotation.y += 0.008 * Math.PI;
        this.turretAngle += 0.008 * Math.PI;
    }
    turnTurretLeft() {
        //this.turret.dae.rotation.y -= 0.008 * Math.PI;
        this.turretAngle -= 0.008 * Math.PI;

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
        // if (this.changeCamera) {
        //     this.cameraCurrentType++;
        //     this.cameraCurrentType %= 3;
        //     this.cameraTypes[this.cameraCurrentType]();
        //     this.changeCamera = false;
        // }
    }

    getInstrustions() {
        return { coords: this.coords, angle: this.angle, turretAngle: this.turretAngle };
    }
}