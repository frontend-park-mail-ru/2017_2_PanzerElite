import BaseView from '../BaseView';
import registerFields from "./register.js";
import { Block } from '../../block/block';
import router from "../../utils/Router";
import UserService from "../../services/user-service";

let userService = new UserService();

export default class RegisterView extends BaseView {
    constructor(parentNode) {
        const view = new Block("div", { class: "register hidden" });
        super(view.el);
        this.view = view;
        this.parentNode = parentNode;
        this.parentNode.appendChild(this.view.el);
        this._appendChildren();
        this._buttonsInit();
    }

    _appendChildren() {
        registerFields.forEach(key => {
            let ch = new Block(key.elemType, key);
            this.view.el.appendChild(ch.el);
            this[key.name] = ch;
        });
    }

    _buttonsInit() {
        this.registerBtn.setCallback(() => {
            userService.register(this.nick.el.value,
                    this.password.el.value, this.confirm.el.value)
                .then(() => {
                    router.go(this.registerBtn.el.getAttribute("href"));
                    this.warning.hide();

                })
                .catch(err => {
                    this.warning.setAttributes({ value: err });
                    this.warning.show();
                });

            this.changeformBtn.setCallback(() => {
                this.warning.hide();
                router.go(this.changeformBtn.el.getAttribute("href"), false);
            });
        });
    }
}