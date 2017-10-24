import { Block } from '../block/block';


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