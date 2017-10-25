"use strict";

const changeFields = [{
        elemType: "input",
        class: "change__input",
        type: "password",
        name: "password",
        placeholder: "Password"
    },
    {
        elemType: "input",
        class: "change__input",
        type: "password",
        name: "confirm",
        placeholder: "Confirm"

    },
    {
        name: "changeBtn",
        class: "change__button button",
        elemType: "a",
        value: "Change",
        type: "button",
        href: "/menu/"

    },
    {
        name: "changeformBtn",
        class: "change__button button",
        elemType: "a",
        value: "back to menu",
        href: "/menu/",


    },
    {
        name: "warning",
        class: "warning",
        type: "text",
        value: "Invalid Data",
        readonly: "true",
        hidden: "true"

    }
];
export default changeFields;