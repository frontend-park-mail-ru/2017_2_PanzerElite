import { setTimeout } from "timers";

export default class Player {
	constructor(nickname, coords, actionStates) {
		this.actionStates = actionStates;
		this.health = 100;
		this.nickname = nickname;
		this.coords = { x: coords[0], y: coords[1] };
		this.angle = -0.5 * Math.PI;
		this.turretAngle = 0;
		this.cameraCurrentType = 0;
		this.deprecatedMovemants = { forward: false, backward: false, turnLeft: false, turnRight: false };
		this.map = [
			{ x: 0, y: 0, height: 57, width: 58 },
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
		this.coords.y -= 0.3 * Math.cos(this.angle);
		this.coords.x -= 0.3 * Math.sin(this.angle);
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
			this.deprecatedMovemants.backward = false;
			if (!this.deprecatedMovemants.forward) {
				this.moveForward();
			}
			if (this._tankCollisionWithHouses()) {
				this.deprecatedMovemants.forward = true;
			} else {
				this.deprecatedMovemants.forward = false;
			}
		}
		if (this.actionStates.backward) {
			this.deprecatedMovemants.forward = false;
			if (!this.deprecatedMovemants.backward) {
				this.moveBackward();
			}
			if (this._tankCollisionWithHouses()) {
				this.deprecatedMovemants.backward = true;
			} else {
				this.deprecatedMovemants.backward = false;
			}
		}
		if (this.actionStates.right) {
			if (!this.deprecatedMovemants.turnRight) {
				this.turnRight();
			}
			if (this._tankCollisionWithHouses()) {
				this.deprecatedMovemants.turnRight = true;
			} else {
				this.deprecatedMovemants.turnRight = false;
			}
		}
		if (this.actionStates.left) {
			if (!this.deprecatedMovemants.turnLeft) {
				this.turnLeft();
			}
			if (this._tankCollisionWithHouses()) {
				this.deprecatedMovemants.turnLeft = true;
			} else {
				this.deprecatedMovemants.turnLeft = false;
			}
		}
		if (this.actionStates.turretLeft) {
			this.turnTurretLeft();
		}
		if (this.actionStates.turretRight) {
			this.turnTurretRight();
		}
		if (this.actionStates.changeCamera) {
			this.actionStates.changeCamera = false;
			this.cameraCurrentType++;
			this.cameraCurrentType %= 3;
		}
		if (this.actionStates.fire) {
			setTimeout(() => { this.actionStates.fire = false; }, 500);
		}
	}

	_pointInPolygon(pointX, pointY, polyX, polyY, polyH, polyW) {
		let leftX = polyX - polyH / 2;
		let rightX = leftX + polyH;
		if (pointX < rightX && pointX > leftX) {
			let leftY = polyY - polyW / 2;
			let rightY = leftY + polyW;
			if (pointY < rightY && pointY > leftY) {
				return true;
			}
		}
		return false;
	}

	_tankCollisionWithHouses() {
		let tankPoints = [{
			y: this.coords.y + 3.9 * Math.abs(Math.cos(this.angle)),
			x: this.coords.x + 3.9 * Math.abs(Math.sin(this.angle))
		}, {
			y: this.coords.y - 3.9 * Math.abs(Math.cos(this.angle)),
			x: this.coords.x - 3.9 * Math.abs(Math.sin(this.angle))
		},
		{
			y: this.coords.y - 3.9 * Math.abs(Math.cos(this.angle)),
			x: this.coords.x + 3.9 * Math.abs(Math.sin(this.angle))
		}, {
			y: this.coords.y + 3.9 * Math.abs(Math.cos(this.angle)),
			x: this.coords.x - 3.9 * Math.abs(Math.sin(this.angle))
		}
		];
		let flag = false;
		this.map.some(key => {
			tankPoints.some(tp => {
				flag = this._pointInPolygon(tp.x, tp.y, key.x, key.y, key.height, key.width);
				return flag;
			});
			return flag;
		});
		return flag;
	}

	getInstrustions() {
		return { coords: this.coords, angle: this.angle, turretAngle: this.turretAngle, cameraType: this.cameraCurrentType, fire: this.actionStates.fire };
	}
}