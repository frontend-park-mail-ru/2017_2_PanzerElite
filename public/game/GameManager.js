import SinglePlayer from "./strategy/SinglePlayer";
import Scene from "./Scene";
import { MultiMaterial } from "three";
import MultiPlayer from "./strategy/MultiPlayer";


export default class GameManager {
    constructor() {
        this._mainLoop = this._mainLoop.bind(this);
    }

    start(strategy) {
        if (strategy == "single") {
            this.strategy = new SinglePlayer(); // повесить слушаетль, чтобы данные в сцене были получены из стратегии            
            const playersCoords = this.strategy.getPlayersCoors();
            this.scene = new Scene(playersCoords.me, playersCoords.opponent);
            this.strategy.startListenGameLoop((instractions) => {
                // console.log(instractions);
                this.scene.updateObjects("tankMe", instractions);
            });
            this.startLoop();
        }
        if (strategy == "multi") {
            var webSocket = new WebSocket("wss://salty-shelf-19870.herokuapp.com/mgame");
            let flag = false;

            function sendMsg(msgToSend) {
                webSocket.send(JSON.stringify(msgToSend));
            }

            webSocket.onmessage = function(message) {
                // console.log(message.data);
                // let coords = { x: message.data.x, y: message.data.y };
                // if (message.data.me == true) {
                //     this.scene.updateObjects("tankMe", { angle: message.data.angle, turretAngle: message.data.turretAngle, coords: coords, fire: false, cameraType: 0 });
                // } else {
                //     this.scene.updateObjects("tankOpponent", { angle: message.data.angle, turretAngle: message.data.turretAngle, coords: coords, fire: false, cameraType: 0 });
                // }
                let obj = JSON.parse(message.data);
                let coords = { x: obj.x, y: obj.y };
                if (obj.me) {
                    this.scene.updateObjects("tankMe", { angle: obj.angle, turretAngle: obj.turretAngle, coords: coords, fire: false, cameraType: 0 });
                } else {
                    this.scene.updateObjects("tankOpponent", { angle: obj.angle, turretAngle: obj.turretAngle, coords: coords, fire: false, cameraType: 0 });
                }



            }.bind(this);

            webSocket.onopen = function() {
                console.log("connection opened");
                flag = true;
            };

            webSocket.onclose = function() {
                console.log("connection closed");
                flag = false;
            };

            webSocket.onerror = function wserror(message) {
                console.log("error: " + message);
            }



            // this.strategy = new MultiPlayer();
            // this.strategy._initKeyListeners((instractions) => {

            //     if (flag) {
            //         sendMsg(instractions);
            //     }
            // });

            console.log("im in flag");
            this.strategy = new MultiPlayer(); // повесить слушаетль, чтобы данные в сцене были получены из стратегии            
            this.scene = new Scene({ x: 50, y: 50 }, { x: 50, y: 50 });
            this.strategy._initKeyListeners((instractions) => {
                // console.log(instractions);
                // this.scene.updateObjects("tankMe", instractions);
                if (flag) {
                    sendMsg(instractions);
                }
            });
            // this.startLoop();

        }
    }

    startLoop() {
        this.mainLoopId = setInterval(this._mainLoop, 500);
    }

    stopLoop() {
        clearInterval(this.mainLoopId);
    }

    destroy() {
        stopLoop();
        this.strategy.destroy();
    }

    _mainLoop() {
        if (this.strategy.me.health <= 0 && this.strategy.opponent.health <= 0) {
            console.log("Draw bitch");
        } else if (this.strategy.me.health <= 0) {
            console.log("Bot won! :(");
        } else if (this.strategy.opponent.health <= 0) {
            console.log("I won! ;)");
        }
    }
}