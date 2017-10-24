import { Block } from "./block/block.js";
import router from "./utils/Router";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import MenuView from "./views/MenuView";


const app = document.getElementById("application");
const main = new Block("div", { class: "main-container" });
app.appendChild(main.el);

//MainGenerator(main);



//config
let login = new LoginView(main.el);
let register = new RegisterView(main.el);
let menu = new MenuView(main.el);

login.show();

let config = {
    '/login': {
        view: login
    },
    '/register': {
        view: register
    },
    '/menu': {
        view: menu
    },
    '/': {
        view: login
    },
    '/changepassword': {
        // view: change
    }
};



///
//const router = new Router(main.el, config);
router.init(main.el, config);
router.startListen();
router.go("/login");
//router.go("/login");



// main.login.loginBtn.setCallback(() => {
//     userService.login(main.login.nick.el.value,
//         main.login.password.el.value);
// });
// main.login.changeformBtn.setCallback(() => {
//     main.login.hide();
//     main.register.show();
// });

// main.register.registerBtn.setCallback(() => {
//     userService.register(main.register.nick.el.value,
//         main.register.password.el.value, main.register.confirm.el.value);

// });
// main.register.changeformBtn.setCallback(() => {
//     main.login.show();
//     main.register.hide();
// });

// main.menu.changeBtn.setCallback(() => {
//     main.menu.hide();
//     main.change.show();
// });
// main.menu.logoutBtn.setCallback(() => {
//     userService.logout();
// });

// main.change.changeBtn.setCallback(() => {
//     userService.changePassword(main.change.password.el.value,
//         main.change.confirm.el.value);
// });
// main.change.changeformBtn.setCallback(() => {
//     main.change.hide();
//     main.menu.show();
// });

// main.menu.play.setCallback(() => {
//     main.menu.hide();
//     main.game.show();
// });