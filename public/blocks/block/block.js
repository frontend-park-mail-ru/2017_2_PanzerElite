"use strict";

export default class Block {
	constructor(el) {
		this.el = el;
	}

	static Create(tagName = "div", attrs = {}, classes = [], text = null) {
		const el = document.createElement(tagName);
		classes.forEach((className) => {
			el.classList.add(className);
		});
		Object.keys(attrs).forEach(key => {
			el.setAttribute(key, attrs[key]);
		});
		if (text) {
			el.textContent = text;
		}
		return new Block(el);
	}

	setText(text) {
		this.el.textContent = text;
	}

	clear() {
		this.el.innerHTML = "";
	}

	hide() {
		this.el.setAttribute("hidden", "hidden");
	}

	show() {
		this.el.removeAttribute("hidden");
	}

	append(block) {
		this.el.appendChild(block.el);
		return this;
	}

}