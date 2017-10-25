import { Block } from '../block/block';
import "./buttons.css";
import "./forms.css";
import "./inputFields.css";
import "./warningMsg.css";


export default class BaseView {
    constructor(node) {
        this.node = node;
    }

    hide() {
        this.node.classList.add('hidden');
    }

    show() {
        this.node.classList.remove('hidden');
    }
}