import BaseView from "../BaseView";
import themeFileds from "./theme.js";
import { Block } from "../../block/block";
import "./theme.css";
import GameManager from "../../game/GameManager";
import router from "../../utils/Router";



export default class ThemeView extends BaseView {
    constructor(parentNode) {
        const view = new Block("div", { class: "theme" });
        super(view.el);
        this.view = view;
        this.parentNode = parentNode;
        this.parentNode.appendChild(this.view.el);
        this._appendChildren();
        this._buttonsInit();

        this.themeFlag = true;
        this.wallpaper = null;
    }

    _appendChildren() {
        themeFileds.forEach(key => {
            let ch = new Block(key.elemType, key);
            this.view.el.appendChild(ch.el);
            this[key.name] = ch;
        });
    }

    _buttonsInit() {
        this.themeBtn.setCallback(() => {
            this.themeFlag ? this.wallpaper = "url(../images/2wallpaper.jpg)" : this.wallpaper = "url(../images/wallpaper.jpg)";
            document.getElementById("background").style.backgroundImage = this.wallpaper;
            this.parentNode.childNodes.forEach(key => {
                key.childNodes.forEach(child => {
                    if (child.classList.contains("button")) {
                        this.themeFlag ? child.classList.add("new_button") : child.classList.remove("new_button");
                    }
                });
            });
            this.themeFlag = !this.themeFlag;
        });
        this.playBtn.setCallback(() => {
            router.go(this.playBtn.el.getAttribute("href"), false);
            const gameManager = new GameManager();
            gameManager.start("single");
        });
    }
}