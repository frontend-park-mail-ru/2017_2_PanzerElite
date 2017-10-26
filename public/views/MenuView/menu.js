"use strict";

const menuFields = [{
        name: "play",
        class: "menu__button button",
        elemType: "a",
        href: "/play/",
        value: "play",
    },
    {
        name: "changeBtn",
        class: "menu__button button",
        elemType: "a",
        href: "/changepass/",
        value: "Change Password",
    },
    {
        name: "logoutBtn",
        class: "menu__button button",
        elemType: "input",
        type: "button",
        href: "/login/",
        value: "log out"
    },
    {
        name: "scoreboardBtn",
        class: "menu__button button",
        elemType: "a",
        value: "scoreboard",
    }
];
export default menuFields;