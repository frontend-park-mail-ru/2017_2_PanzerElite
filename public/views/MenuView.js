import BaseView from './BaseView';
import menuFields from "./menu.js";
import { Block } from '../block/block';
import router from "../utils/Router";
import UserService from "../services/user-service";

let userService = new UserService();

export default class MenuView extends BaseView {
    constructor(parentNode) {
        const view = new Block("div", { class: "menu hidden" });
        super(view.el);
        this.view = view;
        this.parentNode = parentNode;
        this.parentNode.appendChild(this.view.el);
        this._appendChildren();
        this._buttonsInit();
    }

    _appendChildren() {
        menuFields.forEach(key => {
            let ch = new Block(key.elemType, key);
            this.view.el.appendChild(ch.el);
            this[key.name] = ch;
        });
    }

    _buttonsInit() {

    }
}