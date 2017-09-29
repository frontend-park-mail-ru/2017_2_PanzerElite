"use strict";

import Block from "../block/block.js";
import getTemplate from "./ScoreboardTEMPLATE.js";
class Scoreboard extends Block {
	constructor() {
		const el = document.createElement("form");
		super(el);
	}

	update() {
		const aa = getTemplate();
		this.el.innerHTML = aa;
	}
}
export default Scoreboard;