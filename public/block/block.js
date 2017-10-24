"use strict";

export class Block {

    constructor(type, attrs = {}) {
        const el = document.createElement(type);
        Object.keys(attrs).forEach(key => {
            el.setAttribute(key, attrs[key]);
        });
        if (attrs.elemType && attrs.elemType !== 'input') {
            el.innerHTML = attrs.value;
        }
        this.el = el;
    }

    clear() {
        this.el.innerHTML = "";
    }

    hide() {
        this.el.setAttribute("hidden", "hidden");
    }

    show() {
        this.el.removeAttribute("hidden");
    }



    setCallback(callback) {
        this.el.addEventListener("click", (e) => {
            e.preventDefault();
            callback();
        }, true);
    }

    setAttributes(attrs = {}) {
        Object.keys(attrs).forEach(key => {
            this.el.setAttribute(key, attrs[key]);
        });
    }

}

export function FormCreator(main, children = []) {
    children.forEach(key => {
        let ch = new Block(key.elemType, key);
        main.append(ch, key.name);
    });
}