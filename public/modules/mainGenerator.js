import { forms } from "../configs/forms.js";
import { Block, FormCreator } from "../block/block.js";

export function MainGenerator(main) {
	forms.forEach(key => {
		const form = new Block("form", { hidden: true, class: "form" });
		FormCreator(form, key.children);
		main.append(form, key.name);
	});
}