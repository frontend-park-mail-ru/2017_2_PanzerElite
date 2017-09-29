"use strict";
import "./form.css";
import Block from "../block/block.js";
class Form extends Block {

    /**
     * @param {Массив} fields - поля формы
     * @constructor
     */
    constructor(fields = []) {
        const el = document.createElement("form");
        super(el);

        fields.forEach((field) => {
            const input = Block.Create("input", field.attrs || {}, field.classes || []);
            this.append(input);
        });
        this.wrnMsg = this.el.getElementsByClassName("warning")[0];
    }

    /**
     * @param {Функция} callback - коллбэк функция
     * Навесить коллбэк на сабмит формы
     */
    onSubmit(callback) {
        this.el.addEventListener("submit", (e) => {
            e.preventDefault();
            const formdata = {};
            const elements = this.el.elements;
            for (let name in elements) {
                formdata[name] = elements[name].value;
            }

            callback(formdata);
        });
    }

    /**
     * @param {string} text - текст ошибки
     * @param {boolean} flag - скрыть/показать ошибку
     * Работа с ошибками
     */
    warningMsg(text, flag) {
        this.wrnMsg.value = text;
        this.wrnMsg.hidden = flag;
    }

    /**
     * @param {Number} buttonIndex - номер кнопки
     * @param {Функция} callback - коллбэк функция
     * навесить коллбэк на кнопку формы
     */
    onButton(buttonIndex, callback) {
        this.el.getElementsByClassName("button")[buttonIndex].addEventListener("click", callback, false);
    }

    reset() {
        this.el.reset();
    }
}
export default Form;