import SinglePlayer from "./strategy/SinglePlayer";
import Scene from "./Scene";
import { MultiMaterial } from "three";
import MultiPlayer from "./strategy/MultiPlayer";
import { inspect } from "util";


export default class GameManager {
    constructor() {
        this._mainLoop = this._mainLoop.bind(this);
    }

    start(strategy, liteVersion) {
        if (strategy == "single") {
            this.strategy = new SinglePlayer(); // повесить слушаетль, чтобы данные в сцене были получены из стратегии            
            const playersCoords = this.strategy.getPlayersCoors();
            this.scene = new Scene(playersCoords.me, playersCoords.opponent, "single", liteVersion);
            this.strategy.startListenGameLoop((instractions) => {
                this.scene.updateObjects("tankMe", instractions);
            });
            this.startLoop();
        }
        if (strategy == "multi") {
            // var webSocket = new WebSocket("wss://salty-shelf-19870.herokuapp.com/mgame");
            var webSocket = new WebSocket("ws://127.0.0.1:8080/mgame");
            let isConnected = false;

            function sendMsg(msgToSend) {
                webSocket.send(JSON.stringify(msgToSend));
            }

            webSocket.onmessage = function(message) {
                let obj = JSON.parse(message.data);
                let coords = { x: obj.x, y: obj.y };
                if (obj.me) {
                    // console.log(obj.victory);
                    this.scene.updateObjects("tankMe", {
                        angle: obj.angle,
                        turretAngle: obj.turretAngle,
                        coords: coords,
                        fire: obj.fire,
                        cameraType: obj.cameraType,
                        bulletCoords: obj.bulletCoords,
                        HP: obj.hp,
                        state: obj.victory,
                        enemyNick: obj.enemyNick
                    });
                } else {
                    this.scene.updateObjects("tankOpponent", {
                        angle: obj.angle,
                        turretAngle: obj.turretAngle,
                        coords: coords,
                        fire: obj.fire,
                        cameraType: 0,
                        bulletCoords: obj.bulletCoords
                    });
                }
            }.bind(this);

            webSocket.onopen = function() {
                console.log("connection opened");
                isConnected = true;
            };

            webSocket.onclose = function() {
                console.log("connection closed");
                isConnected = false;
            };

            webSocket.onerror = function wserror(message) {
                console.log("error: " + message);
            };


            console.log("im in flag");
            this.strategy = new MultiPlayer(); // повесить слушаетль, чтобы данные в сцене были получены из стратегии            
            this.scene = new Scene({ x: 50, y: 50 }, { x: 50, y: 50 }, "multi", liteVersion);
            this.strategy.startListenGameLoop((instractions) => {
                // console.log(instractions);
                // this.scene.updateObjects("tankMe", instractions);
                if (isConnected) {
                    sendMsg(instractions);
                }
                instractions.fire = false;
                instractions.changeCamera = false;
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