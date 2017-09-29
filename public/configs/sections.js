import Block from "../blocks/block/block.js";
const sections = {
	menu: Block.Create("section", {}, ["form"]),
	login: Block.Create("section", {}, ["form"]),
	register: Block.Create("section", {}, ["form"]),
	change: Block.Create("section", {}, ["form"]),
	scoreboard: Block.Create("section", {}, ["form"]),
	hide() {
		this.menu.hide();
		this.login.hide();
		this.register.hide();
		this.change.hide();
		this.scoreboard.hide();
	}
};
export const sectionButtons = {
	menu: {
		changePassword: 0,
		logout: 1,
		scoreboard: 2
	},
	login: {
		goToRegister: 0,
	},
	register: {
		goToLogin: 0,
	},
	change: {
		goToMenu: 0,
	}
};

export default sections;