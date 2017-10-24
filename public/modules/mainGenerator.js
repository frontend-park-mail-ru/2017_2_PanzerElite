import { forms } from "../configs/forms.js";
import { Block, FormCreator } from "../block/block.js";

export function MainGenerator(main) {
    forms.forEach(elem => {
        const form = new Block(elem.type, { hidden: true, class: elem.class });
        FormCreator(form, elem.children);
        main.append(form, elem.name);
    });
}