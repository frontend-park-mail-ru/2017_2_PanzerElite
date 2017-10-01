import loginFields from "../views/login.js";
import menuFields from "../views/menu.js";
import changeFields from "../views/change.js";
import registerFields from "../views/register.js";

export const forms = [{
	name: "login",
	children: loginFields
}, {
	name: "register",
	children: registerFields
}, {
	name: "menu",
	children: menuFields
}, {
	name: "change",
	children: changeFields
}, ];