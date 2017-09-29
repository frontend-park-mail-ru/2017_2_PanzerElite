import "./load-bar.css";
export default class pBar {
	constructor() {
		this.elem = document.getElementsByClassName("myBar")[0];
		this.id;
	}

	show() {
		this.elem.hidden = false;
		var shift = 1;
		this.id = setInterval(() => {
			if (shift >= 98) {
				shift = 1;
			} else {
				shift++;
			}
			this.elem.style.left = shift + "%";
		}, 10);
	}

	hide() {
		this.elem.hidden = true;
		clearInterval(this.id);
	}
}