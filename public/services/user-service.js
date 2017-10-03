import urls, { GET, POST } from "../configs/config.js";
import httpReq from "../modules/http.js";
import Validate from "../modules/validation.js";
import PBar from "../modules/load-bar.js";

const pBar = new PBar();

export default class UserService {
    constructor(main) {
        pBar.show();
        this.main = main;
    }


    login(nick, pas) {
        pBar.show();
        this.main.register.warning.hide();
        if (!Validate.checkLogAndPas(nick, pas)) {
            this.main.login.warning.setAttributes({ value: "invalid data" });
            this.main.login.warning.show();
            pBar.hide();
        } else {

            httpReq(POST, urls.login, {
                    login: nick,
                    password: pas
                })
                .then(() => {
                    this.whoami();
                })
                .catch(err => {
                    this.main.login.warning.setAttributes({ value: "wrong nick or password" });
                    this.main.login.warning.show();
                    console.log(err);
                    pBar.hide();
                });
        }
    }

    register(nick, pas, conf) {
        pBar.show();
        this.main.login.warning.hide();
        if (!Validate.checkLogAndPas(nick, pas)) {
            this.main.register.warning.setAttributes({ value: "invalid data" });
            this.main.register.warning.show();
            pBar.hide();
        } else {
            if (!Validate.confirmPassword(conf, pas)) {
                this.main.register.warning.setAttributes({ value: "passwords dont match" });
                this.main.register.warning.show();
                pBar.hide();
            } else {
                httpReq(POST, urls.register, { login: nick, password: pas, cf: conf })
                    .then(() => {
                        this.whoami();
                    })
                    .catch(err => {
                        this.main.register.warning.setAttributes({ value: "nick already exists" });
                        this.main.register.warning.show();
                        console.log(err);
                        pBar.hide();
                    });
            }
        }
    }


    logout() {
        this.main.register.warning.hide();
        this.main.login.warning.hide();
        pBar.show();
        httpReq(GET, urls.logout)
            .then(() => {
                this.whoami();
            })
            .catch(err => {
                console.log(err);
                pBar.hide();
            });
    }


    changePassword(pas, conf) {
        pBar.show();
        if (!Validate.checkPassword(pas)) {
            this.main.change.warning.setAttributes({ value: "invalid data" });
            this.main.change.warning.show();
            pBar.hide();
        } else {
            if (!Validate.confirmPassword(conf, pas)) {
                this.main.change.warning.setAttributes({ value: "passwords dont match" });
                this.main.change.warning.show();
                pBar.hide();
            } else {

                httpReq(POST, urls.chagePassword, { password: pas, conf })
                    .then(() => {
                        this.whoami();
                    })
                    .catch(err => {
                        console.log(err);
                        pBar.hide();
                    });
            }
        }
    }


    whoami() {
        this.main.login.hide();
        this.main.register.hide();
        this.main.menu.hide();
        this.main.change.hide();
        httpReq(GET, urls.check)
            .then(() => {
                this.main.menu.show();
                pBar.hide();
            })
            .catch(error => {
                this.main.login.show();
                pBar.hide();
                console.log(error);
            });
    }
}