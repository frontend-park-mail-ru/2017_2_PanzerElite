import "./load-bar.css";
class pBar {

	constructor() {
		this.elem = document.getElementsByClassName("myBar")[0];
		this.hide();
	}

	/**
     * Показать прогресс бар 
     */
	show() {
		this.elem.parentElement.classList.remove("hidden");
	}

	/**
     * Скрыть прогресс бар 
     */
	hide() {
		this.elem.parentElement.classList.add("hidden");
	}
}
export default new pBar();