'use strict';

import Block from "../block/index.js"
class Form extends Block {
    constructor(fields = []) {
        const el = document.createElement('form');
        super(el);

        fields.forEach(function(field) {
            const f = Block.Create('input', field.attrs || {}, field.classes || []);
            this.append(f);
        }.bind(this));
        this.wrnMsg = this.el.getElementsByClassName("warning")[0];
    }
    onSubmit(callback) {
        this.el.addEventListener('submit', function(e) {
            e.preventDefault();
            const formdata = {};
            const elements = this.el.elements;
            for (let name in elements) {
                formdata[name] = elements[name].value;
            }

            callback(formdata);
        }.bind(this));
    }
    warningMsg(text, flag) {
        this.wrnMsg.value = text;
        this.wrnMsg.hidden = flag;
    }
    onButton(buttonIndex, callback) {
        this.el.getElementsByClassName("button")[buttonIndex].addEventListener("click", callback, false)
    }
    reset() {
        this.el.reset();
    }
}
export default Form;