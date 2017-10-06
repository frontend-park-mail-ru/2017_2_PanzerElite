import { MainGenerator } from "./modules/mainGenerator.js";
import { Block } from "./block/block.js";
import UserService from "./services/user-service.js";

const app = document.getElementById("application");
const main = new Block("div", {});
app.appendChild(main.el);

MainGenerator(main);

const userService = new UserService(main);

userService.whoami();

main.login.loginBtn.setCallback(() => {
	userService.login(main.login.nick.el.value,
		main.login.password.el.value);
});
main.login.changeformBtn.setCallback(() => {
	main.login.hide();
	main.register.show();
});

main.register.registerBtn.setCallback(() => {
	userService.register(main.register.nick.el.value,
		main.register.password.el.value, main.register.confirm.el.value);

});
main.register.changeformBtn.setCallback(() => {
	main.login.show();
	main.register.hide();
});

main.menu.changeBtn.setCallback(() => {
	main.menu.hide();
	main.change.show();
});
main.menu.logoutBtn.setCallback(() => {
	userService.logout();
});

main.change.changeBtn.setCallback(() => {
	userService.changePassword(main.change.password.el.value,
		main.change.confirm.el.value);
});
main.change.changeformBtn.setCallback(() => {
	main.change.hide();
	main.menu.show();
});