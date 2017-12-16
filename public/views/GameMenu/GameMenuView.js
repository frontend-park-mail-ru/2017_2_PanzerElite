import BaseView from "../BaseView";
import { Block } from "../../block/block";
import router from "../../utils/Router";
import gameMenuFields from "./gameMenu";
import "./gameMenu.css";


export default class GameMenuView extends BaseView {
    constructor(parentNode) {
        const view = new Block("div", { class: "gamemenu hidden" });
        super(view.el);
        this.view = view;
        this.parentNode = parentNode;
        this.parentNode.appendChild(this.view.el);
        this._appendChildren();
        this._buttonsInit();
        this.muteflag = true;
    }

    _appendChildren() {
        gameMenuFields.forEach(key => {
            let ch = new Block(key.elemType, key);
            this.view.el.appendChild(ch.el);
            this[key.name] = ch;
        });
    }
    _buttonsInit() {
        this.resumeBtn.setCallback(() => {
            this.hide();
            document.getElementById("game").classList.remove("blured");

        });
        this.quitBtn.setCallback(() => {
            this.hide();
            router.go(this.quitBtn.el.getAttribute("href"), true);
        });
        this.muteBtn.setCallback(() => {
            window.movingSound.muted = this.muteflag;
            window.stayingSound.muted = this.muteflag;
            window.fireSound.muted = this.muteflag;
            window.reloadSound.muted = this.muteflag;
            this.muteflag = !this.muteflag;
            if (!this.muteflag) {
                this.muteBtn.el.value = "unmute";
            } else {
                this.muteBtn.el.value = "mute";
            }
        });

    }
}