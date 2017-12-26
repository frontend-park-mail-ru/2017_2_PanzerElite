import BaseView from "../BaseView";
import aboutFields from "./about.js";
import { Block } from "../../block/block";
import router from "../../utils/Router";
import progressBar from "../../modules/load-bar";

export default class AboutView extends BaseView {
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
        aboutFields.forEach(key => {
            let ch = new Block(key.elemType, key);
            this.view.el.appendChild(ch.el);
            this[key.name] = ch;
        });
    }

    _buttonsInit() {
        this.changeformBtn.setCallback(() => {
            router.go(this.changeformBtn.el.getAttribute("href"), false);
        });
    }
}