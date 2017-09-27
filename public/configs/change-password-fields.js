'use strict';

const loginFields = [{
        attrs: {
            class: "inputClass",
            type: 'password',
            name: 'password',
            placeholder: 'Password'
        }
    },
    {
        attrs: {
            class: "inputClass",
            type: 'password',
            name: 'confirm',
            placeholder: 'Confirm'
        }
    },
    {
        attrs: {
            class: "subButton",
            type: 'submit',
            value: 'Change',
        }
    },
    {
        attrs: {
            class: "button",
            type: 'button',
            value: 'back to menu',
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