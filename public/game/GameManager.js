import SinglePlayer from "./strategy/SinglePlayer";
import Scene from "./Scene";


export default class GameManager {
    constructor() {

    }
    start(strategy) {
        if (strategy == "single") {
            let scene = new Scene(SinglePlayer);
            // scene.startGame();
        }
    }
}