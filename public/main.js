import { MainGenerator } from "./modules/mainGenerator.js";
import { Block } from "./block/block.js";
import UserService from "./services/user-service.js";
//import PBar from "./modules/load-bar.js";

const app = document.getElementById("application");
const main = new Block("div", {});
app.appendChild(main.el);

MainGenerator(main);

const userService = new UserService(main);
//const pBar = new PBar();

//pBar.show();
userService.whoami();
//pBar.hide();

main.login.loginBtn.setCallback(() => {
    //pBar.show();
    userService.login(main.login.nick.el.value,
        main.login.password.el.value);
    //pBar.hide();
});
main.login.changeformBtn.setCallback(() => {
    main.login.hide();
    main.register.show();
});

main.register.registerBtn.setCallback(() => {
    //pBar.show();
    userService.register(main.register.nick.el.value,
        main.register.password.el.value, main.register.confirm.el.value);
    //pBar.hide();

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
    //pBar.show();
    userService.logout();
    //pBar.hide();
});

main.change.changeBtn.setCallback(() => {
    //pBar.show();
    userService.changePassword(main.change.password.el.value,
        main.change.confirm.el.value);
    //pBar.hide();
});
main.change.changeformBtn.setCallback(() => {
    main.change.hide();
    main.menu.show();
});