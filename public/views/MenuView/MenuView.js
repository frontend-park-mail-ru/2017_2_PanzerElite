import BaseView from "../BaseView";
import menuFields from "./menu.js";
import { Block } from "../../block/block";
import router from "../../utils/Router";
import UserService from "../../services/user-service";
import GameManager from "../../game/GameManager";

let userService = new UserService();

export default class MenuView extends BaseView {
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
		menuFields.forEach(key => {
			let ch = new Block(key.elemType, key);
			this.view.el.appendChild(ch.el);
			this[key.name] = ch;
		});
	}


	_buttonsInit() {
		this.changeBtn.setCallback(() => {
			router.go(this.changeBtn.el.getAttribute("href"), false);
		});
		this.logoutBtn.setCallback(() => {
			userService.logout()
				.then(() => {
					router.go(this.logoutBtn.el.getAttribute("href"));
				})
				.catch(err => {});
		});

		this.play.setCallback(() => {
			router.go(this.play.el.getAttribute("href"), false);
		});
	}
}