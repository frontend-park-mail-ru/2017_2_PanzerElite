import "./load-bar.css";
class pBar {

    constructor() {
        this.elem = document.getElementsByClassName("myBar")[0];
        // this.id;
        this.hide();
    }

    /**
     * Показать прогресс бар 
     */
    show() {
        this.elem.parentElement.classList.remove("hidden");
        // var shift = 1;
        // this.id = setInterval(() => {
        //     if (shift >= 94) {
        //         shift = 1;
        //     } else {
        //         shift++;
        //     }
        //     this.elem.style.left = shift + "%";
        // }, 10);
    }

    /**
     * Скрыть прогресс бар 
     */
    hide() {
        this.elem.parentElement.classList.add("hidden");
        // clearInterval(this.id);
    }
}
export default new pBar();