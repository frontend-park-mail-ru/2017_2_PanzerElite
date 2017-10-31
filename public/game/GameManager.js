import SinglePlayer from "./strategy/SinglePlayer";
import Scene from "./Scene";


export default class GameManager {
    constructor() {
        this._mainLoop = this._mainLoop.bind(this);
    }

    start(strategy) {
        if (strategy == "single") {
            this.scene = new Scene([10, 10], [-10, -10]);
            this.strategy = new SinglePlayer(); // повесить слушаетль, чтобы данные в сцене были получены из стратегии
            this.strategy.initKeyListeners((action) => {
                this.scene.updateObjects("tankMe", action);
            });

            // this.strategy.randomMovemant(action => {
            // 	this.scene.updateObjects("tankOpponent", action);
            // });



        }
        this.startLoop();
    }

    startLoop() {
        this.mainLoop = setInterval(this._mainLoop, 500);
    }

    stopLoop() {
        clearInterval(this.mainLoop);
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