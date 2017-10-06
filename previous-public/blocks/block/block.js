"use strict";

/**
 * Базовый класс блока
 * @module Block
 */
export default class Block {

	/**
     * @param {HTMLElement} el - корневой элемент блока
     * @constructor
     */
	constructor(el) {
		this.el = el;
	}

	/**
     * Создать блоки с заданными характеристиками
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {string|null} [text=null] - опциональный текст блока
     * @return {Block}
     */
	static Create(tagName = "div", attrs = {}, classes = [], text = null) {
		const el = document.createElement(tagName);
		classes.forEach((className) => {
			el.classList.add(className);
		});
		Object.keys(attrs).forEach(key => {
			el.setAttribute(key, attrs[key]);
		});
		if (text) {
			el.textContent = text;
		}
		return new Block(el);
	}

	setText(text) {
		this.el.textContent = text;
	}

	/**
     * Очищает содержимое блока
     */
	clear() {
		this.el.innerHTML = "";
	}

	/**
     * Скрыть блок
     */
	hide() {
		this.el.setAttribute("hidden", "hidden");
	}

	/**
     * Показать блок
     */
	show() {
		this.el.removeAttribute("hidden");
	}

	/**
     * Добавляет к текущему блоку дочерний
     * @param {Block} block
     * @return {Block}
     */
	append(block) {
		this.el.appendChild(block.el);
		return this;
	}

}