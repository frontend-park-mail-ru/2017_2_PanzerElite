import BaseView from '../BaseView';
import changeFields from "./change.js";
import { Block } from '../../block/block';
import router from "../../utils/Router";
import UserService from "../../services/user-service";

let userService = new UserService();

export default class ChangeView extends BaseView {
    constructor(parentNode) {
        const view = new Block("div", { class: "change hidden" });
        super(view.el);
        this.view = view;
        this.parentNode = parentNode;
        this.parentNode.appendChild(this.view.el);
        this._appendChildren();
        this._buttonsInit();
    }

    _appendChildren() {
        changeFields.forEach(key => {
            let ch = new Block(key.elemType, key);
            this.view.el.appendChild(ch.el);
            this[key.name] = ch;
        });
    }

    // main.change.changeformBtn.setCallback(() => {
    //     main.change.hide();
    //     main.menu.show();
    // });


    _buttonsInit() {
        this.changeBtn.setCallback(() => {
            userService.changePassword(this.password.el.value,
                    this.confirm.el.value)
                .then(() => {
                    router.go(this.changeBtn.el.getAttribute("href"));
                })
                .catch(err => {
                    this.warning.setAttributes({ value: err });
                    this.warning.show();
                });

        });

        this.changeformBtn.setCallback(() => {
            router.go(this.changeformBtn.el.getAttribute("href"), false);
        });
    }
}