import SinglePlayer from "./strategy/SinglePlayer";
import Scene from "./Scene";


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
            // this.scene.updateObjects("tankMe", {});
            // this.strategy.initKeyListeners((action) => {
            //     this.scene.updateObjects("tankMe", action);
            // });

            // this.strategy.randomMovemant(action => {
            // 	this.scene.updateObjects("tankOpponent", action);
            // });
        }
        this.startLoop();
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