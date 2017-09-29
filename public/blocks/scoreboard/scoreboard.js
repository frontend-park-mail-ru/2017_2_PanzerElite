"use strict";

import Block from "../block/block.js";
import getTemplate from "./ScoreboardTEMPLATE.js";
class Scoreboard extends Block {
    /**
     * @constructor
     */
    constructor() {
        const el = document.createElement("form");
        super(el);
    }

    /**
     * Обновить содержимое Таблицы Лидеров
     */
    update() {
        const aa = getTemplate();
        this.el.innerHTML = aa;
    }
}
export default Scoreboard;