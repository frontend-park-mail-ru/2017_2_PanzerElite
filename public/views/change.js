"use strict";

const changeFields = [{

        class: "inputClass",
        type: "password",
        name: "password",
        placeholder: "Password"

    },
    {

        class: "inputClass",
        type: "password",
        name: "confirm",
        placeholder: "Confirm"

    },
    {
        name: "changeBtn",
        class: "button",
        elemType: "a",
        value: "Change",

    },
    {
        name: "changeformBtn",
        class: "button",
        elemType: "a",
        value: "back to menu",

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