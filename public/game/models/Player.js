export default class Player {
    constructor(nickname, coords, actionStates) {
        this.actionStates = actionStates;
        this.health = 100;
        this.nickname = nickname;
        this.coords = { x: coords[0], y: coords[1] };
        this.angle = -0.5 * Math.PI;
        this.turretAngle = 0;
        this.cameraCurrentType = 0;
        this.map = [
            { x: 0, y: 0, height: 58, width: 57 },
            { x: -136, y: 88, height: 18, width: 17 },
            { x: -48, y: 108, height: 18, width: 17 },
            { x: -20, y: 56, height: 18, width: 17 },
            { x: -136, y: -20, height: 18, width: 17 },
            { x: 68, y: 40, height: 18, width: 17 },
            { x: 100, y: 40, height: 18, width: 17 },
            { x: 132, y: 40, height: 18, width: 17 },
            { x: -100, y: 24, height: 32, width: 20 },
            { x: -128, y: -88, height: 32, width: 20 },
            { x: -20, y: -92, height: 20, width: 32 },
            { x: 32, y: 104, height: 32, width: 20 },
            { x: 140, y: 84, height: 20, width: 32 },
            { x: -84, y: 64, height: 42, width: 25 },
            { x: -56, y: -40, height: 25, width: 42 },
        ];
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
            if (this.isCollision()) {
                let B = this.isCollision();
                while (this.houseCollision(B)) {
                    this.moveBackward();
                }
            }
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

    // isCollision(B) {
    //     let w = 0.5 * (3 + B.width);
    //     let h = 0.5 * (7 + B.height);
    //     let dx = this.coords.x - B.x;
    //     let dy = this.coords.y - B.y;

    //     if (Math.abs(dx) <= w && Math.abs(dy) <= h) {
    //         console.log("its collision bro");
    //         return true;
    //     }
    // }
    isCollision() {
        let flag = null;
        this.map.forEach((B) => {
            let w = 0.5 * (3 + B.width);
            let h = 0.5 * (7 + B.height);
            let dx = this.coords.x - B.x;
            let dy = this.coords.y - B.y;

            if (Math.abs(dx) <= w && Math.abs(dy) <= h) {
                console.log("its collision bro");
                flag = B;
            }
        });
        return flag;
    }
    houseCollision(B) {
        let w = 0.5 * (3 + B.width);
        let h = 0.5 * (7 + B.height);
        let dx = this.coords.x - B.x;
        let dy = this.coords.y - B.y;
        if (Math.abs(dx) <= w && Math.abs(dy) <= h) {
            console.log("coll");
            return true;
        }
        return false;
    }

    getInstrustions() {
        return { coords: this.coords, angle: this.angle, turretAngle: this.turretAngle, cameraType: this.cameraCurrentType };
    }
}