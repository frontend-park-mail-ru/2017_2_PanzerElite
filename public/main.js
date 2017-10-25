import "./main.css";
import { Block } from "./block/block.js";
import router from "./utils/Router";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import MenuView from "./views/MenuView/MenuView";
import ChangeView from "./views/ChangeView/ChangeView";
import ThemeView from "./views/ThemeView/ThemeView";

import UserService from "./services/user-service";
import routeValidate from "./utils/RouteValidate";

const app = document.getElementById("application");
document.getElementById("background").style.backgroundImage = "url(../images/wallpaper.jpg)";

const main = new Block("div", { class: "main-container" });
app.appendChild(main.el);

//config
let login = new LoginView(main.el);
let register = new RegisterView(main.el);
let menu = new MenuView(main.el);
let change = new ChangeView(main.el);
let theme = new ThemeView(main.el);


//login.show();

let config = {
    '/login/': {
        view: login
    },
    '/register/': {
        view: register
    },
    '/menu/': {
        view: menu
    },
    '/': {
        view: menu
    },
    '/changepass/': {
        view: change
    }
};

router.init(main.el, config);
router.startListen();

routeValidate(document.location.pathname, router, true);

// main.menu.play.setCallback(() => {
//     main.menu.hide();
//     main.game.show();
// });