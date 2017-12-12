import BaseView from "../BaseView";
import scoreFields from "./scoreboard";
import { Block } from "../../block/block";
import router from "../../utils/Router";
import UserService from "../../services/user-service";
import progressBar from "../../modules/load-bar";


let userService = new UserService();

export default class ScoreboardView extends BaseView {
    constructor(parentNode) {
        const view = new Block("div", { class: "form hidden" });
        super(view.el);
        this.view = view;
        this.parentNode = parentNode;
        this.parentNode.appendChild(this.view.el);
        this._appendChildren();
        this._buttonsInit();
        window.updateScoreboard = this.updateScoreboard.bind(this);
    }

    _appendChildren() {
        scoreFields.forEach(key => {
            let ch = new Block(key.elemType, key);
            this.view.el.appendChild(ch.el);
            this[key.name] = ch;
        });
    }

    _buttonsInit() {
        this.changeformBtn.setCallback(() => {
            router.go(this.changeformBtn.el.getAttribute("href"), false);
        });
    }
    updateScoreboard(array) {
        this.view.el.innerHTML = "";
        this._appendChildren();
        this._buttonsInit;
        // let cnt = 1;
        // array.forEach(key => {
        //     let ch = new Block("input", {
        //         class: " userdata",
        //         elemType: "input",
        //         value: cnt + ")  " + key.login + ": " + key.rank,
        //         href: "/game/",
        //         type: "button"
        //     });
        //     this.view.el.appendChild(ch.el);
        //     cnt++;
        // });
        this._createTable(array);
    }
    _createTable(array) {
        const table = new Block("table", { class: "scoreboard" });
        table.setAttributes({
            align: "left",
            width: "100%",
            rules: 'rows',
            rules: 'cols',
        });
        let cnt = 1;
        const row = new Block("tr", { class: "scoredata" });
        const num = new Block("th");
        num.el.innerHTML = "#";
        const nick = new Block("th");
        nick.el.innerHTML = "Nickname";
        const rank = new Block("td");
        rank.el.innerHTML = "Rank";
        row.el.appendChild(num.el);
        row.el.appendChild(nick.el);
        row.el.appendChild(rank.el);
        table.el.appendChild(row.el);
        array.forEach(key => {
            const row = new Block("tr", { class: "scoredata" });
            const num = new Block("td");
            num.el.innerHTML = cnt;
            const nick = new Block("td");
            nick.el.innerHTML = key.login;
            const rank = new Block("td");
            rank.el.innerHTML = key.rank;
            row.el.appendChild(num.el);
            row.el.appendChild(nick.el);
            row.el.appendChild(rank.el);
            table.el.appendChild(row.el);
            cnt++;
        });
        this.view.el.appendChild(table.el);
    }
}