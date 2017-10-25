"use strict";

const menuFields = [{
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
    },
    {
        name: "play",
        class: "menu__button button",
        elemType: "a",
        value: "play",
    }
];
export default menuFields;