import SinglePlayer from "./strategy/SinglePlayer";
import Scene from "./Scene";
import { MultiMaterial } from "three";
import MultiPlayer from "./strategy/MultiPlayer";
import { inspect } from "util";
import textWriter from "./staticScene/TextWriter"


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
                this.scene.updateObjects("tankMe", instractions);
            });
            this.startLoop();
            setTimeout(() => {
                textWriter("comandorText", [
                    "Welcome to the military training!\n",
                    "To move the vehicle push W,A,S,D.\n",
                    "To rotate the turret push M,N.\n",
                    "You can also change view by pushing V.\n",
                    "If you want to shoot-push SPACE button.",
                    "After shooting you will see the reload bar in the right bottom corner.\n",
                    "Also in that corner you can see your health bar: ",
                    "When it comes red you have to be very careful, you can be killed with the one bullet.\n",
                    "So now you can try the controlls and watch the map.\n",
                    "When you want to quit push ESC.\n"
                ]);
            }, 4000);

        }
        if (strategy == "multi") {
            var webSocket = new WebSocket("wss://salty-shelf-19870.herokuapp.com/mgame");
            // var webSocket = new WebSocket("ws://127.0.0.1:8080/mgame");
            let isConnected = false;

            function sendMsg(msgToSend) {
                webSocket.send(JSON.stringify(msgToSend));
            }

            webSocket.onmessage = function(message) {
                let obj = JSON.parse(message.data);
                let coords = { x: obj.x, y: obj.y };
                if (obj.me) {
                    // console.log(obj.cameraType);
                    this.scene.updateObjects("tankMe", { angle: obj.angle, turretAngle: obj.turretAngle, coords: coords, fire: obj.fire, cameraType: obj.cameraType, bulletCoords: obj.bulletCoords, HP: obj.hp });
                } else {
                    this.scene.updateObjects("tankOpponent", { angle: obj.angle, turretAngle: obj.turretAngle, coords: coords, fire: obj.fire, cameraType: 0, bulletCoords: obj.bulletCoords });
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
            this.scene = new Scene({ x: 50, y: 50 }, { x: 50, y: 50 });
            setTimeout(() => {
                textWriter("comandorText", [
                    "Welcome to the battler ground!\n",
                    "If you don't know how to play \n",
                    "you should have some trainig in the single mode. \n",
                    "You are on the war, soldier. So you have to defeat the enemy.\n",
                    "Your enemy is the other tank. He is somewhere in the town.",
                    "Find him, shoot him and save the civilians!\n",
                    "Good luck, soldier!"
                ]);
            }, 4000);
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