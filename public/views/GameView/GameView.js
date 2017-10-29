import BaseView from "../BaseView";
import { Block } from "../../block/block";
import router from "../../utils/Router";
import "./gameView.css";

export default class GameView extends BaseView {
    constructor(parentNode) {
        const view = new Block("div", { class: "game hidden" });
        super(view.el);
        this.view = view;
        this.parentNode = parentNode;
        this.parentNode.appendChild(this.view.el);
        this._buttonsInit();
    }
    _buttonsInit() {
        window.addEventListener("keyup", function(e) {
            if (e.keyCode == 27) {
                document.getElementsByClassName("gamemenu")[0].classList.remove("hidden");
            }
        });
    }
}