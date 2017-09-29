"use strict";
import "./form.css";
import Block from "../block/block.js";
class Form extends Block {
	constructor(fields = []) {
		const el = document.createElement("form");
		super(el);

		fields.forEach((field) => {
			const input = Block.Create("input", field.attrs || {}, field.classes || []);
			this.append(input);
		});
		this.wrnMsg = this.el.getElementsByClassName("warning")[0];
	}
	onSubmit(callback) {
		this.el.addEventListener("submit", (e) => {
			e.preventDefault();
			const formdata = {};
			const elements = this.el.elements;
			for (let name in elements) {
				formdata[name] = elements[name].value;
			}

			callback(formdata);
		});
	}
	warningMsg(text, flag) {
		this.wrnMsg.value = text;
		this.wrnMsg.hidden = flag;
	}
	onButton(buttonIndex, callback) {
		this.el.getElementsByClassName("button")[buttonIndex].addEventListener("click", callback, false);
	}
	reset() {
		this.el.reset();
	}
}
export default Form;