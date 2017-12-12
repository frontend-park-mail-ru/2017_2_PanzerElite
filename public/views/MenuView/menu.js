"use strict";

const menuFields = [{
        name: "play",
        class: " button",
        elemType: "a",
        href: "/play/",
        value: "play",
    },
    {
        name: "changeBtn",
        class: " button",
        elemType: "a",
        href: "/changepass/",
        value: "Change Password",
    },

    {
        name: "scoreboardBtn",
        class: " button",
        elemType: "a",
        value: "scoreboard",
        href: "/scoreboard/",
        type: "button",
    },
    {
        name: "logoutBtn",
        class: " button",
        elemType: "input",
        type: "button",
        href: "/login/",
        value: "log out"
    },
];
export default menuFields;