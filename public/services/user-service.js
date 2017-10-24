import urls, { GET, POST } from "../configs/config.js";
import httpReq from "../modules/http.js";
import Validate from "../modules/validation.js";
import PBar from "../modules/load-bar.js";

const pBar = new PBar();

export default class UserService {
    constructor() {}

    login(nick, pas) {
        return new Promise((resolve, reject) => {
            pBar.show();
            if (!Validate.checkLogAndPas(nick, pas)) {
                //this.main.login.warning.setAttributes({ value: "invalid data" });
                //this.main.login.warning.show();
                pBar.hide();
                reject("invalid data");
                return;
            } else {
                httpReq(POST, urls.login, {
                        login: nick,
                        password: pas
                    })
                    .then(() => {
                        pbar.hide();
                        resolve();
                        return;

                    })
                    .catch(err => {
                        pBar.hide();
                        reject("wrong nick or password");
                        return;
                    });
            }

        });

    }

    register(nick, pas, conf) {
        return new Promise((resolve, reject) => {
            pBar.show();
            if (!Validate.checkLogAndPas(nick, pas)) {
                pBar.hide();
                reject("invalid data");
                return;
            } else {
                if (!Validate.confirmPassword(conf, pas)) {
                    pBar.hide();
                    reject("passwords dont match");
                    return;
                } else {
                    httpReq(POST, urls.register, { login: nick, password: pas, cf: conf })
                        .then(() => {
                            pBar.hide();
                            resolve();
                            return;
                        })
                        .catch(err => {
                            pBar.hide();
                            reject("nick already exists");
                            return;
                        });
                }
            }
        });
    }

    logout() {
        // this.main.register.warning.hide();
        // this.main.login.warning.hide();
        return new Promise((resolve, reject) => {
            pBar.show();
            httpReq(GET, urls.logout)
                .then(() => {
                    //this.whoami();
                    resolve();
                })
                .catch(err => {
                    pBar.hide();
                    reject("unable to logout");
                });
        });
    }

    changePassword(pas, conf) {
        return new Promise((resolve, reject) => {
            pBar.show();
            if (!Validate.checkPassword(pas)) {
                // this.main.change.warning.setAttributes({ value: "invalid data" });
                // this.main.change.warning.show();
                pBar.hide();
                reject("invalid data");
            } else {
                if (!Validate.confirmPassword(conf, pas)) {
                    pBar.hide();
                    reject("invalid data");
                } else {

                    httpReq(POST, urls.chagePassword, { password: pas, conf })
                        .then(() => {
                            //this.whoami();
                            resolve();
                        })
                        .catch(err => {
                            pBar.hide();
                            reject("something went wrong");
                        });
                }
            }
        });
    }

    whoami() {
        return new Promise((resolve, reject) => {
            httpReq(GET, urls.check)
                .then(() => {
                    //this.main.menu.show();
                    pBar.hide();
                    resolve();
                })
                .catch(error => {
                    //this.main.login.show();
                    pBar.hide();
                    reject("its very sad");
                });
        });

    }
}