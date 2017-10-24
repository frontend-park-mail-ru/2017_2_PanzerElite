import loginFields from "../views/login.js";
import menuFields from "../views/menu.js";
import changeFields from "../views/change.js";
import registerFields from "../views/register.js";
import gameView from "../views/game.js";

export const forms = [{
    name: "login",
    type: "div",
    class: "login",
    children: loginFields
}, {
    name: "register",
    type: "div",
    class: "register",
    children: registerFields
}, {
    name: "menu",
    type: "div",
    class: "menu",
    children: menuFields
}, {
    name: "change",
    type: "div",
    class: "change",
    children: changeFields
}, {
    name: "game",
    type: "div",
    class: "game",
    children: gameView
}, ];