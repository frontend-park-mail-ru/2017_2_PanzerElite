import BaseView from "../BaseView";
import gameFields from "./gameType";
import { Block } from "../../block/block";
import router from "../../utils/Router";
import UserService from "../../services/user-service";
import GameManager from "../../game/GameManager";

let userService = new UserService();

export default class GameTypeView extends BaseView {
    constructor(parentNode) {
        const view = new Block("div", { class: "form hidden" });
        super(view.el);
        this.view = view;
        this.parentNode = parentNode;
        this.parentNode.appendChild(this.view.el);
        this._appendChildren();
        this._buttonsInit();
    }

    _appendChildren() {
        gameFields.forEach(key => {
            let ch = new Block(key.elemType, key);
            this.view.el.appendChild(ch.el);
            this[key.name] = ch;
        });
    }


    _buttonsInit() {
        this.singlePlayer.setCallback(() => {
            router.go(this.singlePlayer.el.getAttribute("href"), false);
            const gameManager = new GameManager();
            gameManager.start("single");
        });
        this.changeformBtn.setCallback(() => {
            router.go(this.changeformBtn.el.getAttribute("href"), false);
        });
    }
}