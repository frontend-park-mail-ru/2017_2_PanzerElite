"use strict";

const loginFields = [{
        name: "nick",
        class: "inputClass",
        elemType: "input",
        type: "text",
        placeholder: "Nickname"
    },
    {
        name: "password",
        class: "inputClass",
        elemType: "input",
        type: "password",
        placeholder: "Password"
    },
    {
        name: "loginBtn",
        class: "login__button button",
        elemType: "input",
        type: "button",
        value: "Log In",
        href: "/menu"
    },
    {
        name: "changeformBtn",
        class: "login__button button",
        elemType: "a",
        value: "Havent Account?",
        href: "/register"
    },
    {
        name: "warning",
        class: "warning",
        elemType: "input",
        type: "text",
        value: "Invalid Data",
        readonly: "true",
        hidden: "true"
    }
];
export default loginFields;