'use strict';

const loginFields = [{
        attrs: {
            class: "inputClass",
            type: 'text',
            name: 'nick',
            placeholder: 'Nickname'
        }
    },
    {
        attrs: {
            class: "inputClass",
            type: 'password',
            name: 'password',
            placeholder: 'Password'
        }
    },
    {
        attrs: {
            class: "subButton",
            type: 'submit',
            value: 'Log In',
        }
    },
    {
        attrs: {
            class: "button",
            type: 'button',
            value: 'Havent Account?',
        }
    },
    {
        attrs: {
            class: "warning",
            type: 'text',
            value: 'Invalid Data',
            readonly: 'true',
            hidden: 'true'
        }
    }
];
export default loginFields;