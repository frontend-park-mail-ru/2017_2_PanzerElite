export default class Player {
    constructor(nickname, coords, actionStates) {
        this.actionStates = actionStates;
        this.health = 100;
        this.nickname = nickname;
        this.coords = { x: coords[0], y: coords[1] };
        this.angle = -0.5 * Math.PI;
        this.turretAngle = 0;
        this.cameraCurrentType = 0;
    }

    moveForward() {
        this.coords.y += 0.3 * Math.cos(this.angle);
        this.coords.x += 0.3 * Math.sin(this.angle);
    }
    moveBackward() {
        this.coords.y -= 0.2 * Math.cos(this.angle);
        this.coords.x -= 0.2 * Math.sin(this.angle);
    }
    turnRight() {
        this.angle += 0.005 * Math.PI;
    }
    turnLeft() {
        this.angle -= 0.005 * Math.PI;
    }
    turnTurretRight() {
        this.turretAngle += 0.008 * Math.PI;
    }
    turnTurretLeft() {
        this.turretAngle -= 0.008 * Math.PI;
    }
    update() {
        if (this.actionStates.forward) {
            this.moveForward();
        }
        if (this.actionStates.backward) {
            this.moveBackward();
        }
        if (this.actionStates.right) {
            this.turnRight();
        }
        if (this.actionStates.left) {
            this.turnLeft();
        }
        if (this.actionStates.turretLeft) {
            this.turnTurretLeft();
        }
        if (this.actionStates.turretRight) {
            this.turnTurretRight();
        }
        if (this.actionStates.changeCamera) {
            this.actionStates.changeCamera = false;
            // this.changeCamera = false;
            console.log("im in change");
            this.cameraCurrentType++;
            this.cameraCurrentType %= 3;
        }
    }

    getInstrustions() {
        return { coords: this.coords, angle: this.angle, turretAngle: this.turretAngle, cameraType: this.cameraCurrentType };
    }
}